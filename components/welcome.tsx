"use client"

import React, { useRef } from 'react'
import { motion, useInView, Variants } from "framer-motion";

const Welcome = () => {
  const textAreaRef = useRef(null)
  const textAreaInView = useInView(textAreaRef, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.3
  })

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

  return (
    <>
      {/* Responsive layout: image on top on mobile, side-by-side on md+ */}
      <div
        className="w-full flex flex-col md:flex-row items-center md:items-start md:gap-0"
        id="welcome"
      >
        {/* TEXT AREA */}
        <motion.div
          ref={textAreaRef}
          id="textarea" 
          className={`px-5 pt-4 md:pt-6 w-full max-w-2xl mx-auto md:mx-0`}
          initial="hidden"
          animate={textAreaInView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          {/* Desktop Heading */}
          <div id="line1" className="hidden md:flex">
            <span className="text-white text-3xl md:text-6xl font-bold">
              Modern
            </span>
            <span className="text-white text-3xl mt-2 md:text-5xl font-normal">
              , Holistic
            </span>
          </div>
          <div className="pt-2 hidden md:flex" id="line2">
            <span className="text-white text-3xl md:text-6xl font-bold">
              Health
            </span>
            <span className="text-white text-3xl ml-4 mt-2 md:text-5xl font-normal">
              Services
            </span>
          </div>

          {/* Desktop Welcome Note */}
          <div id="welcomenote" className="font-light hidden md:block">
            <p className="text-[var(--mainpink)] text-xl md:text-3xl mt-3 font-weight-300">
              Welcome to Primal Zone
            </p>
            <br />
            <p className="text-white mt-6 md:mt-9 text-lg md:text-2xl">
              Getting into your prime has never been easier. Hit the "Talk to
              Luke" button or the{' '}
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                style={{ display: 'inline' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3845 12.1769L31.9643 13.1438C31.8986 13.3013 31.7878 13.4358 31.6459 13.5304C31.5039 13.625 31.3371 13.6754 31.1665 13.6754C30.9959 13.6754 30.8291 13.625 30.6872 13.5304C30.5452 13.4358 30.4344 13.3013 30.3687 13.1438L29.9485 12.1769C29.2096 10.4664 27.8564 9.09492 26.156 8.33314L24.8593 7.75402C24.702 7.68166 24.5688 7.56571 24.4754 7.41992C24.3819 7.27413 24.3323 7.10461 24.3323 6.93146C24.3323 6.75831 24.3819 6.58879 24.4754 6.443C24.5688 6.2972 24.702 6.18125 24.8593 6.10889L26.0842 5.56394C27.8274 4.78046 29.2037 3.35827 29.9297 1.59035L30.3636 0.54656C30.4271 0.384873 30.5378 0.246061 30.6813 0.14822C30.8248 0.0503785 30.9945 -0.00195313 31.1682 -0.00195312C31.3419 -0.00195312 31.5116 0.0503785 31.6551 0.14822C31.7986 0.246061 31.9094 0.384873 31.9728 0.54656L32.405 1.58864C33.1302 3.3569 34.5059 4.7797 36.2488 5.56394L37.4754 6.1106C37.6322 6.18317 37.765 6.2991 37.8581 6.44471C37.9511 6.59031 38.0006 6.75951 38.0006 6.93231C38.0006 7.10511 37.9511 7.27431 37.8581 7.41991C37.765 7.56552 37.6322 7.68145 37.4754 7.75402L36.177 8.33144C34.4769 9.09398 33.1244 10.466 32.3863 12.1769M11.5207 10.2499H8.104V30.7499H11.5207V10.2499ZM3.83317 17.0832H0.416504V23.9166H3.83317V17.0832ZM19.2082 3.41656H15.7915V37.5832H19.2082V3.41656ZM26.8957 13.6666H23.479V30.7499H26.8957V13.6666ZM34.5832 17.0832H31.1665V23.9166H34.5832V17.0832Z"
                  fill="#C92D78"
                />
              </svg>
              icon in the menu, and get instant answers about our process and
              treatments - no endless scrolling required.
              <br />
              <br />
              Our team of hormone consultants, nurses, and doctors work
              alongside leading university research, real-world results, and
              Google's most advanced Medical AI Models to deliver you
              personalised, accurate outcomes.
            </p>

            <div id="google" className="flex items-center mt-8 md:mt-12">
              <img
                src="/images/google.3248941e.svg"
                alt="Google"
                className="h-8 md:h-10"
              />
              <span className="text-white pl-3 text-3xl md:text-4xl">
                Powered By Google
              </span>
            </div>
          </div>
        </motion.div>

        {/* Image area + mobile layout */}
        <div className="block md:hidden mb-3 w-full">
          {/* Mobile heading — tighter spacing */}
          <div className="text-white text-3xl font-light text-center leading-tight tracking-[0.06em]">
  Modern<br />holistic health<br />services
</div>

<div className="text-white text-base font-light text-center mt-2 tracking-[0.04em]">
  Our Healthcare partners provide tailored<br />
  treatments to help you achieve prime
</div>

        </div>

        {/* Video Section */}
        <div
          id="videoarea"
          className="w-[90%] sm:w-[85%] md:w-[600px] lg:w-full max-w-[550px] mt-2 md:mt-0 mx-auto md:mx-16 relative flex-shrink-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto md:h-[754px] lg:max-w-none rounded-xl min-h-[400px] md:min-h-[240px] object-cover"
          >
            <source src="/videos/luke-hero-page-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Talk to Luke button — narrower width */}
          <div
  id="talkbutton"
  className="absolute left-1/2 bottom-20 md:bottom-28 transform -translate-x-1/2 z-10 w-[55vw] sm:w-[45vw] md:w-[436px] flex justify-center"
>
  <div
    id="logo"
    className="bg-[rgba(0,0,0,0.6)] outline-2 outline-offset-4 backdrop-blur-[6.4px] py-[5.4px] md:py-[13.5px] px-[40px] rounded-[100px] transition-all duration-300 flex items-center justify-center gap-4 text-center min-w-[280px] cursor-pointer hover:bg-[rgba(0,0,0,0.7)]"
    style={{
      boxShadow: "0px 4px 14.5px 4px rgba(255, 255, 255, 0.29) inset",
      minHeight: "70px",
      minWidth: "280px",
    }}
  >
    <svg
    className='outline-1 rounded-full outline-offset-4'
      width="32"
      height="33"
      viewBox="0 0 43 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="1"
        width="42"
        height="42"
        rx="21"
        fill="url(#paint0_linear_13631_14101)"
      />
      <rect
        x="0.294213"
        y="0.794213"
        width="42.4116"
        height="42.4116"
        rx="21.2058"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="0.411573"
      />
      <g clipPath="url(#clip0_13631_14101)">
        <path
          d="M30.213 17.1271L29.967 17.6931C29.9286 17.7853 29.8637 17.864 29.7806 17.9194C29.6975 17.9748 29.5999 18.0043 29.5 18.0043C29.4001 18.0043 29.3025 17.9748 29.2194 17.9194C29.1363 17.864 29.0714 17.7853 29.033 17.6931L28.787 17.1271C28.3545 16.1259 27.5624 15.323 26.567 14.8771L25.808 14.5381C25.7159 14.4958 25.6379 14.4279 25.5832 14.3426C25.5286 14.2572 25.4995 14.158 25.4995 14.0566C25.4995 13.9553 25.5286 13.856 25.5832 13.7707C25.6379 13.6854 25.7159 13.6175 25.808 13.5751L26.525 13.2561C27.5454 12.7975 28.3511 11.965 28.776 10.9301L29.03 10.3191C29.0672 10.2245 29.132 10.1432 29.216 10.086C29.3 10.0287 29.3993 9.99805 29.501 9.99805C29.6027 9.99805 29.702 10.0287 29.786 10.086C29.87 10.1432 29.9348 10.2245 29.972 10.3191L30.225 10.9291C30.6495 11.9642 31.4548 12.7971 32.475 13.2561L33.193 13.5761C33.2848 13.6186 33.3625 13.6865 33.417 13.7717C33.4715 13.8569 33.5004 13.956 33.5004 14.0571C33.5004 14.1583 33.4715 14.2573 33.417 14.3426C33.3625 14.4278 33.2848 14.4956 33.193 14.5381L32.433 14.8761C31.4378 15.3225 30.6461 16.1257 30.214 17.1271M18 15.9991H16V27.9991H18V15.9991ZM13.5 19.9991H11.5V23.9991H13.5V19.9991ZM22.5 11.9991H20.5V31.9991H22.5V11.9991ZM27 17.9991H25V27.9991H27V17.9991ZM31.5 19.9991H29.5V23.9991H31.5V19.9991Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_13631_14101"
          x1="4.58333"
          y1="3.33333"
          x2="39.5833"
          y2="40.0833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6972F0" />
          <stop offset="1" stopColor="#F420FF" />
        </linearGradient>
        <clipPath id="clip0_13631_14101">
          <rect width="24" height="24" fill="white" transform="translate(9.5 10)" />
        </clipPath>
      </defs>
    </svg>

    <p className="text-white text-xl font-normal">Talk to Luke</p>
  </div>
</div>


        </div>

        {/* Mobile Google section */}
<div className="block md:hidden w-full text-center mt-3">
  <div className="flex items-center justify-center gap-2">
    <img
      src="/images/google.3248941e.svg"
      alt="Google"
      className="h-7"
    />
    <span className="text-white text-xl">Powered By Google</span>
  </div>

  <div className="px-10 sm:px-14 py-10 font-light mt-10 mb-10 space-y-6">

    <p className="text-[var(--mainpink)] text-xl font-weight-300 mb-2">
      Welcome to Primal Zone
    </p>
    <p className="text-white text-xl text-center px-2">
      Getting into your prime has never been easier. Hit the "Talk to
      Luke" button or the icon in our menu, and get instant answers
      about our treatments and getting started with us - no endless
      scrolling required.
    </p>
    <p className="text-white text-xl text-center mt-3 px-2">
      Our team of hormone consultants, nurses, and doctors work
      alongside leading university research, real-world results, and
      Google's most advanced Medical AI Models to deliver you
      personalised, accurate outcomes.
    </p>
  </div>
</div>

      </div>
    </>
  )
}

export default Welcome