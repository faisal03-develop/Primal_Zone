"use client"

import styles from '@/app/css/process.module.css'
import { useState, useRef } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView, Variants } from "framer-motion"

type FaqItem = { q: string; a: string }

const ALL_ITEMS: FaqItem[] = [
  {
    q: "Are the prescriptions provided by registered doctors?",
    a: "Yes, all prescriptions are issued by our AHPRA certified registered doctors who are experienced in hormone and general health. Your safety and care are our top priorities, and we ensure all medical consultations and services meet the highest professional standards.",
  },
  {
    q: "When should I take my blood test?",
    a: "We generally recommend morning tests while fasting unless stated otherwise on your pathology form. Follow the specific instructions provided with your order for the most accurate results.",
  },
  {
    q: "What is the average cost of your services?",
    a: "Pricing varies by consultation type and medication. We keep costs transparent—there are no hidden fees. You'll see a full breakdown before confirming any payment.",
  },
  {
    q: "How do you deliver the medication?",
    a: "Medications are dispensed by our partner pharmacies and shipped in discreet, temperature-appropriate packaging with tracking provided after dispatch.",
  },
  {
    q: "Can I travel with my medication?",
    a: "Yes, in most cases. Keep medication in original packaging with your prescription and check destination regulations before you fly.",
  },
  // More items revealed on See More
  {
    q: "Do you offer emergency consultations?",
    a: "We do not provide emergency care. For urgent medical needs, please contact local emergency services immediately.",
  },
  {
    q: "How long does shipping usually take?",
    a: "Within metro areas, most orders arrive in 2–5 business days. Regional deliveries may take longer depending on the courier.",
  },
  {
    q: "Are there any hidden fees I should know about?",
    a: "No. All consultation, dispensing, and delivery fees are disclosed upfront before you proceed.",
  },
  {
    q: "What insurance providers do you accept?",
    a: "Coverage depends on your insurer and plan. Please check with your provider using your invoice and item numbers.",
  },
  {
    q: "How can I contact support if I have issues?",
    a: "You can reach our support team via secure chat or email. We respond within one business day in most cases.",
  },
]

// Animation variants with proper TypeScript types
const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
}

const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 80,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const faqItemAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const headingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const headingItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function FaqList() {
  const INITIAL_COUNT = 5
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [open, setOpen] = useState<Set<number>>(new Set())
  
  // Refs for scroll-triggered animations
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const faqListRef = useRef(null)
  const ctaRef = useRef(null)
  
  // Use InView hooks for each section
  const headingInView = useInView(headingRef, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.3
  })
  
  const paragraphInView = useInView(paragraphRef, { 
    once: true, 
    margin: "-30px 0px -30px 0px",
    amount: 0.3
  })
  
  const faqListInView = useInView(faqListRef, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.1
  })
  
  const ctaInView = useInView(ctaRef, { 
    once: true, 
    margin: "-30px 0px -30px 0px",
    amount: 0.5
  })

  const visible = ALL_ITEMS.slice(0, visibleCount)
  const hasMore = visibleCount < ALL_ITEMS.length

  const toggle = (idx: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  return (
    <div>
      {/* Heading with scroll-triggered animation */}
      <motion.div 
        ref={headingRef}
        id="heading" 
        className="flex flex-col sm:flex-row justify-center items-center mb-2 text-center sm:text-left"
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={headingContainerVariants}
      >
        <motion.span 
          className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
          variants={headingItemVariants}
        >
          Frequently Asked 
        </motion.span>
        <motion.span 
          className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--mainpink)] ml-0 sm:ml-3"
          variants={slideInRight}
        >
          Questions
        </motion.span>
      </motion.div>

      {/* Paragraph with scroll-triggered animation */}
      <motion.div 
        ref={paragraphRef}
        id="parafaq" 
        className="flex justify-center my-6 mb-8 px-4"
        initial="hidden"
        animate={paragraphInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-4xl font-light leading-relaxed">
          Here is a quick list of all the frequent questions our team receive and our responses for your convenience
        </p>
      </motion.div>

      {/* FAQ List with staggered scroll-triggered animations */}
      <motion.ul 
        ref={faqListRef}
        role="list" 
        className="divide-y divide-accent/60 border-accent/60 text-white mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={faqListInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {visible.map((item, i) => {
          const isOpen = open.has(i)
          const panelId = `faq-panel-${i}`
          const buttonId = `faq-trigger-${i}`

          return (
            <motion.li 
              key={i} 
              className="border-b border-[var(--mainpink)] border-accent/60"
              variants={faqItemAnimation}
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className={cn(
                  "w-full flex items-center justify-between gap-4",
                  "py-4 font-light md:py-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm",
                )}
              >
                <span className="text-lg sm:text-base md:text-lg lg:text-xl">{`Q: ${item.q}`}</span>
                <ChevronRight
                  className={cn(
                    "text-white fill-white size-5 md:size-6 text-foreground transition-transform duration-200 group-hover:translate-x-1",
                    isOpen && "rotate-90",
                  )}
                  aria-hidden="true"
                />
              </button>

              {isOpen ? (
                <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-4 sm:pb-6 md:pb-8 px-2 sm:px-4 md:px-6">
                  <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed text-white">{item.a}</p>
                </div>
              ) : null}
            </motion.li>
          )
        })}
      </motion.ul>

      {/* See More button with scroll-triggered animation */}
      {hasMore ? (
        <motion.div 
          ref={ctaRef}
          className="flex justify-center mt-6"
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <button
            type="button"
            onClick={() => setVisibleCount(ALL_ITEMS.length)}
            className="text-[var(--mainpink)] text-accent font-semibold hover:underline px-4 py-2 transition-all duration-300 hover:scale-105"
          >
            See More
          </button>
        </motion.div>
      ) : null}
      
      {/* Get Started button with scroll-triggered animation */}
      <motion.div 
        ref={ctaRef}
        className='flex justify-center mt-4'
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <button 
          type="button" 
          className={cn(
            styles.getStartedButton,
            "transition-transform duration-300 hover:scale-105"
          )}
        >
          Get Started
        </button>
      </motion.div>
    </div>
  )
}