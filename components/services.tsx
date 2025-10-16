"use client"

import React, { useRef } from 'react'
import ServiceCard from '@/components/service-card'
import { motion, useInView, Variants } from 'framer-motion'

const Services = () => {
  const serviceData = [
    {
      title: "MEN'S FULL HORMONE RESET",
      icon: "/images/mdi_mars.53a8ecff.svg",
      tests: [
        "Free and total Testosterone",
        "E2 (Oestradiol) + SHBG",
        "Liver function (LFT)",
      ],
      assessment: [
        "Clinical implications of pathology tests",
        "Diagnosis when applicable",
      ],
      steps: [
        "Complete the Health questionnaire",
        "Book pathology using the link below",
        "Provide a valid Identification document",
        "Register and pay",
      ],
      stepPills: [
        { step: 1, title: "Pathology Services", price: "$205" },
        { step: 2, title: "Get Started", price: "$299" },
      ],
    },
    {
      title: "WOMEN'S METABOLIC PANEL",
      icon: "/images/ultimate.0a8a9e4a.svg",
      tests: ["TSH", "FSH/LH", "CRP"],
      assessment: ["Personalized plan", "Follow-up guidance"],
      steps: [
        "Answer health questions",
        "Book tests",
        "Confirm identity",
        "Begin program",
      ],
      stepPills: [
        { step: 1, title: "Lab Work", price: "$180" },
        { step: 2, title: "Assessment", price: "$249" },
      ],
    },
    {
      title: "MEN'S FERTILITY PROTOCOL",
      icon: "/images/men-firtility.3b024f21.svg",
      tests: [
        "Semen / Sperm quality and count",
        "Free and Total Testosterone",
        "SHBG",
      ],
      assessment: [
        "Clinical implications of pathology tests results",
        "Clinical implication of Semen Sample",
        "Diagnosis when applicable",
        "Further testing if required",
        "Treatment plan and communication",
      ],
      steps: [
        "Complete the Health questionnaire",
        "Provide all diagnostic material",
        "Provide a valid Identification document",
        "Register and pay",
      ],
      stepPills: [
        { step: 1, title: "Pathology Services", price: "$129" },
        { step: 2, title: "Get Started", price: "$199" },
      ],
    },
    {
      title: "WOMEN'S FULL HORMONE RESET",
      icon: "/images/women-hrt.d216a542.svg",
      tests: [
        "Free and total Testostrone",
        "E2 (Oestradiol) + SHBG",
        "FSH + DHEAS",
        "Liver Function",
        "Kidney function (UEC)",
        "Magnesium + Glucose",
        "Chol/TG/HDL/LDL",
        "Full blood count + CRP",
        "Vitamin D + Iron Studies",
        "TSH / FT3 / FT4"
      ],
      assessment: [
        "Clinical implications of pathology tests",
        "Diagnosis when applicable",
        "Further testing if required",
        "Treatment plan and communication",
        "No treatment products are included in the fee"
      ],
      steps: [
        "Complete the Health questionnaire",
        "Book pathology using the link below",
        "Provide a valid Identification document",
        "Register and pay",
      ],
      stepPills: [
        { step: 1, title: "Pathology Services", price: "$236" },
        { step: 2, title: "Get Started", price: "$299" },
      ],
    }
  ]

  // Animation variants
  const fadeInLeft: Variants = {
    hidden: { 
      opacity: 0, 
      x: -80 
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

  const fadeInBottom: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60 
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

  const fadeInTop: Variants = {
    hidden: { 
      opacity: 0, 
      y: -60 
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

  // Refs for scroll detection
  const headingRef = useRef(null)
  const containerRef = useRef(null)
  
  const headingInView = useInView(headingRef, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.3
  })
  
  const containerInView = useInView(containerRef, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.1
  })

  // Function to get animation variant based on index
  const getCardAnimation = (index: number): Variants => {
    switch(index) {
      case 0: return fadeInLeft
      case 1: return fadeInBottom  // Changed from fadeInRight to fadeInBottom
      case 2: return fadeInBottom
      case 3: return fadeInTop
      default: return fadeInLeft
    }
  }

  return (
    <div id="service" className='w-full max-w-[1440px] mx-auto px-4'>
      {/* Heading with animation */}
      <motion.div 
        ref={headingRef}
        className='mt-8 mb-4 text-left w-full'
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className='text-white text-5xl font-normal mb-6'
          variants={fadeInLeft}
        >
          Our <span className='text-[var(--mainpink)]'>Services</span>
        </motion.h2>

        <motion.p 
          className='text-white font-light text-lg opacity-90'
          variants={fadeInBottom}  // Changed from fadeInRight to fadeInBottom
        >
          Our treatments are tailored to meet individual health needs. We prioritize safety, and if our health practitioners determine that you are ineligible to join the program, a full refund will be issued.
        </motion.p>
      </motion.div>

      {/* Cards container with staggered animations */}
      <motion.div 
        ref={containerRef}
        className='flex flex-col w-full gap-4 max-w-[1200px] mx-auto'
        initial="hidden"
        animate={containerInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {serviceData.map((service, index) => (
          <motion.div
            key={service.title}
            variants={getCardAnimation(index)}
            className="w-full transition-transform duration-300 my-3"
            style={{ 
              width: '100%',
              maxWidth: '1200px'
            }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services