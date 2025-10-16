"use client"

import { useEffect, useRef, useState } from "react"

// Local inline SVG icons to avoid external dependency resolution issues
function IconCheck({ className }: { className?: string }) {
  return (
    <img 
      src="/images/tick.6630df9e.svg" 
      alt="check" 
      className={className} 
      aria-hidden="true"
    />
  )
}

function IconX({ className }: { className?: string }) {
  return (
    <img 
      src="/images/white-cross.27c316e0.svg" 
      alt="cross" 
      className={className} 
      aria-hidden="true"
    />
  )
}

function IconMale({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="9" r="4" />
      <path d="M15 3h6v6" />
      <path d="M21 3l-7 7" />
    </svg>
  )
}

// Local utility: simple className combiner
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

// Inline StepPill component matching expected props
function StepPill({ step, title, price }: { step: number; title: string; price: string }) {
  return (
    <div style={{background: ' linear-gradient(to right, var(--mainpurple), var(--mainpink))'}} className="flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 text-sm font-medium">
          {step}
        </span>
        <span className="text-sm md:text-base" >{title}</span>
      </div>
      <span className="text-sm md:text-base text-white px-3 py-1 rounded-full" >{price}</span>
    </div>
  )
}

type StepInfo = { step: number; title: string; price: string }

type ServiceCardProps = {
  title: string
  tests: string[]
  assessment: string[]
  steps: string[]
  stepPills: StepInfo[]
  icon?: string
  className?: string
  backgroundImage?: string
}


export default function HormoneResetCard({
  title,
  tests,
  assessment,
  steps,
  stepPills,
  icon,
  className,
  backgroundImage,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Add delay before showing background image (only on larger screens)
          const timer = setTimeout(() => {
            if (window.innerWidth >= 1024) { // lg breakpoint
              setShowBackground(true)
            }
          }, 800) // 800ms delay
          
          return () => clearTimeout(timer)
        } else {
          setIsInView(false)
          setShowBackground(false)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the card is visible
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <article
      ref={cardRef}
      aria-labelledby="mens-reset-title"
      className={cn(
        "relative rounded-2xl",
        "mx-4 my-1", // reduced margin
        className,
      )}>
    
    <div
  className={cn(
    "relative rounded-2xl text-white p-3 md:p-4 overflow-hidden min-h-full w-full transition-all duration-500",
    "bg-black border-2 border-gray-700 md:border-0", // mobile background & border
    "md:bg-[url('/images/service_bg.png')] md:bg-auto md:bg-center md:bg-no-repeat" // desktop image
  )}
  style={{
    height: "100%",
  }}
>

        {/* Content overlay */}
        <div className="relative z-10">
        <header className="flex items-center gap-4 p-3 md:p-4">
        <div className="flex items-center justify-center">
        {icon ? (
          <img
            src={icon}
            alt={`${title} icon`}
            className="h-12 w-12"
            style={{ objectFit: "contain" }}
          />
        ) : (
          <IconMale className="h-12 w-12" />
        )}
        </div>


          <h2 id="mens-reset-title" className="text-pretty text-3xl md:text-4xl font-normal">
            {title}
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-8 px-2 pb-2 md:grid-cols-3 md:px-4 md:pb-4">
          {/* Column 1 */}
          <section aria-labelledby="pathology-heading" className="space-y-2">
            <h3 id="pathology-heading" className="text-sm font-normal uppercase tracking-wide">
              Pathology & Blood Tests
            </h3>
            <p className="leading-relaxed opacity-90 font-light">
              Our health practitioners require thorough pathology tests as part of the assessment. Some of the essential
              markers covered by these tests include:
            </p>
            <ul className="space-y-2">
              {tests.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-chart-4)]"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Column 2 */}
          <section aria-labelledby="assessment-heading" className="space-y-2">
            <h3 id="assessment-heading" className="text-sm font-normal uppercase tracking-wide">
              Assessment Phase
            </h3>
            <p className="leading-relaxed opacity-90 font-light">
              Practitioners will assess the Pathology results and recommend a detailed health plan specific to your
              needs.
            </p>
            <ul className="space-y-2">
              {assessment.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-chart-4)]"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <IconX className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-destructive)]" aria-hidden="true" />
                <span className="leading-relaxed font-light">No treatment products are included in the fee</span>
              </li>
            </ul>
          </section>

          {/* Column 3 */}
          <section aria-labelledby="ready-heading" className="space-y-2">
            <h3 id="ready-heading" className="text-sm font-normal uppercase tracking-wide">
              Ready to get started?
            </h3>
            <p className="leading-relaxed opacity-90 font-light">
              If you consent to pathology testing and assessment, the rest is easy:
            </p>
            <ul className="space-y-2">
              {steps.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-chart-4)]"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 space-y-2">
              {stepPills.map((p) => (
                <StepPill key={p.step + p.title} step={p.step} title={p.title} price={p.price} />
              ))}
            </div>
          </section>
        </div>
        </div>
      </div>
    </article>
  )
}
