import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Compass,
  Leaf,
  Sparkles,
  TreePine,
  Clock3,
  ShieldCheck,
  Footprints,
} from 'lucide-react'

export default function Home({ xp = 0, completedCount = 0 }) {
  const features = [
    {
      icon: Sparkles,
      title: 'Made for your mood',
      description:
        'Relaxed, stressed, bored, or adventurous — get a quest that fits your day.',
      tag: 'PERSONALISED',
    },
    {
      icon: Compass,
      title: 'Small steps count',
      description:
        'Four simple activities help you notice more of the world around you.',
      tag: 'EASY TO START',
    },
    {
      icon: ShieldCheck,
      title: 'Your data stays local',
      description:
        'Quests use your local Ollama model. Your progress stays in this browser.',
      tag: 'LOCAL-FIRST',
    },
  ]

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-[30px] border border-[var(--color-brand-soft)] bg-gradient-to-br from-white via-[var(--color-brand-soft)] to-[#dce9d1] px-6 py-9 shadow-[0_18px_55px_-35px_rgba(43,78,47,0.35)] sm:px-9 md:rounded-[36px] md:px-12 md:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 12% 20%, rgba(255,255,255,.9) 0, transparent 26%), radial-gradient(circle at 85% 75%, rgba(255,255,255,.7) 0, transparent 28%)',
          }}
        />

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#c6d9b8]/70 sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#c6d9b8]/70 sm:h-72 sm:w-72" />

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow inline-flex border border-[var(--color-brand-soft)] bg-white/70 px-3.5 py-2 rounded-full shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand-sage)]" />
              YOUR NEXT LITTLE ADVENTURE STARTS HERE
            </span>

            <h1 className="mt-5 text-[2.55rem] font-black leading-[1.08] tracking-[-0.045em] text-[var(--color-brand-dark)] sm:text-5xl md:text-[3.65rem] lg:text-[4.1rem]">
              A little less scrolling.
              <br />
              A little more <span className="text-[var(--color-brand-sage)]">wonder.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#58705a] sm:text-base md:text-lg">
              Turn a free moment into a tiny outdoor quest, designed around
              your mood and powered by AI running on your own device.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/create-quest"
                className="btn-primary min-h-12 group"
              >
                Create my quest
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/progress"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-brand-soft)] bg-white/75 px-6 py-3 text-sm font-extrabold text-[var(--color-brand-primary)] transition hover:-translate-y-0.5 hover:border-[var(--color-brand-sage)] hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-brand-soft)]"
              >
                See my progress
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-[#668060] sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Clock3 size={15} /> 15–60 minute quests
              </span>
              <span className="inline-flex items-center gap-2">
                <Leaf size={15} /> A little fresh air, your way
              </span>
            </div>
          </div>

          {/* Decorative adventure card */}
          <div className="relative mx-auto w-full max-w-[340px] md:ml-auto md:mr-0 group">
            <div className="absolute -inset-4 rounded-[34px] bg-white/30 blur-xl transition-all duration-500 group-hover:bg-white/50" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-[var(--color-brand-dark)] p-5 text-white shadow-2xl shadow-[var(--color-brand-dark)]/20 sm:p-6 transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-[#6f955b]/25 blur-2xl" />
              <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-[#9ebd7a]/15 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.15em] text-[#dcebd2]">
                  YOUR DAILY ESCAPE
                </span>
                <Sparkles size={18} className="text-[#d4e7b9]" />
              </div>

              <div className="relative mt-8 flex h-48 items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#416c45] to-[#2d5939]">
                <div className="absolute h-36 w-36 rounded-full border border-white/10" />
                <div className="absolute h-28 w-28 rounded-full border border-white/10" />
                <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-[#1f432d]/60 to-transparent" />
                <TreePine
                  size={122}
                  strokeWidth={1.1}
                  className="relative z-10 text-[#d8e8c7] drop-shadow-lg"
                />
                <span className="absolute right-6 top-6 text-xl text-[#d8e8c7]">✦</span>
                <span className="absolute bottom-6 left-7 text-lg text-[#c0d8a9]">✧</span>
              </div>

              <h2 className="relative mt-5 text-2xl font-black tracking-tight">
                The world is your playground.
              </h2>
              <p className="relative mt-2 text-sm leading-6 text-[#d0dfc8]/85">
                Step outside, slow down, and find something wonderful in the
                ordinary.
              </p>

              <div className="relative mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#d0dfc8]">
                  <Footprints size={15} /> One step at a time
                </span>
                <span className="text-lg" aria-hidden="true">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              WHY NATUREQUEST
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-[var(--color-brand-dark)] sm:text-3xl">
              A better kind of break.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#71806d]">
            Small, mindful moments outside can make an ordinary day feel
            different.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, tag }, index) => (
            <article
              key={title}
              className="soft-card group p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-brand-sage)] sm:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)]/50 text-[var(--color-brand-primary)] transition duration-200 group-hover:scale-105 group-hover:bg-[var(--color-brand-soft)]">
                  <Icon size={22} strokeWidth={1.9} />
                </span>
                <span className="rounded-full bg-[#f4f7f0] px-2.5 py-1.5 text-[9px] font-extrabold tracking-[0.12em] text-[#7b9072]">
                  {tag}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold tracking-tight text-[#294c32]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#71806d]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Progress summary */}
      <section className="relative overflow-hidden rounded-[28px] border border-[var(--color-brand-soft)] bg-gradient-to-r from-white via-[var(--color-brand-bg)] to-[var(--color-brand-soft)] p-6 shadow-[0_14px_45px_-35px_rgba(43,78,47,0.35)] sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
        <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full bg-[var(--color-brand-soft)]/80 blur-3xl" />

        <div className="relative">
          <span className="eyebrow">
            <Leaf size={14} /> YOUR JOURNEY SO FAR
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-[var(--color-brand-dark)] sm:text-3xl">
            Every little step adds up.
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-6 text-[#71806d] sm:text-base">
            Keep exploring at your own pace. Every completed quest is a small
            win worth celebrating.
          </p>
        </div>

        <div className="relative mt-6 grid grid-cols-2 gap-3 md:mt-0 md:min-w-[280px]">
          <div className="rounded-[20px] border border-white bg-white/85 p-4 shadow-sm sm:p-5 transition hover:scale-105">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand-primary)]">
              <Sparkles size={18} />
            </span>
            <div className="mt-3 text-3xl font-black tracking-tight text-[var(--color-brand-primary)]">
              {xp}
            </div>
            <div className="mt-1 text-xs font-bold text-[#758471]">Total XP</div>
          </div>

          <div className="rounded-[20px] border border-white bg-white/85 p-4 shadow-sm sm:p-5 transition hover:scale-105">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand-primary)]">
              <Compass size={18} />
            </span>
            <div className="mt-3 text-3xl font-black tracking-tight text-[var(--color-brand-primary)]">
              {completedCount}
            </div>
            <div className="mt-1 text-xs font-bold text-[#758471]">
              Quests completed
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
