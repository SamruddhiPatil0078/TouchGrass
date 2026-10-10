import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Leaf,
  Sparkles,
  Sprout,
} from 'lucide-react'

export default function QuestHistory({ completedQuests = [] }) {
  const totalQuests = completedQuests.length
  const totalMinutes = completedQuests.reduce((total, quest) => {
    const match = String(quest.duration || '').match(/\d+/)
    return total + (match ? Number(match[0]) : 0)
  }, 0)

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-4 md:space-y-10">
      {/* Page introduction */}
      <section className="relative isolate overflow-hidden rounded-[30px] border border-[var(--color-brand-soft)] bg-gradient-to-br from-white via-[var(--color-brand-soft)] to-[#dce9d1] px-6 py-8 shadow-[0_18px_55px_-35px_rgba(43,78,47,0.35)] sm:px-9 sm:py-10 md:rounded-[34px] md:px-11 md:py-12">
        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[var(--color-brand-soft)] sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-2 -top-10 h-48 w-48 rounded-full border border-[var(--color-brand-soft)] sm:h-64 sm:w-64" />
        <div className="pointer-events-none absolute -bottom-20 right-24 h-44 w-44 rounded-full bg-white/40 blur-3xl" />

        <div className="relative grid items-center gap-7 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="eyebrow inline-flex border border-[var(--color-brand-soft)] bg-white/70 px-3.5 py-2 rounded-full shadow-sm">
              <BookOpen size={14} />
              YOUR ADVENTURE JOURNAL
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[var(--color-brand-dark)] sm:text-5xl md:text-[3.5rem]">
              Your moments
              <br className="hidden sm:block" /> outdoors.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#58705a] sm:text-base">
              Every saved quest is a reminder that you made time for yourself
              and the world around you. Look back on the little things that
              made your day.
            </p>
          </div>

          <div className="relative flex items-center gap-4 rounded-[24px] border border-white/80 bg-white/65 p-5 shadow-sm backdrop-blur-sm sm:min-w-[205px] md:block md:p-6 transition hover:scale-105">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-primary)] text-white shadow-md shadow-[var(--color-brand-primary)]/20">
              <Leaf size={24} />
            </span>
            <div className="md:mt-4">
              <p className="text-3xl font-black tracking-tight text-[var(--color-brand-primary)]">
                {totalQuests}
              </p>
              <p className="mt-1 text-xs font-bold text-[#71836b]">
                {totalQuests === 1 ? 'Adventure saved' : 'Adventures saved'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journal summary */}
      <section className="grid gap-4 sm:grid-cols-2">
        <article className="soft-card flex items-center gap-4 p-5 sm:p-6 transition hover:-translate-y-1">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)]/50 text-[var(--color-brand-primary)]">
            <BookOpen size={22} />
          </span>
          <div>
            <p className="text-2xl font-black tracking-tight text-[var(--color-brand-primary)]">
              {totalQuests}
            </p>
            <p className="mt-1 text-sm font-semibold text-[#71806d]">
              {totalQuests === 1 ? 'Adventure completed' : 'Adventures completed'}
            </p>
          </div>
        </article>

        <article className="soft-card flex items-center gap-4 p-5 sm:p-6 transition hover:-translate-y-1">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)]/50 text-[var(--color-brand-primary)]">
            <Clock3 size={22} />
          </span>
          <div>
            <p className="text-2xl font-black tracking-tight text-[var(--color-brand-primary)]">
              {totalMinutes}
              <span className="ml-1 text-sm font-bold text-[var(--color-brand-sage)]">min</span>
            </p>
            <p className="mt-1 text-sm font-semibold text-[#71806d]">
              Time spent exploring*
            </p>
          </div>
        </article>
      </section>

      {/* Journal entries */}
      <section>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              THE LITTLE THINGS YOU DID
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-[var(--color-brand-dark)] sm:text-3xl">
              Your saved adventures
            </h2>
          </div>
          {totalQuests > 0 && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce8d3] bg-[#f0f6eb] px-3 py-2 text-xs font-extrabold text-[#477746]">
              <Sparkles size={14} />
              {totalQuests} {totalQuests === 1 ? 'memory' : 'memories'} collected
            </span>
          )}
        </div>

        {totalQuests === 0 ? (
          <section className="relative overflow-hidden rounded-[28px] border border-dashed border-[var(--color-brand-soft)] bg-white/75 px-6 py-14 text-center sm:py-16">
            <div className="pointer-events-none absolute -right-12 -top-14 h-44 w-44 rounded-full bg-[var(--color-brand-soft)]/70 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-[var(--color-brand-bg)] blur-2xl" />

            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[var(--color-brand-soft)] text-[var(--color-brand-primary)] shadow-sm">
              <Sprout size={30} strokeWidth={1.7} />
            </div>

            <h3 className="relative mt-5 text-xl font-black tracking-tight text-[var(--color-brand-dark)] sm:text-2xl">
              Your journal is waiting to grow
            </h3>
            <p className="relative mx-auto mt-2 max-w-md text-sm leading-6 text-[#71806d]">
              Complete all four tasks in your first outdoor adventure and save
              it here. Your little moments deserve to be remembered.
            </p>
            <div className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-bg)] px-3.5 py-2 text-xs font-extrabold text-[var(--color-brand-primary)] shadow-sm border border-[var(--color-brand-soft)]">
              <Leaf size={14} />
              Your next memory starts outside
            </div>
          </section>
        ) : (
          <div className="space-y-4">
            {completedQuests.map((quest, index) => (
              <article
                key={quest.id || `${quest.title}-${quest.completedAt || index}`}
                className="soft-card group relative p-5 transition duration-200 hover:border-[var(--color-brand-sage)] hover:-translate-y-1 sm:p-6"
              >
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[var(--color-brand-sage)] to-[var(--color-brand-primary)] opacity-80" />

                <div className="flex items-start gap-4 pl-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)]/50 text-[var(--color-brand-primary)] transition group-hover:bg-[var(--color-brand-soft)]">
                    <Leaf size={22} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="break-words text-lg font-extrabold tracking-tight text-[#294c32] sm:text-xl">
                          {quest.title || 'Outdoor adventure'}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-[#71806d]">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={14} />
                            {quest.completedAt || 'Date unavailable'}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock3 size={14} />
                            {quest.duration || 'Duration unavailable'}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#edf5e8] px-3 py-1.5 text-[10px] font-extrabold tracking-wide text-[#477746]">
                        <Leaf size={12} />
                        COMPLETED
                      </span>
                    </div>

                    {quest.reflection && (
                      <blockquote className="mt-5 rounded-[18px] border border-[#e2ebda] bg-[#f5f8f1] p-4 text-sm leading-6 text-[#526b53]">
                        <p className="mb-1.5 text-[10px] font-extrabold tracking-[0.14em] text-[#7b956e]">
                          YOUR REFLECTION
                        </p>
                        <span className="italic">“{quest.reflection}”</span>
                      </blockquote>
                    )}

                    <div className="mt-4 flex items-center justify-between border-t border-[#edf0e9] pt-4">
                      <span className="text-xs font-semibold text-[#8a9683]">
                        A little more green in your day.
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#477746] transition group-hover:translate-x-0.5">
                        Saved memory <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        <p className="mt-4 text-xs leading-5 text-[#8a9683]">
          *Estimated from the duration saved with each completed quest.
        </p>
      </section>
    </div>
  )
}
