const SESSIONS_KEY = 'study-sessions-v1'

export interface StudySession {
  duration: number // seconds
  type: 'study' | 'break'
  date: string // 'YYYY-MM-DD'
}

export interface SubjectStudyData {
  subjectId: string
  sessions: StudySession[]
  totalTime: number // seconds, study only
}

type SessionsStore = Record<string, SubjectStudyData>

function load(): SessionsStore {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function save(store: SessionsStore) {
  try {
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(store))
  } catch {
    // storage full or unavailable — fail silently
  }
}

export function addStudySession(
  subjectId: string,
  duration: number,
  type: 'study' | 'break'
): SubjectStudyData {
  const store = load()
  const existing = store[subjectId] ?? { subjectId, sessions: [], totalTime: 0 }
  const session: StudySession = {
    duration,
    type,
    date: new Date().toISOString().slice(0, 10),
  }
  const updated: SubjectStudyData = {
    ...existing,
    sessions: [...existing.sessions, session],
    totalTime: existing.totalTime + (type === 'study' ? duration : 0),
  }
  store[subjectId] = updated
  save(store)
  return updated
}

export function getSubjectStudyData(subjectId: string): SubjectStudyData | null {
  return load()[subjectId] ?? null
}

export function getTodayStudySeconds(): number {
  const today = new Date().toISOString().slice(0, 10)
  const store = load()
  return Object.values(store).reduce((total, data) => {
    return (
      total +
      data.sessions
        .filter((s) => s.date === today && s.type === 'study')
        .reduce((sum, s) => sum + s.duration, 0)
    )
  }, 0)
}
