

import { useState } from 'react'

import {

  AlertCircle,

  CheckCircle2,

  Clock3,

  Leaf,

  LoaderCircle,

  Sparkles,

} from 'lucide-react'



const moods = [

  {

    id: 'Relaxed',

    emoji: '😌',

    description: 'Keep it calm',

  },

  {

    id: 'Stressed',

    emoji: '🌧️',

    description: 'Reset my mind',

  },

  {

    id: 'Bored',

    emoji: '🫧',

    description: 'Surprise me',

  },

  {

    id: 'Adventurous',

    emoji: '🧭',

    description: 'Try something new',

  },

]



const adventures = [

  {

    id: 'Nature explorer',

    emoji: '🌿',

    description: 'Notice the little things around you.',

  },

  {

    id: 'Mindful walk',

    emoji: '🍃',

    description: 'Slow down and reset.',

  },

  {

    id: 'Wildlife watcher',

    emoji: '🦋',

    description: 'Look for signs of local wildlife.',

  },

  {

    id: 'Green thumb',

    emoji: '🌱',

    description: 'Connect with plants and greenery.',

  },

]



export default function CreateQuest({

  quest,

  completedTasks,

  loading,

  error,

  savedCurrentQuest,

  createAdventure,

  toggleTask,

  completeCurrentQuest,

}) {

  const [minutes, setMinutes] = useState(30)

  const [mood, setMood] = useState('Bored')

  const [adventure, setAdventure] = useState('Nature explorer')

  const [reflection, setReflection] = useState('')



  async function handleGenerate() {

    setReflection('')

    await createAdventure({

      minutes,

      mood,

      adventure,

    })

  }



  const progress = quest

    ? (completedTasks.length / quest.tasks.length) * 100

    : 0



  return (

    <div className="mx-auto max-w-5xl space-y-8">

      {/* Page heading */}

      <div>

        <span className="eyebrow inline-flex rounded-full border border-[var(--color-brand-soft)] bg-white/80 px-3.5 py-2 shadow-sm"><Sparkles size={14} /> YOUR PERSONAL OUTDOOR RESET</span>



        <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-[var(--color-brand-dark)] md:text-5xl">

          What kind of outside time do you need?

        </h1>



        <p className="mt-4 max-w-2xl text-base leading-7 text-[#71806d] md:text-lg">

          Pick a few preferences and your local AI will

          build a mini-adventure just for you.

        </p>

      </div>



      {/* Preference selection */}

      <section className="soft-card space-y-8 rounded-[28px] border border-[#e4eadf] bg-white/90 p-5 shadow-[0_18px_55px_-38px_rgba(36,75,43,0.35)] md:p-8">

        {/* Duration */}

        <div>

          <label className="field-label">

            1. How much time do you have?

          </label>



          <div className="grid grid-cols-3 gap-3">

            {[15, 30, 60].map((value) => (

              <button

                key={value}

                type="button"

                onClick={() => setMinutes(value)}

                className={`option-button flex items-center justify-center gap-2 text-center font-extrabold ${

                  minutes === value ? 'active' : ''

                }`}

              >

                <Clock3 size={17} />

                {value} min

              </button>

            ))}

          </div>

        </div>



        {/* Mood */}

        <div>

          <label className="field-label">

            2. How are you feeling?

          </label>



          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

            {moods.map((item) => (

              <button

                key={item.id}

                type="button"

                onClick={() => setMood(item.id)}

                className={`option-button ${

                  mood === item.id ? 'active' : ''

                }`}

              >

                <span className="text-2xl">

                  {item.emoji}

                </span>



                <span className="mt-2 block font-extrabold">

                  {item.id}

                </span>



                <span className="mt-1 block text-xs text-[#71806d]">

                  {item.description}

                </span>

              </button>

            ))}

          </div>

        </div>



        {/* Adventure type */}

        <div>

          <label className="field-label">

            3. Choose your adventure style

          </label>



          <div className="grid gap-3 sm:grid-cols-2">

            {adventures.map((item) => (

              <button

                key={item.id}

                type="button"

                onClick={() => setAdventure(item.id)}

                className={`option-button flex gap-3 ${

                  adventure === item.id ? 'active' : ''

                }`}

              >

                <span className="text-2xl">

                  {item.emoji}

                </span>



                <span>

                  <span className="block font-extrabold">

                    {item.id}

                  </span>



                  <span className="mt-1 block text-sm leading-5 text-[#71806d]">

                    {item.description}

                  </span>

                </span>

              </button>

            ))}

          </div>

        </div>



        {/* Generate */}

        <button

          type="button"

          onClick={handleGenerate}

          disabled={loading}

          className="btn-primary w-full rounded-2xl py-4 text-base shadow-lg shadow-[#2e653f]/15 transition hover:-translate-y-0.5"

        >

          {loading ? (

            <>

              <LoaderCircle

                className="animate-spin"

                size={18}

              />

              Growing your quest…

            </>

          ) : (

            <>

              <Sparkles size={18} />

              Generate my adventure

            </>

          )}

        </button>



        {/* Error */}

        {error && (

          <div

            role="alert"

            className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"

          >

            <AlertCircle

              className="mt-0.5 shrink-0"

              size={19}

            />

            <span>{error}</span>

          </div>

        )}

      </section>



      {/* Generated quest */}

      {quest && (

        <section className="soft-card">

          <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-soft)] via-[var(--color-brand-bg)] to-[#d8e8cc] p-6 md:p-8">

            <span className="eyebrow">

              YOUR AI-GENERATED ADVENTURE

            </span>



            <h2 className="mt-4 text-2xl font-black tracking-tight text-[var(--color-brand-dark)] md:text-3xl">

              {quest.title}

            </h2>



            <p className="mt-2 text-sm font-bold text-[var(--color-brand-primary)]">

              {quest.duration || `${minutes} minutes`}

              {' · '}

              {adventure}

            </p>



            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/70">

              <div

                className="h-full rounded-full bg-[var(--color-brand-sage)] transition-all duration-700 ease-out"

                style={{ width: `${progress}%` }}

              />

            </div>



            <p className="mt-2 text-sm font-bold text-[var(--color-brand-primary)]">

              {completedTasks.length} of {quest.tasks.length}{' '}

              tasks complete · {completedTasks.length * 10} XP

              earned on this quest

            </p>

          </div>



          <div className="space-y-5 p-5 md:p-8">

            {/* Task checklist */}

            <div className="space-y-3">

              {quest.tasks.map((task, index) => {

                const checked = completedTasks.includes(index)



                return (

                  <label

                    key={`${index}-${task}`}

                    className={`flex cursor-pointer gap-3 rounded-2xl border p-4 transition-all duration-300 ${

                      checked

                        ? 'border-[var(--color-brand-sage)] bg-[var(--color-brand-soft)]/40'

                        : 'border-[var(--color-brand-soft)] bg-white hover:border-[var(--color-brand-sage)]/50 hover:bg-[var(--color-brand-bg)]'

                    }`}

                  >

                    <input

                      type="checkbox"

                      checked={checked}

                      onChange={(event) =>

                        toggleTask(index, event.target.checked)

                      }

                      className="mt-1 h-5 w-5 accent-[var(--color-brand-primary)]"

                    />



                    <span

                      className={`leading-6 ${

                        checked

                          ? 'text-[#71806d] line-through'

                          : 'text-[#2b4932]'

                      }`}

                    >

                      {task}

                    </span>



                    {checked && (

                      <CheckCircle2

                        className="ml-auto mt-0.5 shrink-0 text-[var(--color-brand-primary)] animate-in zoom-in"

                        size={19}

                      />

                    )}

                  </label>

                )

              })}

            </div>



            {/* Safety tip */}

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">

              <p className="font-extrabold text-amber-900">

                A quick safety reminder

              </p>



              <p className="mt-1 text-sm leading-6 text-amber-900/80">

                {quest.safetyTip}

              </p>

            </div>



            {/* Reflection */}

            <div>

              <label

                className="field-label"

                htmlFor="reflection"

              >

                A little reflection (optional)

              </label>



              <textarea

                id="reflection"

                value={reflection}

                onChange={(event) =>

                  setReflection(event.target.value)

                }

                rows={3}

                placeholder="What did you notice, enjoy, or feel outside?"

                className="w-full resize-y rounded-2xl border border-[var(--color-brand-soft)] bg-white p-4 leading-6 outline-none transition-all duration-300 focus:border-[var(--color-brand-sage)] focus:ring-4 focus:ring-[var(--color-brand-sage)]/20"

              />

            </div>



            {/* Save quest */}

            {savedCurrentQuest ? (

              <div className="rounded-2xl bg-[var(--color-brand-soft)] p-4 font-bold text-[var(--color-brand-primary)] flex items-center gap-3">

                <CheckCircle2 size={20} />

                <span>Quest saved to your Adventure Journal. Great job getting outside! 🌿</span>

              </div>

            ) : (

              <button

                type="button"

                onClick={() => completeCurrentQuest(reflection)}

                disabled={

                  completedTasks.length !== quest.tasks.length

                }

                className="btn-primary w-full disabled:cursor-not-allowed"

              >

                {completedTasks.length === quest.tasks.length

                  ? 'Complete and save quest'

                  : `Complete all ${quest.tasks.length} tasks to save`}



                <Leaf size={18} />

              </button>

            )}



            {savedCurrentQuest && (

              <p className="text-center text-sm text-[#71806d]">

                {quest.closingMessage}

              </p>

            )}

          </div>

        </section>

      )}

    </div>

  )

}
