import React from 'react'
import styles from '../app/css/process.module.css'

const Footer = () => {
  return (
    <footer>
      <div className="bg-[url('/images/footer-ellipse.8db41e75.png')] h-auto mt-20 w-full bg-cover bg-center">
        <div
          id="footeru"
          className="flex flex-col lg:flex-row justify-between h-auto lg:h-80 px-4 lg:px-0"
        >
          <div className="pt-10 pb-7 flex flex-col justify-between items-center lg:items-start lg:pl-10 flex-1">
            <img
              className="mb-8 w-48 lg:w-80"
              src="/images/logo.png"
              alt="Primal Zone"
            />
            <p className="text-white text-center lg:text-left text-sm lg:text-base">
              Level 1, 60 Martin Place, Sydney NSW 2000
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end lg:justify-between pr-0 lg:pr-10">
            <p className="mb-2 text-white text-2xl lg:text-4xl w-full max-w-lg font-bold text-center lg:text-right">
              Are you{' '}
              <span className="text-[var(--mainpink)]">interested</span> in working with Primal Zone?
            </p>
            <button type="button" className={styles.getStartedButton} style={{width:382}}>
              ignite@primalzone.com.au
            </button>
          </div>
        </div>

        <div className="text-white text-base flex flex-col lg:flex-row justify-between px-4 lg:px-10 border-t-2 border-white/20 pt-4 pb-2">
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-10 pb-2 lg:pb-0">
            <a href="#" className="hover:underline">
              FaceBook
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Youtube
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="mt-2 text-center lg:mt-0 lg:text-right">
            <p>2025 &copy; Primal Zone</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer