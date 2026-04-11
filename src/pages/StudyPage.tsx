import { useState, useEffect, useCallback } from 'react'
import { exams } from '../data/exams'
import { useStudyTimer, POMODORO_PRESETS, type PomodoroConfig, type Phase } from '../hooks/useStudyTimer'
import { addStudySession, getSubjectStudyData, getTodayStudySeconds } from '../lib/studySessions'
import ModeSelector from '../components/ModeSelector'
import TimerControls from '../components/TimerControls'

const LAST_SUBJECT_KEY = 'study-last-subject'

interface Props {
  initialSubjectId?: string | null
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmt(s: number) {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

function fmtDuration(s: number) {
  if (s < 60) return `${s}s`
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function StudyPage({ initialSubjectId }: Props) {
  const [selectedId, setSelectedId] = useState<string>(() => {
    if (initialSubjectId) return initialSubjectId
    try {
      return localStorage.getItem(LAST_SUBJECT_KEY) ?? exams[0].id
    } catch {
      return exams[0].id
    }
  })

  const exam = exams.find((e) => e.id === selectedId) ?? exams[0]

  // Pomodoro config UI state
  const [selectedPreset, setSelectedPreset] = useState<number | 'custom'>(0)
  const [customStudy, setCustomStudy] = useState('25')
  const [customBreak, setCustomBreak] = useState('5')

  // Session stats — updated reactively when sessions are saved
  const [todaySeconds, setTodaySeconds] = useState(() => getTodayStudySeconds())
  const [sessions, setSessions] = useState(() => getSubjectStudyData(selectedId)?.sessions ?? [])

  // Reload sessions when subject changes
  useEffect(() => {
    setSessions(getSubjectStudyData(selectedId)?.sessions ?? [])
    try { localStorage.setItem(LAST_SUBJECT_KEY, selectedId) } catch { /* ignore */ }
  }, [selectedId])

  const handleSessionComplete = useCallback(
    (id: string, duration: number, type: Phase) => {
      if (duration < 5) return
      const updated = addStudySession(id, duration, type)
      setSessions(updated.sessions)
      setTodaySeconds(getTodayStudySeconds())
    },
    []
  )

  const timer = useStudyTimer(selectedId, handleSessionComplete)

  function selectSubject(id: string) {
    timer.reset()
    setSelectedId(id)
    setSelectedPreset(0)
    timer.setConfig(POMODORO_PRESETS[0])
  }

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
    setCustomStudy(String(study))
    setCustomBreak(String(brk))
  }

  const displayTime = timer.mode === 'track' ? fmt(timer.elapsed) : fmt(timer.remaining)
  const phaseLabel =
    timer.mode === 'track' ? 'Studying' : timer.phase === 'study' ? 'Study' : 'Break'

  // Recent study sessions for this subject (most recent first, max 8)
  const recentSessions = [...sessions]
    .filter((s) => s.type === 'study')
    .reverse()
    .slice(0, 8)

  // Total study time for this subject
  const subjectTotal = sessions
    .filter((s) => s.type === 'study')
    .reduce((sum, s) => sum + s.duration, 0)

  const clockColor = timer.isRunning
    ? exam.colors.accent
    : timer.elapsed > 0
    ? exam.colors.codeColor
    : 'rgba(0,0,0,0.12)'

  return (
    <div className="min-h-screen pb-20" style={{ background: '#f5efe6' }}>
      <main className="max-w-md mx-auto px-5 pt-10">

        {/* ── Subject selector ── */}
        <div className="mb-8">
          <p
            className="text-[9px] font-bold tracking-[0.3em] uppercase mb-2"
            style={{ color: 'rgba(0,0,0,0.3)' }}
          >
            Subject
          </p>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ background: exam.colors.bg, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
          >
            <select
              value={selectedId}
              onChange={(e) => selectSubject(e.target.value)}
              className="w-full appearance-none bg-transparent pl-4 pr-10 py-3.5 text-[14px] font-semibold text-gray-800 outline-none cursor-pointer"
            >
              {exams.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.code} — {e.subject}
                </option>
              ))}
            </select>
            {/* Chevron */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                className="w-4 h-4"
                style={{ color: exam.colors.codeColor }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Timer card ── */}
        <div
          className="rounded-3xl px-6 py-7 mb-6"
          style={{
            background: exam.colors.bg,
            boxShadow: '0 2px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          {/* Mode toggle */}
          <ModeSelector mode={timer.mode} onChange={timer.setMode} accentColor={exam.colors.accent} />

          {/* Pomodoro config */}
          {timer.mode === 'pomodoro' && (
            <div className="mt-4 space-y-2.5">
              <p
                className="text-[9px] font-bold tracking-[0.3em] uppercase"
                style={{ color: 'rgba(0,0,0,0.28)' }}
              >
                Presets
              </p>
              <div className="flex gap-2">
                {POMODORO_PRESETS.map((p, i) => {
                  const active = selectedPreset === i
                  return (
                    <button
                      key={i}
                      onClick={() => applyPreset(i)}
                      className="flex-1 py-1.5 rounded-xl text-[12px] font-bold transition-all duration-150"
                      style={{
                        background: active ? exam.colors.accent + '18' : 'rgba(0,0,0,0.05)',
                        color: active ? exam.colors.codeColor : 'rgba(0,0,0,0.35)',
                        outline: active
                          ? `1.5px solid ${exam.colors.accent}55`
                          : '1.5px solid transparent',
                      }}
                    >
                      {p.studyMinutes}/{p.breakMinutes}
                    </button>
                  )
                })}
              </div>
              {/* Custom row */}
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
                  <span className="text-gray-300 mx-0.5 select-none">/</span>
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
                  className="px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all"
                  style={{
                    background: selectedPreset === 'custom' ? exam.colors.accent + '18' : 'rgba(0,0,0,0.05)',
                    color: selectedPreset === 'custom' ? exam.colors.codeColor : 'rgba(0,0,0,0.35)',
                    outline: selectedPreset === 'custom'
                      ? `1.5px solid ${exam.colors.accent}55`
                      : '1.5px solid transparent',
                  }}
                >
                  Set
                </button>
              </div>
            </div>
          )}

          {/* ── Clock ── */}
          <div className="flex flex-col items-center py-8">
            <span
              className="text-[10px] font-bold tracking-[0.35em] uppercase mb-3 transition-colors duration-300"
              style={{ color: timer.isRunning || timer.elapsed > 0 ? exam.colors.accent : 'rgba(0,0,0,0.2)' }}
            >
              {phaseLabel}
            </span>
            <span
              className="font-display font-black tabular-nums transition-colors duration-500"
              style={{
                fontSize: 'clamp(72px, 20vw, 96px)',
                lineHeight: 1,
                color: clockColor,
                fontVariationSettings: "'opsz' 144",
              }}
            >
              {displayTime}
            </span>
            {timer.mode === 'pomodoro' && (
              <span
                className="text-[11px] mt-3 font-medium"
                style={{ color: 'rgba(0,0,0,0.28)' }}
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
            accentColor={exam.colors.accent}
          />
        </div>

        {/* ── Stats row ── */}
        {(todaySeconds > 0 || subjectTotal > 0) && (
          <div className="flex gap-3 mb-6">
            {todaySeconds > 0 && (
              <div
                className="flex-1 rounded-2xl px-4 py-3"
                style={{ background: 'rgba(0,0,0,0.04)' }}
              >
                <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-0.5">Today</p>
                <p className="text-[18px] font-black text-gray-800 tabular-nums font-display">
                  {fmtDuration(todaySeconds)}
                </p>
              </div>
            )}
            {subjectTotal > 0 && (
              <div
                className="flex-1 rounded-2xl px-4 py-3"
                style={{ background: exam.colors.bg }}
              >
                <p
                  className="text-[9px] font-bold tracking-[0.25em] uppercase mb-0.5"
                  style={{ color: exam.colors.codeColor + 'aa' }}
                >
                  This subject
                </p>
                <p
                  className="text-[18px] font-black tabular-nums font-display"
                  style={{ color: exam.colors.codeColor }}
                >
                  {fmtDuration(subjectTotal)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── Session history ── */}
        {recentSessions.length > 0 && (
          <div>
            <p
              className="text-[9px] font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: 'rgba(0,0,0,0.28)' }}
            >
              Recent sessions
            </p>
            <div className="space-y-2">
              {recentSessions.map((s, i) => {
                const isToday = s.date === today()
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-2xl px-4 py-3"
                    style={{ background: 'rgba(0,0,0,0.035)' }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: exam.colors.accent }}
                      />
                      <span className="text-[13px] font-bold text-gray-700 tabular-nums">
                        {fmtDuration(s.duration)}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-gray-400">
                      {isToday ? 'Today' : s.date}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

      </main>
    </div>
  )
}
