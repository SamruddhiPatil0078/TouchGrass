

import { useEffect, useState } from 'react'

import {

  BrowserRouter,

  NavLink,

  Route,

  Routes,

  Outlet,

} from 'react-router-dom'

import {

  BookOpen,

  House,

  Leaf,

  Sparkles,

  Trophy,

} from 'lucide-react'



import Home from './pages/Home'

import CreateQuest from './pages/CreateQuest'

import QuestHistory from './pages/QuestHistory'

import Progress from './pages/Progress'



const XP_KEY = 'touchgrass-xp'

const QUESTS_KEY = 'touchgrass-completed-quests'



const adventures = [

  'Nature explorer',

  'Mindful walk',

  'Wildlife watcher',

  'Green thumb',

]



function getLocalDateKey(date = new Date()) {

  const year = date.getFullYear()

  const month = String(date.getMonth() + 1).padStart(2, '0')

  const day = String(date.getDate()).padStart(2, '0')



  return `${year}-${month}-${day}`

}



function getStreakStats(completedQuests) {

  const dates = [

    ...new Set(

      completedQuests

        .map((quest) => quest.completedDate)

        .filter(Boolean),

    ),

  ].sort()



  if (dates.length === 0) {

    return { currentStreak: 0, longestStreak: 0 }

  }



  const dayNumbers = dates.map((date) => {

    const [year, month, day] = date.split('-').map(Number)

    return Date.UTC(year, month - 1, day) / 86400000

  })



  let longestStreak = 1

  let streak = 1



  for (let i = 1; i < dayNumbers.length; i += 1) {

    if (dayNumbers[i] - dayNumbers[i - 1] === 1) {

      streak += 1

    } else {

      streak = 1

    }



    longestStreak = Math.max(longestStreak, streak)

  }



  const today = getLocalDateKey()

  const yesterday = getLocalDateKey(

    new Date(Date.now() - 86400000),

  )



  const lastDate = dates[dates.length - 1]

  let currentStreak = 0



  if (lastDate === today || lastDate === yesterday) {

    currentStreak = 1



    for (let i = dates.length - 1; i > 0; i -= 1) {

      if (dayNumbers[i] - dayNumbers[i - 1] === 1) {

        currentStreak += 1

      } else {

        break

      }

    }

  }



  return { currentStreak, longestStreak }

}



function Layout() {
  const navItems = [
    { to: '/', label: 'Home', icon: House, end: true },
    { to: '/create-quest', label: 'Create Quest', icon: Sparkles },
    { to: '/history', label: 'Adventure Journal', icon: BookOpen },
    { to: '/progress', label: 'My Progress', icon: Trophy },
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--color-brand-bg)] text-[#203b2a]">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-32 -top-36 h-96 w-96 rounded-full bg-[#dcebd2]/70 blur-3xl" />
        <div className="absolute -left-40 top-[42%] h-80 w-80 rounded-full bg-[#e7edcf]/60 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-[var(--color-brand-soft)] bg-[var(--color-brand-bg)]/80 backdrop-blur-xl">
        <div className="page-shell flex min-h-[78px] items-center justify-between gap-4">
          <NavLink to="/" className="group flex shrink-0 items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[var(--color-brand-primary)] text-white shadow-lg shadow-[var(--color-brand-primary)]/20 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <Leaf size={24} />
            </span>
            <span>
              <span className="block text-xl font-black tracking-tight text-[var(--color-brand-dark)]">
                NatureQuest<span className="text-[var(--color-brand-sage)]">.</span>
              </span>
              <span className="mt-0.5 block text-[11px] font-bold tracking-[0.12em] text-[#71836b]">
                LITTLE ADVENTURES, REAL FRESH AIR
              </span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 rounded-full border border-white/80 bg-white/70 p-1.5 shadow-sm md:flex">
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--color-brand-primary)] text-white shadow-md shadow-[var(--color-brand-primary)]/15'
                      : 'text-[#667866] hover:bg-[var(--color-brand-soft)]/50 hover:text-[var(--color-brand-dark)]'
                  }`
                }
              >
                <Icon size={16} strokeWidth={2.2} />
                {label}
              </NavLink>
            ))}
          </nav>

          <span className="hidden items-center gap-2 rounded-full border border-[var(--color-brand-soft)] bg-[#eaf2e3] px-3.5 py-2 text-xs font-extrabold text-[#376443] lg:inline-flex">
            <span className="h-2 w-2 rounded-full bg-[#6f9e50] shadow-[0_0_0_4px_#d7e8cb]" />
            AI · LOCAL-FIRST
          </span>
        </div>

        <nav className="page-shell flex gap-2 overflow-x-auto pb-3 md:hidden hide-scrollbar">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2.5 text-xs font-bold transition ${
                  isActive
                    ? 'bg-[var(--color-brand-primary)] text-white shadow-sm'
                    : 'border border-[var(--color-brand-soft)] bg-white/80 text-[#667866]'
                }`
              }
            >
              <Icon size={14} />
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-shell relative z-10 min-h-[calc(100vh-160px)] py-7 md:py-11">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-[var(--color-brand-soft)] bg-[var(--color-brand-bg)]/80 backdrop-blur-md px-4 py-7 text-center">
        <p className="text-sm font-semibold text-[#71836b]">
          Made for a little more green in your day <span aria-hidden="true">🌿</span>
        </p>
        <p className="mt-1 text-[11px] font-medium tracking-wide text-[#9aa692]">
          STEP OUTSIDE. SLOW DOWN. FEEL BETTER.
        </p>
      </footer>
    </div>
  )
}

