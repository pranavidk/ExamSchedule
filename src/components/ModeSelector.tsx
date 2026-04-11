import { memo } from 'react'
import type { TimerMode } from '../hooks/useStudyTimer'

interface Props {
  mode: TimerMode
  onChange: (mode: TimerMode) => void
  accentColor: string
}

function ModeSelector({ mode, onChange, accentColor }: Props) {
  return (
    <div
      className="flex rounded-xl overflow-hidden"
      style={{ background: 'rgba(0,0,0,0.05)' }}
    >
      {(['track', 'pomodoro'] as TimerMode[]).map((m) => {
        const active = mode === m
        return (
          <button
            key={m}
            onClick={() => onChange(m)}
            className="flex-1 py-1.5 text-[11px] font-semibold tracking-wide transition-all duration-200"
            style={{
              background: active ? accentColor : 'transparent',
              color: active ? '#fff' : 'rgba(0,0,0,0.38)',
              borderRadius: m === 'track' ? '10px 0 0 10px' : '0 10px 10px 0',
            }}
          >
            {m === 'track' ? 'Track Only' : 'Pomodoro'}
          </button>
        )
      })}
    </div>
  )
}

export default memo(ModeSelector)
