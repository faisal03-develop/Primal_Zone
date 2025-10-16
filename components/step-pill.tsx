"use client"

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

type StepPillProps = {
  step: number
  title: string
  price: string
  className?: string
}

export function StepPill({ step, title, price, className }: StepPillProps) {
  return (
    
    <button
      type="button"
      aria-label={`Step ${step}: ${title} for ${price}`}
      className={cn(
        "w-full rounded-lg px-5 py-4 text-left font-medium outline-none",
        "bg-black/80", // neutral/dark base, keeps gradient focus on price chip
        "text-white shadow-sm transition-transform hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-[var(--color-chart-4)]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 flex-col">
          <span className="text-xs uppercase tracking-wide opacity-90">{`STEP ${step}`}</span>
          <span className="truncate text-base md:text-lg">{title}</span>s
        </div>
        <div className="flex items-center justify-center min-w-[68px] text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#6122B3] via-[#C92D78] to-[#6972F0] text-white px-4 py-1 rounded-lg shadow">
          {price}
          <span className="align-top text-xs ml-1">+GST</span>
        </div>
      </div>
    </button>
  )
}
