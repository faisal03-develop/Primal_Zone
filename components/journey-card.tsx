"use client"
import { cn } from "@/lib/utils"

type Props = {
  img: string
  description: string
  name: string
  className?: string
}

export default function JourneyCard({ img, description, name, className }: Props) {
  return (
    <article
      className={cn(
        // gradient border shell
        "rounded-2xl w-[390px] p-[2px] card-gradient shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]",
        className,
      )}
      aria-label={name}
    >
      <div 
        className="rounded-2xl p-6 flex flex-col gap-4 h-full text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/h_card_bg2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative w-full overflow-hidden rounded-lg group cursor-pointer">
          {/* image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img || "/placeholder.svg"}
            alt="YouTube video thumbnail"
            className="h-[220px] w-full object-cover"
          />
          {/* glassy blur behind the icon (transparent before hover) */}
          <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* glassy blur behind the icon (transparent before hover) */}
            <span
              className="absolute left-1/2 top-1/2 h-8 w-12 -translate-x-1/2 -translate-y-1/2
                         rounded-md backdrop-blur-md bg-[color:var(--panel)]/35 opacity-80
                         transition-all duration-300 ease-out
                         group-hover:opacity-0 group-hover:scale-110"
            />
            {/* supplied YouTube SVG icon */}
            <svg
              width="60"
              height="42"
              viewBox="0 0 60 42"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         transition-transform duration-300 ease-out
                         drop-shadow-[0_0_8px_rgba(0,0,0,0.45)]
                         group-hover:drop-shadow-[0_0_24px_rgba(255,0,0,0.55)]
                         group-hover:scale-105"
            >
              {/* base shape: transparent ghost state -> fills red on hover */}
              <path
                d="M24.1 30L39.4105 21L24.1 12V30ZM58.202 6.51C58.5855 7.92 58.851 9.81 59.028 12.21C59.2345 14.61 59.323 16.68 59.323 18.48L59.5 21C59.5 27.57 59.028 32.4 58.202 35.49C57.4645 38.19 55.7535 39.93 53.0985 40.68C51.712 41.07 49.175 41.34 45.281 41.52C41.446 41.73 37.9355 41.82 34.6905 41.82L30 42C17.6395 42 9.94 41.52 6.9015 40.68C4.2465 39.93 2.5355 38.19 1.798 35.49C1.4145 34.08 1.149 32.19 0.972 29.79C0.7655 27.39 0.677 25.32 0.677 23.52L0.5 21C0.5 14.43 0.972 9.6 1.798 6.51C2.5355 3.81 4.2465 2.07 6.9015 1.32C8.288 0.93 10.825 0.66 14.719 0.48C18.554 0.27 22.0645 0.18 25.3095 0.18L30 0C42.3605 0 50.06 0.48 53.0985 1.32C55.7535 2.07 57.4645 3.81 58.202 6.51Z"
                className="transition-[fill,stroke,filter] duration-300
                           fill-transparent stroke-transparent
                           group-hover:fill-[color:var(--yt-red)]
                           group-hover:stroke-transparent"
              />
              {/* keep the play triangle solid white on hover; semi-ghost before hover */}
              <path
                d="M24.1 30L39.4105 21L24.1 12V30Z"
                className="transition-opacity duration-300 fill-white opacity-60 group-hover:opacity-100"
              />
            </svg>
          </span>
          <span className="sr-only">Play on YouTube</span>
        </div>

        <p className="font-light text-[color:var(--brand-white)] leading-relaxed">{description}</p>

        <p className="mt-auto font-semibold text-[color:var(--brand-pink)]">{name}</p>
      </div>
    </article>
  )
}
