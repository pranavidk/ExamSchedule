import { useState, useCallback, memo } from 'react'
import { useStudyTimer, POMODORO_PRESETS, type PomodoroConfig, type Phase } from '../hooks/useStudyTimer'
import { addStudySession, getSubjectStudyData } from '../lib/studySessions'
import ModeSelector from './ModeSelector'
import TimerControls from './TimerControls'

interface Props {
  subjectId: string
  accentColor: string
  codeColor: string
}

function fmt(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function fmtTotal(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function StudyTimer({ subjectId, accentColor, codeColor }: Props) {
  const [open, setOpen] = useState(false)

  // Preset selection: index into POMODORO_PRESETS or 'custom'
  const [selectedPreset, setSelectedPreset] = useState<number | 'custom'>(0)
  const [customStudy, setCustomStudy] = useState('25')
  const [customBreak, setCustomBreak] = useState('5')

  // Local mirror of totalTime so it updates immediately when a session saves
  const [totalStudyTime, setTotalStudyTime] = useState(
    () => getSubjectStudyData(subjectId)?.totalTime ?? 0
  )

  const handleSessionComplete = useCallback(
    (id: string, duration: number, type: Phase) => {
      if (duration < 5) return
      const updated = addStudySession(id, duration, type)
      setTotalStudyTime(updated.totalTime)
    },
    []
  )

  const timer = useStudyTimer(subjectId, handleSessionComplete)

  function applyPreset(idx: number) {
    setSelectedPreset(idx)
    timer.setConfig(POMODORO_PRESETS[idx])
  }

  function applyCustom() {
    const study = Math.max(1, Math.min(120, parseInt(customStudy, 10) || 25))
    const brk = Math.max(1, Math.min(60, parseInt(customBreak, 10) || 5))
    const cfg: PomodoroConfig = { studyMinutes: study, breakMinutes: brk }
    setSelectedPreset('custom')
    timer.setConfig(cfg)
    // Clamp inputs to validated values
    setCustomStudy(String(study))
    setCustomBreak(String(brk))
  }

  const displayTime = timer.mode === 'track' ? fmt(timer.elapsed) : fmt(timer.remaining)
  const phaseLabel =
    timer.mode === 'track' ? 'Studying' : timer.phase === 'study' ? 'Study' : 'Break'

  const timerActive = timer.isRunning || timer.elapsed > 0
  const clockColor = timer.isRunning ? accentColor : timerActive ? codeColor : 'rgba(0,0,0,0.13)'

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: 'rgba(0,0,0,0.03)' }}
    >
      {/* ── Header toggle ── */}
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: codeColor }}
          >
            Study Timer
          </span>
          {totalStudyTime > 0 && (
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: accentColor + '22', color: codeColor }}
            >
              {fmtTotal(totalStudyTime)}
            </span>
          )}
          {timer.isRunning && (
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: accentColor }}
            />
          )}
        </div>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          style={{ color: 'rgba(0,0,0,0.28)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ── Body ── */}
      <div
        className="overflow-hidden"
        style={{
          maxHeight: open ? '700px' : '0',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.35s ease, opacity 0.25s ease',
        }}
      >
        <div className="px-4 pb-4 space-y-3">
          {/* Mode toggle */}
          <ModeSelector mode={timer.mode} onChange={timer.setMode} accentColor={accentColor} />

          {/* Pomodoro config */}
          {timer.mode === 'pomodoro' && (
            <div className="space-y-2.5">
              <p
                className="text-[9px] font-bold tracking-[0.3em] uppercase"
                style={{ color: 'rgba(0,0,0,0.3)' }}
              >
                Presets
              </p>

              {/* Preset pills */}
              <div className="flex gap-2">
                {POMODORO_PRESETS.map((p, i) => {
                  const active = selectedPreset === i
                  return (
                    <button
                      key={i}
                      onClick={() => applyPreset(i)}
                      className="flex-1 py-1.5 rounded-xl text-[11px] font-bold transition-all duration-150"
                      style={{
                        background: active ? accentColor + '18' : 'rgba(0,0,0,0.04)',
                        color: active ? codeColor : 'rgba(0,0,0,0.38)',
                        outline: active ? `1.5px solid ${accentColor}55` : '1.5px solid transparent',
                      }}
                    >
                      {p.studyMinutes}/{p.breakMinutes}
                    </button>
                  )
                })}
              </div>

              {/* Custom input row */}
              <div className="flex items-center gap-2">
                <div
                  className="flex flex-1 items-center gap-1.5 px-3 py-1.5 rounded-xl"
                  style={{ background: 'rgba(0,0,0,0.04)' }}
                >
                  <input
                    type="number"
                    min={1}
                    max={120}
                    value={customStudy}
                    onChange={(e) => setCustomStudy(e.target.value)}
                    className="w-9 bg-transparent text-[12px] font-semibold text-gray-700 outline-none text-center tabular-nums"
                  />
                  <span className="text-[10px] text-gray-400 select-none">study</span>
                  <span className="text-gray-300 select-none">/</span>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={customBreak}
                    onChange={(e) => setCustomBreak(e.target.value)}
                    className="w-9 bg-transparent text-[12px] font-semibold text-gray-700 outline-none text-center tabular-nums"
                  />
                  <span className="text-[10px] text-gray-400 select-none">break</span>
                </div>
                <button
                  onClick={applyCustom}
                  className="px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all duration-150"
                  style={{
                    background: selectedPreset === 'custom' ? accentColor + '18' : 'rgba(0,0,0,0.05)',
                    color: selectedPreset === 'custom' ? codeColor : 'rgba(0,0,0,0.38)',
                    outline:
                      selectedPreset === 'custom'
                        ? `1.5px solid ${accentColor}55`
                        : '1.5px solid transparent',
                  }}
                >
                  Set
                </button>
              </div>
            </div>
          )}

          {/* ── Clock display ── */}
          <div className="flex flex-col items-center py-2">
            <span
              className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1.5 transition-colors duration-300"
              style={{ color: timerActive ? accentColor : 'rgba(0,0,0,0.22)' }}
            >
              {phaseLabel}
            </span>

            <span
              className="font-display font-black tabular-nums transition-colors duration-300"
              style={{
                fontSize: 54,
                lineHeight: 1,
                color: clockColor,
                fontVariationSettings: "'opsz' 144",
              }}
            >
              {displayTime}
            </span>

            {timer.mode === 'pomodoro' && (
              <span
                className="text-[10px] mt-2 font-medium"
                style={{ color: 'rgba(0,0,0,0.3)' }}
              >
                {timer.config.studyMinutes}m study &nbsp;/&nbsp; {timer.config.breakMinutes}m break
              </span>
            )}
          </div>

          {/* Controls */}
          <TimerControls
            isRunning={timer.isRunning}
            onStart={timer.start}
            onPause={timer.pause}
            onReset={timer.reset}
            accentColor={accentColor}
          />

          {/* Total study time badge */}
          {totalStudyTime > 0 && (
            <div
              className="flex items-center justify-between px-3 py-2 rounded-xl"
              style={{ background: accentColor + '14' }}
            >
              <span className="text-[10px] text-gray-500 font-medium">Total study time</span>
              <span className="text-[11px] font-bold" style={{ color: codeColor }}>
                {fmtTotal(totalStudyTime)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(StudyTimer)
