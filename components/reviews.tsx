import React from 'react'
import styles from '../app/css/process.module.css'

const reviews = () => {
  return (
    <>
        <header className="mb-10 md:mb-14">
          <h2 className="text-pretty text-center text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className="text-white">Customer</span><span className="text-[var(--mainpink)]"> Reviews</span>
          </h2>
          <p className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto mt-4 font-light leading-relaxed">
          We started Primal Zone as patients ourselves. Our prime directive is delivering the easiest, most convenient and highest quality experience possible with great economy. Patients are at the centre of our universe and we are obsessed with making the experience outstanding.
            </p>
        </header>
        <div className='flex justify-center'>
        <button type="button" className={styles.getStartedButton}>
          Write a Google Review
        </button>
        </div>
    </>
  )
}

export default reviews