"use client"

import JourneyCard from "./journey-card"
import styles from '../app/css/process.module.css'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

const Journey = () => {
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
        staggerChildren: 0.2,
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

  const paragraphVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
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

  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6
      }
    }
  }

  const journeyData = [
    {
      img: "/images/value2.jpg",
      description: "Discover how our comprehensive hormone therapy program transformed John's energy levels and overall wellbeing. From initial consultation to ongoing support, see the complete journey.",
      name: "John's Transformation Journey"
    },
    {
      img: "/images/value3.jpg", 
      description: "Follow Sarah's path to better health through personalized treatment plans. Learn about her challenges, breakthroughs, and the positive changes she experienced.",
      name: "Sarah's Health Success Story"
    },
    {
      img: "/images/value1.jpg",
      description: "Watch Michael's incredible transformation from low energy to peak performance. See how our expert team helped him achieve his health and fitness goals.",
      name: "Michael's Peak Performance"
    }
  ]

  return (
    <section className="py-10 md:py-10 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.header 
          className="mb-10 md:mb-14"
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-pretty text-center text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            variants={headingVariants}
          >
            <span className="text-white">Health</span><span className="text-[var(--mainpink)]"> Journeys</span>
          </motion.h2>
          <motion.p 
            className="text-center text-white font-light text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto mt-4 leading-relaxed"
            variants={paragraphVariants}
          >
            Real stories from real people who transformed their lives through our comprehensive hormone therapy programs
          </motion.p>
        </motion.header>

        {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {journeyData.map((journey, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <JourneyCard
                img={journey.img}
                description={journey.description}
                name={journey.name}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center my-5 mt-15"
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          variants={buttonVariants}
        >
          <button type="button" className={styles.getStartedButton}>
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Journey