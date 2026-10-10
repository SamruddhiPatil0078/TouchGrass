import {
  Award,
  CalendarDays,
  CheckCircle2,
  Flame,
  Leaf,
  LockKeyhole,
  Sparkles,
  Target,
  Trophy,
  TreePine,
} from 'lucide-react'

export default function Progress({
  xp = 0,
  completedQuests = [],
  streakStats = {
    currentStreak: 0,
    longestStreak: 0,
  },
}) {
  const badges = [
    {
      name: 'First Steps',
      description: 'Complete your first nature quest.',
      requirement: '1 quest completed',
      icon: Leaf,
      unlocked: completedQuests.length >= 1,
    },
    {
      name: 'Nature Explorer',
      description: 'Complete five nature quests.',
      requirement: '5 quests completed',
      icon: Target,
      unlocked: completedQuests.length >= 5,
    },
    {
      name: 'Outdoor Champion',
      description: 'Complete ten nature quests.',
      requirement: '10 quests completed',
      icon: Trophy,
      unlocked: completedQuests.length >= 10,
    },
    {
      name: 'Consistency Club',
      description: 'Maintain a three-day outdoor streak.',
      requirement: '3-day longest streak',
      icon: Flame,
      unlocked: streakStats.longestStreak >= 3,
    },
  ]

  const stats = [
    {
      label: 'Total experience',
      value: xp.toLocaleString(),
      suffix: 'XP',
      detail: 'Earned from completed activities',
      icon: Sparkles,
    },
    {
      label: 'Quests completed',
      value: completedQuests.length.toLocaleString(),
      suffix: 'quests',
      detail: 'Every adventure counts',
      icon: Target,
    },
    {
      label: 'Current streak',
      value: streakStats.currentStreak.toLocaleString(),
      suffix: streakStats.currentStreak === 1 ? 'day' : 'days',
      detail: 'Keep your rhythm going',
      icon: Flame,
    },
    {
      label: 'Longest streak',
      value: streakStats.longestStreak.toLocaleString(),
      suffix: streakStats.longestStreak === 1 ? 'day' : 'days',
      detail: 'Your personal best',
      icon: CalendarDays,
    },
  ]

  const unlockedCount = badges.filter((badge) => badge.unlocked).length

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-4 md:space-y-10">
      {/* Page intro */}
      <section className="relative isolate overflow-hidden rounded-[30px] border border-[var(--color-brand-soft)] bg-gradient-to-br from-white via-[var(--color-brand-soft)] to-[#dce9d1] px-6 py-8 shadow-[0_18px_55px_-35px_rgba(43,78,47,0.35)] sm:px-9 sm:py-10 md:rounded-[34px] md:px-11 md:py-12">
        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[var(--color-brand-soft)] sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-2 -top-10 h-48 w-48 rounded-full border border-[var(--color-brand-soft)] sm:h-64 sm:w-64" />
        <div className="pointer-events-none absolute -bottom-24 right-24 h-48 w-48 rounded-full bg-white/40 blur-3xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="eyebrow inline-flex border border-[var(--color-brand-soft)] bg-white/70 px-3.5 py-2 rounded-full shadow-sm">
              <TreePine size={14} />
              YOUR PERSONAL GROWTH JOURNEY
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[var(--color-brand-dark)] sm:text-5xl md:text-[3.5rem]">
              Look how far
              <br className="hidden sm:block" /> you've grown.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#58705a] sm:text-base">
              Progress isn't about doing the most. It's about showing up,
              one small adventure at a time. Celebrate every step outdoors.
            </p>
          </div>

          <div className="relative flex items-center gap-4 rounded-[24px] border border-white/80 bg-white/65 p-5 shadow-sm backdrop-blur-sm sm:min-w-[210px] md:block md:p-6 transition hover:scale-105">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-primary)] text-white shadow-md shadow-[var(--color-brand-primary)]/20">
              <Award size={25} />
            </span>
            <div className="md:mt-4">
              <p className="text-3xl font-black tracking-tight text-[var(--color-brand-primary)]">
                {unlockedCount}<span className="text-lg text-[var(--color-brand-sage)]">/{badges.length}</span>
              </p>
              <p className="mt-1 text-xs font-bold text-[#71836b]">
                Milestones unlocked
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              YOUR ACTIVITY
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-[var(--color-brand-dark)] sm:text-3xl">
              Your progress at a glance
            </h2>
          </div>
          <p className="text-sm text-[#71806d]">Every little step adds up.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, suffix, detail, icon: Icon }, index) => (
            <article
              key={label}
              className="soft-card group p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-brand-sage)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)]/50 text-[var(--color-brand-primary)] transition group-hover:bg-[var(--color-brand-soft)]">
                  <Icon size={22} strokeWidth={1.9} />
                </span>
                <span className="rounded-full bg-[var(--color-brand-bg)] px-2.5 py-1 text-[10px] font-extrabold text-[var(--color-brand-sage)]">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <p className="break-words text-3xl font-black tracking-tight text-[var(--color-brand-primary)]">
                  {value}
                </p>
                <span className="text-xs font-bold text-[#789071]">{suffix}</span>
              </div>
              <h3 className="mt-1 text-sm font-extrabold text-[#304d35]">
                {label}
              </h3>
              <p className="mt-2 text-xs leading-5 text-[#8a9683]">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Achievement badges */}
      <section>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              LITTLE WINS, BIG FEELING
            </p>
            <div className="mt-1 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-[var(--color-brand-primary)]">
                <Trophy size={21} />
              </span>
              <h2 className="text-2xl font-black tracking-tight text-[var(--color-brand-dark)] sm:text-3xl">
                Badges & milestones
              </h2>
            </div>
          </div>
          <p className="text-sm font-semibold text-[#71806d]">
            {unlockedCount} of {badges.length} achievements earned
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {badges.map(({ name, description, requirement, icon: Icon, unlocked }) => (
            <article
              key={name}
              className={`soft-card group relative flex items-start gap-4 p-5 transition duration-200 sm:p-6 ${
                unlocked
                  ? 'border-[var(--color-brand-sage)]/50 bg-gradient-to-br from-white to-[var(--color-brand-bg)] hover:-translate-y-0.5'
                  : 'opacity-75 grayscale-[0.2]'
              }`}
            >
              {unlocked && (
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--color-brand-soft)] blur-2xl" />
              )}

              <span
                className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[19px] ${
                  unlocked
                    ? 'bg-[var(--color-brand-primary)] text-white shadow-md shadow-[var(--color-brand-primary)]/15'
                    : 'bg-[#eef1eb] text-[#899584]'
                }`}
              >
                <Icon size={25} strokeWidth={1.8} />
              </span>

              <div className="relative min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className={`font-extrabold ${unlocked ? 'text-[var(--color-brand-dark)]' : 'text-[#65715f]'}`}>
                    {name}
                  </h3>
                  {unlocked ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-brand-soft)] px-2 py-1 text-[9px] font-extrabold tracking-wide text-[var(--color-brand-primary)]">
                      <CheckCircle2 size={11} /> EARNED
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#f0f2ed] px-2 py-1 text-[9px] font-extrabold tracking-wide text-[#899584]">
                      <LockKeyhole size={10} /> LOCKED
                    </span>
                  )}
                </div>

                <p className="mt-1.5 text-sm leading-5 text-[#71806d]">
                  {description}
                </p>

                <p className={`mt-3 text-[10px] font-extrabold tracking-[0.08em] ${
                  unlocked ? 'text-[var(--color-brand-sage)]' : 'text-[#90998b]'
                }`}>
                  {unlocked ? 'MILESTONE ACHIEVED' : `GOAL · ${requirement.toUpperCase()}`}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Local data note */}
      <section className="soft-card p-5 sm:p-6 !bg-[var(--color-brand-soft)]/50 border-none shadow-none">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-[var(--color-brand-primary)] shadow-sm">
            <Leaf size={21} />
          </span>
          <div>
            <h3 className="font-extrabold text-[var(--color-brand-primary)]">
              Your journey, saved locally
            </h3>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-[#456a43]">
              Your XP, completed quests, and streaks are saved in this browser.
              Clearing browser site data may reset your saved progress.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
