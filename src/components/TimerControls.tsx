import { memo } from 'react'

interface Props {
  isRunning: boolean
  onStart: () => void
  onPause: () => void
  onReset: () => void
  accentColor: string
}

function TimerControls({ isRunning, onStart, onPause, onReset, accentColor }: Props) {
  return (
    <div className="flex gap-2">
      <button
        onClick={isRunning ? onPause : onStart}
        className="flex-1 py-2 rounded-xl text-[12px] font-bold text-white transition-opacity active:opacity-75"
        style={{ background: accentColor }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={onReset}
        className="px-4 py-2 rounded-xl text-[12px] font-semibold transition-colors active:opacity-75"
        style={{ background: 'rgba(0,0,0,0.07)', color: 'rgba(0,0,0,0.4)' }}
      >
        Reset
      </button>
    </div>
  )
}

export default memo(TimerControls)
