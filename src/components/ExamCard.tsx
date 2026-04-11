import { useState } from 'react'
import useCountdown from '../hooks/useCountdown'
import Module from './Module'
import type { Exam } from '../data/exams'

interface Props {
  exam: Exam
  completedTopics: Record<string, boolean>
  onToggleTopic: (id: string) => void
  onStartStudying: () => void
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function ExamCard({ exam, completedTopics, onToggleTopic, onStartStudying }: Props) {
  const [expanded, setExpanded] = useState(false)
  const { days, hours, minutes, seconds, expired } = useCountdown(exam.date)

  const allTopics = exam.modules.flatMap((m) => m.topics)
  const totalTopics = allTopics.length
  const doneTopics = allTopics.filter((t) => completedTopics[t.id]).length
  const pct = totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0
  const subjectComplete = doneTopics === totalTopics && totalTopics > 0

  const examDate = new Date(exam.date)
  const shortDate = examDate.toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short',
  })
  const timeStr = examDate.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit',
  })

  return (
    <article
      className="rounded-3xl overflow-hidden transition-all duration-300"
      style={{
        background: exam.colors.bg,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      {/* ── Always-visible header ── */}
      <div className="px-6 pt-6 pb-5">
        {/* Code row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[11px] font-bold tracking-widest uppercase"
            style={{ color: exam.colors.codeColor }}
          >
            {exam.code}
          </span>
          {subjectComplete && (
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: exam.colors.accent + '25', color: exam.colors.codeColor }}
            >
              All done ✓
            </span>
          )}
        </div>

        {/* Subject name */}
        <h2 className="text-[17px] font-semibold leading-snug text-gray-800 mb-6">
          {exam.subject}
        </h2>

        {/* Countdown */}
        {expired ? (
          <p className="text-sm font-medium text-gray-400 mb-4">Exam has passed.</p>
        ) : (
          <div className="flex flex-col items-center mb-5">
            <div className="flex items-end gap-2 leading-none">
              <span
                className="font-display font-black text-gray-900 tabular-nums"
                style={{
                  fontSize: 'clamp(72px, 15vw, 96px)',
                  lineHeight: 1,
                  fontVariationSettings: "'opsz' 144",
                }}
              >
                {days}
              </span>
            </div>
            <span className="text-[11px] tracking-[0.35em] uppercase text-gray-400 font-medium mt-1 mb-4">
              days
            </span>
            <div className="flex items-end gap-1.5">
              <TimeUnit value={hours} label="hr" accentColor={exam.colors.accent} />
              <Dot />
              <TimeUnit value={minutes} label="min" accentColor={exam.colors.accent} />
              <Dot />
              <TimeUnit value={seconds} label="sec" accentColor={exam.colors.accent} />
            </div>
          </div>
        )}

        {/* Date */}
        <p className="text-center text-[12px] text-gray-500 font-medium">
          {shortDate} &nbsp;·&nbsp; {timeStr}
        </p>
      </div>

      {/* ── Footer row: topics toggle + study button ── */}
      <div className="mx-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.08)' }} />
      <div className="flex items-stretch">
        <button
          className="flex-1 flex items-center justify-between px-6 py-3.5 text-left transition-colors"
          style={{ color: 'rgba(0,0,0,0.35)' }}
          onClick={() => setExpanded((e) => !e)}
        >
          <span className="text-[12px] font-semibold">
            {expanded ? 'Hide topics' : `${totalTopics} topics · ${pct}% done`}
          </span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-px self-stretch" style={{ background: 'rgba(0,0,0,0.08)' }} />

        {/* Start Studying button */}
        <button
          onClick={onStartStudying}
          className="px-4 py-3.5 flex items-center gap-1.5 transition-opacity active:opacity-70 flex-shrink-0"
          title="Start studying this subject"
        >
          <svg
            className="w-3.5 h-3.5"
            style={{ color: exam.colors.codeColor }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" strokeLinecap="round" />
          </svg>
          <span
            className="text-[11px] font-bold"
            style={{ color: exam.colors.codeColor }}
          >
            Study
          </span>
        </button>
      </div>

      {/* ── Expanded modules ── */}
      <div
        className="overflow-hidden"
        style={{
          maxHeight: expanded ? '3000px' : '0',
          opacity: expanded ? 1 : 0,
          transition: 'max-height 0.45s ease, opacity 0.3s ease',
        }}
      >
        <div className="mx-6 border-t mb-4" style={{ borderColor: 'rgba(0,0,0,0.06)' }} />

        {/* Overall subject progress */}
        <div className="px-6 mb-4">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[11px] text-gray-500 font-medium">Overall progress</span>
            <span className="text-[11px] font-bold" style={{ color: exam.colors.codeColor }}>
              {doneTopics}/{totalTopics}
            </span>
          </div>
          <div className="h-[3px] w-full bg-black/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%`, background: exam.colors.accent }}
            />
          </div>
        </div>

        <div className="px-6 pb-6 space-y-2">
          {exam.modules.map((mod) => (
            <Module
              key={mod.id}
              module={mod}
              completedTopics={completedTopics}
              onToggleTopic={onToggleTopic}
              accentColor={exam.colors.accent}
              doneBg={exam.colors.doneBg}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

function TimeUnit({
  value, label, accentColor,
}: {
  value: number; label: string; accentColor: string
}) {
  return (
    <div className="flex flex-col items-center w-10">
      <span
        className="text-[22px] font-bold tabular-nums leading-none"
        style={{ color: accentColor }}
      >
        {pad(value)}
      </span>
      <span className="text-[9px] uppercase tracking-widest text-gray-400 mt-0.5">{label}</span>
    </div>
  )
}

function Dot() {
  return (
    <span className="text-[18px] font-bold text-gray-300 pb-4 leading-none select-none">·</span>
  )
}
