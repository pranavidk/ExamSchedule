import { useState, useEffect, useRef, useCallback } from 'react'

export type TimerMode = 'track' | 'pomodoro'
export type Phase = 'study' | 'break'

export interface PomodoroConfig {
  studyMinutes: number
  breakMinutes: number
}

export const POMODORO_PRESETS: PomodoroConfig[] = [
  { studyMinutes: 25, breakMinutes: 5 },
  { studyMinutes: 50, breakMinutes: 10 },
]

interface MutableState {
  mode: TimerMode
  phase: Phase
  elapsed: number
  remaining: number
  config: PomodoroConfig
  subjectId: string
  onSessionComplete: (id: string, duration: number, type: Phase) => void
}

export function useStudyTimer(
  subjectId: string,
  onSessionComplete: (id: string, duration: number, type: Phase) => void
) {
  const [mode, setModeState] = useState<TimerMode>('track')
  const [phase, setPhase] = useState<Phase>('study')
  const [elapsed, setElapsed] = useState(0)
  const [remaining, setRemaining] = useState(POMODORO_PRESETS[0].studyMinutes * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [config, setConfigState] = useState<PomodoroConfig>(POMODORO_PRESETS[0])

  // All mutable values used inside setInterval live here to avoid stale closures
  const s = useRef<MutableState>({
    mode: 'track',
    phase: 'study',
    elapsed: 0,
    remaining: POMODORO_PRESETS[0].studyMinutes * 60,
    config: POMODORO_PRESETS[0],
    subjectId,
    onSessionComplete,
  })

  // Keep ref in sync with latest render values
  s.current.mode = mode
  s.current.phase = phase
  s.current.elapsed = elapsed
  s.current.remaining = remaining
  s.current.config = config
  s.current.subjectId = subjectId
  s.current.onSessionComplete = onSessionComplete

  const intervalRef = useRef<number | null>(null)

  const stopInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => () => stopInterval(), [stopInterval])

  const start = useCallback(() => {
    if (intervalRef.current !== null) return
    setIsRunning(true)

    intervalRef.current = window.setInterval(() => {
      const cur = s.current

      if (cur.mode === 'track') {
        const next = cur.elapsed + 1
        s.current.elapsed = next
        setElapsed(next)
      } else {
        // Pomodoro: count up elapsed, count down remaining
        const nextElapsed = cur.elapsed + 1
        const nextRemaining = cur.remaining - 1
        s.current.elapsed = nextElapsed
        s.current.remaining = nextRemaining
        setElapsed(nextElapsed)
        setRemaining(nextRemaining)

        if (nextRemaining <= 0) {
          // Phase finished — save session, flip phase
          cur.onSessionComplete(cur.subjectId, nextElapsed, cur.phase)

          const nextPhase: Phase = cur.phase === 'study' ? 'break' : 'study'
          const nextSecs =
            nextPhase === 'study'
              ? cur.config.studyMinutes * 60
              : cur.config.breakMinutes * 60

          s.current.phase = nextPhase
          s.current.elapsed = 0
          s.current.remaining = nextSecs

          setPhase(nextPhase)
          setElapsed(0)
          setRemaining(nextSecs)
        }
      }
    }, 1000)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const pause = useCallback(() => {
    stopInterval()
    setIsRunning(false)
  }, [stopInterval])

  const reset = useCallback(() => {
    stopInterval()
    setIsRunning(false)

    const studySecs = s.current.config.studyMinutes * 60
    s.current.elapsed = 0
    s.current.remaining = studySecs
    s.current.phase = 'study'

    setElapsed(0)
    setRemaining(studySecs)
    setPhase('study')
  }, [stopInterval])

  const setMode = useCallback(
    (newMode: TimerMode) => {
      stopInterval()
      setIsRunning(false)
      setModeState(newMode)
      s.current.mode = newMode

      const studySecs = s.current.config.studyMinutes * 60
      s.current.elapsed = 0
      s.current.remaining = studySecs
      s.current.phase = 'study'

      setElapsed(0)
      setRemaining(studySecs)
      setPhase('study')
    },
    [stopInterval]
  )

  const setConfig = useCallback(
    (newConfig: PomodoroConfig) => {
      stopInterval()
      setIsRunning(false)
      setConfigState(newConfig)
      s.current.config = newConfig

      const studySecs = newConfig.studyMinutes * 60
      s.current.elapsed = 0
      s.current.remaining = studySecs
      s.current.phase = 'study'

      setElapsed(0)
      setRemaining(studySecs)
      setPhase('study')
    },
    [stopInterval]
  )

  return {
    mode,
    phase,
    elapsed,
    remaining,
    isRunning,
    config,
    start,
    pause,
    reset,
    setMode,
    setConfig,
  }
}