function AppPages() {

  const [xp, setXp] = useState(() => {

    try {

      return Number(localStorage.getItem(XP_KEY) || 0)

    } catch {

      return 0

    }

  })



  const [completedQuests, setCompletedQuests] = useState(() => {

    try {

      return JSON.parse(localStorage.getItem(QUESTS_KEY) || '[]')

    } catch {

      return []

    }

  })



  const [quest, setQuest] = useState(null)

  const [completedTasks, setCompletedTasks] = useState([])

  const [savedCurrentQuest, setSavedCurrentQuest] = useState(false)

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')



  useEffect(() => {

    try {

      localStorage.setItem(XP_KEY, String(xp))

    } catch {

      // Browser storage may be unavailable.

    }

  }, [xp])



  useEffect(() => {

    try {

      localStorage.setItem(

        QUESTS_KEY,

        JSON.stringify(completedQuests),

      )

    } catch {

      // Browser storage may be unavailable.

    }

  }, [completedQuests])



  async function createAdventure({ minutes, mood, adventure }) {

    setLoading(true)

    setError('')

    setQuest(null)

    setCompletedTasks([])

    setSavedCurrentQuest(false)



    const prompt = `

Create one safe, practical outdoor mini-adventure.



Available time: ${minutes} minutes.

Mood: ${mood}.

Adventure style: ${adventure}.



Activities must be possible in a nearby park, garden, or safe

outdoor public space. They should require no purchases and

must avoid touching unknown plants or animals.



Return ONLY valid JSON with exactly these keys:

"title": a short string

"duration": a string

"tasks": an array of exactly 4 short actionable strings

"safetyTip": one short safety tip

"closingMessage": one encouraging sentence



Do not use Markdown fences.

`



    try {

      const response = await fetch('/api/ollama/generate', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify({

          model: 'gemma3:1b',

          prompt,

          stream: false,

          format: 'json',

        }),

      })



      if (!response.ok) {

        throw new Error(`Ollama returned HTTP ${response.status}.`)

      }



      const data = await response.json()

      const raw = String(data.response || '')

        .trim()

        .replace(/^```(?:json)?\s\*/i, '')

        .replace(/\s\*```$/i, '')



      const parsedQuest = JSON.parse(raw)



      if (

        !parsedQuest.title ||

        !Array.isArray(parsedQuest.tasks) ||

        parsedQuest.tasks.length !== 4 ||

        !parsedQuest.safetyTip ||

        !parsedQuest.closingMessage

      ) {

        throw new Error(

          'The AI response was not in the expected format.',

        )

      }



      setQuest({

        ...parsedQuest,

        duration: parsedQuest.duration || `${minutes} minutes`,

      })

    } catch (err) {

      setError(

        `${err.message || 'Something went wrong.'} Check that Ollama is running and gemma3:1b is installed, then try again.`,

      )

    } finally {

      setLoading(false)

    }

  }



  function toggleTask(index, checked) {

    setCompletedTasks((previous) => {

      const alreadyChecked = previous.includes(index)



      if (checked && !alreadyChecked) {

        setXp((current) => current + 10)

      }



      if (!checked && alreadyChecked) {

        setXp((current) => Math.max(0, current - 10))

      }



      if (checked) {

        return alreadyChecked ? previous : [...previous, index]

      }



      return previous.filter((item) => item !== index)

    })

  }



  function completeCurrentQuest(reflection = '') {

    if (

      !quest ||

      completedTasks.length !== quest.tasks.length ||

      savedCurrentQuest

    ) {

      return

    }



    const record = {

      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,

      title: quest.title,

      duration: quest.duration,

      completedAt: new Date().toLocaleDateString(),

      completedDate: getLocalDateKey(),

      reflection: reflection.trim(),

    }



    setCompletedQuests((previous) => [record, ...previous])

    setSavedCurrentQuest(true)

  }



  const streakStats = getStreakStats(completedQuests)



  const sharedProps = {

    xp,

    completedQuests,

    quest,

    completedTasks,

    loading,

    error,

    savedCurrentQuest,

    createAdventure,

    toggleTask,

    completeCurrentQuest,

    streakStats,

  }



  return (

    <Routes>

      <Route element={<Layout />}>

        <Route

          path="/"

          element={

            <Home

              xp={xp}

              completedCount={completedQuests.length}

            />

          }

        />



        <Route

          path="/create-quest"

          element={<CreateQuest {...sharedProps} />}

        />



        <Route

          path="/history"

          element={

            <QuestHistory completedQuests={completedQuests} />

          }

        />



        <Route

          path="/progress"

          element={

            <Progress

              xp={xp}

              completedQuests={completedQuests}

              streakStats={streakStats}

            />

          }

        />



        <Route

          path="/*"

          element={

            <Home

              xp={xp}

              completedCount={completedQuests.length}

            />

          }

        />

      </Route>

    </Routes>

  )

}



export default function App() {

  return (

    <BrowserRouter>

      <AppPages />

    </BrowserRouter>

  )

}
