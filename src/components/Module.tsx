import { useState, memo } from 'react'
import TopicItem from './TopicItem'
import type { ExamModule } from '../data/exams'

interface Props {
  module: ExamModule
  completedTopics: Record<string, boolean>
  onToggleTopic: (id: string) => void
  accentColor: string
  doneBg: string
}

const Module = memo(function Module({ module, completedTopics, onToggleTopic, accentColor, doneBg }: Props) {
  const [open, setOpen] = useState(true)

  const total = module.topics.length
  const done = module.topics.filter((t) => completedTopics[t.id]).length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0
  const allDone = done === total

  return (
    <div
      className="rounded-2xl overflow-hidden transition-colors duration-500"
      style={{ background: allDone ? doneBg : 'rgba(0,0,0,0.04)' }}
    >
      {/* Module header */}
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500"
            style={{ background: allDone ? accentColor : '#c4c4c4' }}
          />
          <span className={`text-[13px] font-semibold truncate transition-colors duration-300 ${allDone ? 'text-gray-600' : 'text-gray-700'}`}>
            {module.name}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-3">
          <span className="text-[11px] font-medium text-gray-400">{done}/{total}</span>
          <svg
            className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Progress bar */}
      <div className="px-4 pb-2">
        <div className="h-[3px] w-full bg-black/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, background: accentColor }}
          />
        </div>
      </div>

      {/* Topics */}
      {open && (
        <ul className="px-3 pb-3 space-y-0.5">
          {module.topics.map((topic) => (
            <TopicItem
              key={topic.id}
              topicId={topic.id}
              name={topic.name}
              completed={!!completedTopics[topic.id]}
              accentColor={accentColor}
              onToggle={onToggleTopic}
            />
          ))}
        </ul>
      )}
    </div>
  )
})

export default Module
