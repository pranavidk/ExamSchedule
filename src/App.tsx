import { useState, useEffect } from 'react'
import { exams } from './data/exams'
import ExamCard from './components/ExamCard'
import StudyPage from './pages/StudyPage'
import useCountdown from './hooks/useCountdown'

const STORAGE_KEY = 'exam-tracker-v2-topics'

type Page = 'dashboard' | 'study'

function loadFromStorage(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

// ── Simple hash-based routing ─────────────────────────────────────────────────

function getPageFromHash(): Page {
  return window.location.hash === '#study' ? 'study' : 'dashboard'
}

export default function App() {
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>(loadFromStorage)
  const [page, setPage] = useState<Page>(getPageFromHash)
  const [studySubjectId, setStudySubjectId] = useState<string | null>(null)

  // Keep hash in sync with page state
  useEffect(() => {
    window.location.hash = page === 'study' ? '#study' : '#dashboard'
  }, [page])

  // Handle browser back/forward
  useEffect(() => {
    const handler = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTopics))
  }, [completedTopics])

  function handleToggleTopic(topicId: string) {
    setCompletedTopics((prev) => ({ ...prev, [topicId]: !prev[topicId] }))
  }

  function navigateToStudy(subjectId?: string) {
    setStudySubjectId(subjectId ?? null)
    setPage('study')
  }

  function navigateToDashboard() {
    setPage('dashboard')
  }

  // ── Stats ──
  const allTopics = exams.flatMap((e) => e.modules.flatMap((m) => m.topics))
  const totalTopics = allTopics.length
  const doneTopics = allTopics.filter((t) => completedTopics[t.id]).length
  const overallPct = totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0
  const completedSubjects = exams.filter((e) =>
    e.modules.flatMap((m) => m.topics).every((t) => completedTopics[t.id])
  ).length

  const sortedExams = [...exams].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  const nextExam = sortedExams.find((e) => new Date(e.date) > new Date())

  return (
    <div className="min-h-screen" style={{ background: '#f5efe6' }}>

      {/* ── Shared header / nav ── */}
      <header
        className="sticky top-0 z-30 backdrop-blur-sm"
        style={{ background: 'rgba(245,239,230,0.9)' }}
      >
        <div
          className="max-w-6xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-6 border-b border-black/[0.06]"
        >
          {/* Left: title + stats (dashboard) or back link (study) */}
          <div>
            <h1 className="text-[15px] font-bold tracking-tight text-gray-900">
              {page === 'study' ? 'Study' : 'Exam Tracker'}
            </h1>
            {page === 'dashboard' && (
              <p className="text-[11px] text-gray-400 mt-0.5">
                {completedSubjects}/{exams.length} subjects &nbsp;·&nbsp; {doneTopics}/{totalTopics} topics
              </p>
            )}
          </div>

          {/* Center: nav tabs */}
          <nav
            className="flex rounded-xl overflow-hidden"
            style={{ background: 'rgba(0,0,0,0.06)' }}
          >
            {(['dashboard', 'study'] as Page[]).map((p) => {
              const active = page === p
              return (
                <button
                  key={p}
                  onClick={() => (p === 'study' ? navigateToStudy() : navigateToDashboard())}
                  className="px-4 py-1.5 text-[12px] font-semibold transition-all duration-200 capitalize"
                  style={{
                    background: active ? 'rgba(0,0,0,0.12)' : 'transparent',
                    color: active ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0.38)',
                  }}
                >
                  {p === 'dashboard' ? 'Dashboard' : 'Study'}
                </button>
              )
            })}
          </nav>

          {/* Right: overall progress (dashboard only) */}
          {page === 'dashboard' && (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[11px] text-gray-400 font-medium mb-1">Overall</span>
                <div className="w-36 h-[5px] bg-black/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${overallPct}%`,
                      background: 'linear-gradient(90deg, #9f7aea, #3b82f6, #10b981)',
                    }}
                  />
                </div>
              </div>
              <span className="text-[22px] font-display font-black text-gray-800">
                {overallPct}
                <span className="text-sm font-sans font-normal text-gray-400">%</span>
              </span>
            </div>
          )}
        </div>
      </header>

      {/* ── Pages ── */}
      {page === 'dashboard' ? (
        <main className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          {nextExam && <NextExamBanner exam={nextExam} />}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {sortedExams.map((exam) => (
              <ExamCard
                key={exam.id}
                exam={exam}
                completedTopics={completedTopics}
                onToggleTopic={handleToggleTopic}
                onStartStudying={() => navigateToStudy(exam.id)}
              />
            ))}
          </div>
        </main>
      ) : (
        <StudyPage initialSubjectId={studySubjectId} />
      )}

      {page === 'dashboard' && (
        <footer className="text-center text-[11px] text-gray-300 py-10 font-medium tracking-wide">
          PROGRESS SAVED AUTOMATICALLY
        </footer>
      )}
    </div>
  )
}

// ── Next exam banner ──────────────────────────────────────────────────────────

function NextExamBanner({ exam }: { exam: (typeof exams)[0] }) {
  const { days, hours, minutes, expired } = useCountdown(exam.date)
  if (expired) return null

  const dateStr = new Date(exam.date).toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long',
  })
  const timeStr = new Date(exam.date).toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit',
  })

  return (
    <div
      className="rounded-3xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      style={{ background: exam.colors.bg, boxShadow: '0 2px 20px rgba(0,0,0,0.08)' }}
    >
      <div>
        <p
          className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1"
          style={{ color: exam.colors.codeColor }}
        >
          Up next
        </p>
        <p className="text-[18px] font-bold text-gray-800 leading-tight">{exam.subject}</p>
        <p className="text-[12px] text-gray-500 mt-1 font-medium">
          {dateStr} · {timeStr}
        </p>
      </div>
      <div className="flex items-end gap-4 sm:flex-shrink-0">
        <div className="flex flex-col items-center">
          <span
            className="font-display font-black leading-none tabular-nums"
            style={{
              fontSize: 56,
              color: exam.colors.codeColor,
              fontVariationSettings: "'opsz' 144",
            }}
          >
            {days}
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-medium mt-0.5">
            days
          </span>
        </div>
        <div className="flex flex-col items-center pb-5">
          <div className="flex items-center gap-1.5">
            <SmallUnit value={hours} label="hr" color={exam.colors.accent} />
            <span className="text-gray-300 font-bold text-sm">·</span>
            <SmallUnit value={minutes} label="min" color={exam.colors.accent} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SmallUnit({ value, label, color }: { value: number; label: string; color: string }) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <span className="text-[20px] font-bold tabular-nums leading-none" style={{ color }}>
        {pad(value)}
      </span>
      <span className="text-[8px] uppercase tracking-widest text-gray-400 mt-0.5">{label}</span>
    </div>
  )
}
