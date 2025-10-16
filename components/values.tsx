"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

type CardProps = {
  icon: string
  lines: string[]
  className?: string
}

function ValueCard({ icon, lines, className }: CardProps) {
  const base =
    "relative rounded-xl p-6 md:p-8 flex flex-col gap-4 overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
  const variantClasses = "text-white"

  return (
    <div
      className={cn(base, variantClasses, className)}
      style={{
        border: "2px solid transparent",
        backgroundImage:
          "linear-gradient(#000, #000), linear-gradient(90deg, rgba(195, 43, 125, 0.7), rgba(115, 15, 135, 0.7))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        backgroundColor: "transparent",
        borderRadius: "12px",
        padding: "20px 24px",
        width: "100%",
        maxWidth: "520px",
        height: "fit-content",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <img
        src={icon}
        alt="Value Icon"
        className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
      />
      <div className="mt-2 space-y-2">
        {lines.map((line, i) => (
          <p
            key={i}
            className={cn(
              "font-semibold font-light leading-relaxed",
              i === 0 ? "text-xl md:text-2xl" : "text-lg md:text-xl",
              "text-white"
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

const Values = () => {
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

  const headingVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const columnVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const valueCards = [
    {
      icon: "/images/value1.svg",
      lines: [
        "Compassionate Care",
        "We prioritize your wellbeing",
        "and comfort throughout",
        "your journey",
      ],
    },
    {
      icon: "/images/value2.svg",
      lines: [
        "Trust & Safety",
        "Certified professionals",
        "and secure processes",
        "for your peace of mind",
      ],
    },
    {
      icon: "/images/value3.svg",
      lines: [
        "Patient-Centered",
        "Personalized treatment",
        "plans tailored to",
        "your unique needs",
      ],
    },
    {
      icon: "/images/value4.svg",
      lines: [
        "Excellence",
        "Commitment to the highest",
        "standards of care",
        "and service quality",
      ],
    },
  ]

  return (
    <section className="relative isolate overflow-hidden py-14 md:py-20">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 85% 20%, color-mix(in oklch, var(--color-chart-4) 26%, transparent), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4">
        <motion.header 
          className="mb-10 md:mb-14"
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="text-center text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className="text-white">Our</span>{" "}
            <span className="text-[var(--mainpink)]">Values</span>
          </h2>
        </motion.header>

        {/* Grid Layout with animations */}
        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left Column */}
          <motion.div 
            className="flex flex-col gap-8"
            variants={columnVariants}
          >
            <motion.div variants={cardVariants}>
              <ValueCard {...valueCards[0]} />
            </motion.div>
            <motion.div variants={cardVariants}>
              <ValueCard {...valueCards[1]} />
            </motion.div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            className="flex flex-col gap-8 pt-8 sm:pt-12"
            variants={columnVariants}
          >
            <motion.div variants={cardVariants}>
              <ValueCard {...valueCards[2]} />
            </motion.div>
            <motion.div variants={cardVariants}>
              <ValueCard {...valueCards[3]} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Values