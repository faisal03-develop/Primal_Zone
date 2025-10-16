"use client"

import React, { useRef } from "react"
import styles from "../app/css/process.module.css"
import { cn } from "@/lib/utils"
import { motion, useInView, Variants } from "framer-motion"

type CardProps = {
  icon: string
  lines: string[]
  variant: "symptom" | "solution"
  className?: string
}

function InfoCard({ icon, lines, variant, className }: CardProps) {
  const base =
    "relative rounded-xl p-6 md:p-8 min-h-56 flex flex-col gap-4 overflow-hidden items-start"

  const isSolution = variant === "solution"

  const cardStyle = isSolution
    ? {
        border: "1px solid transparent",
        backgroundImage:
          "linear-gradient(#000, #000), linear-gradient(90deg, rgba(195, 43, 125, .7), rgba(115, 15, 135, .7))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        borderRadius: "10px",
        padding: "17px 21px",
        width: "274px",
        height: "fit-content",
      }
    : {
        backgroundImage: "url(/images/symp-gradient.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "274px",
        height: "fit-content",
      }

  return (
    <div
      className={cn(base, className)}
      style={cardStyle}
    >
      {/* SVG icon */}
      <img
        src={icon}
        alt="icon"
        className={`h-15 w-15 object-contain ${
          isSolution ? "brightness-150" : ""
        }`}
      />

      {/* Card text */}
      <div className="mt-2 space-y-2">
        {lines.map((line, i) => (
          <p
            key={i}
            className={cn(
              "font-semibold leading-relaxed text-white",
              i === 0 ? "text-xl md:text-2xl" : "text-lg md:text-xl"
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

export function SymptomsSolutions() {
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.1
  })

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const columnVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.8
      }
    }
  }

  // Replace all Lucide icons with your own SVGs (place them in /public/images/)
  const col1 = [
    {
      icon: "/images/tired.svg",
      lines: ["Constantly Tired?", "Feeling fatigued?"],
      variant: "symptom" as const,
    },
    {
      icon: "/images/low-energy.svg",
      lines: ["Low / No Energy?", "Feeling depressed", "or demotivated?"],
      variant: "symptom" as const,
    },
  ]

  const col2 = [
    {
      icon: "/images/low-desire.svg",
      lines: ["No Sex Drive?", "No desire or urge to", "get on the job?"],
      variant: "symptom" as const,
    },
    {
      icon: "/images/weak.svg",
      lines: ["No muscle mass?", "Feeling physically", "weak?"],
      variant: "symptom" as const,
    },
  ]

  const col3 = [
    {
      icon: "/images/strong-desire.svg",
      lines: [
        "Increased Sex Drive",
        "Improved sexual",
        "performance &",
        "duration",
      ],
      variant: "solution" as const,
    },
    {
      icon: "/images/mental-health.svg",
      lines: [
        "Improved mental",
        "health & motivation",
        "Increased",
        "confidence",
      ],
      variant: "solution" as const,
    },
  ]

  const col4 = [
    {
      icon: "/images/energy.svg",
      lines: ["Increased energy", "Better focus"],
      variant: "solution" as const,
    },
    {
      icon: "/images/sleep.svg",
      lines: ["Sleep better", "Recover better", "Think Better"],
      variant: "solution" as const,
    },
  ]

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 85% 20%, color-mix(in oklch, var(--color-chart-4) 26%, transparent), transparent 60%)",
        }}
      />

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-10 h-[700px] w-[700px] rotate-[-12deg]"
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            border:
              "1px solid color-mix(in oklch, var(--color-chart-4) 50%, transparent)",
          }}
        />
        <div
          className="absolute inset-10 rounded-2xl"
          style={{
            border:
              "1px solid color-mix(in oklch, var(--color-chart-4) 40%, transparent)",
          }}
        />
        <div
          className="absolute inset-24 rounded-2xl"
          style={{
            border:
              "1px solid color-mix(in oklch, var(--color-chart-4) 30%, transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <motion.header 
          className="mb-10 md:mb-14"
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="text-pretty text-center text-3xl font-semibold md:text-5xl">
            <span className="text-white">Symptoms&nbsp;&amp;&nbsp;</span>
            <span className="text-[var(--mainpink)]">Solutions</span>
          </h2>
        </motion.header>

        {/* Responsive 4-column grid with animations */}
        <motion.div
          ref={containerRef}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-6 sm:gap-8 justify-items-center
          "
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[col1, col2, col3, col4].map((col, i) => (
            <motion.div
              key={i}
              variants={columnVariants}
              className={`flex flex-col gap-6 w-full sm:w-auto items-center ${
                i % 2 !== 0 ? "pt-6 sm:pt-8" : ""
              }`}
            >
              {col.map((c, j) => (
                <motion.div
                  key={j}
                  variants={cardVariants}
                >
                  <InfoCard {...c} />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Button with animation */}
      <motion.div 
        className="flex justify-center"
        initial="hidden"
        animate={containerInView ? "visible" : "hidden"}
        variants={buttonVariants}
      >
        <button type="button" className={styles.getStartedButton}>
          Get Started
        </button>
      </motion.div>
    </section>
  )
}