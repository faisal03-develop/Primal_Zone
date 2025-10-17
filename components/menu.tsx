"use client"

import React from 'react'

interface MenuProps {
  onClose: () => void
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const menuItems = [
    { 
      label: "Our treatments", 
      icon: "/images/treatment.svg" // Replace with your actual path
    },
    { 
      label: "Our Process", 
      icon: "/images/process.svg" // Replace with your actual path
    },
    { 
      label: "Talk to our team", 
      icon: "/images/talk.svg" // Replace with your actual path
    },
    { 
      label: "FAQ's", 
      icon: "/images/faq.svg" // Replace with your actual path
    },
    { 
      label: "Register Now", 
      icon: "/images/register.svg" // Replace with your actual path
    },
    { 
      label: "Patient Portal Login", 
      icon: "/images/login.svg" // Replace with your actual path
    }
  ]

  return (
    <div className="fixed inset-0 z-50">
      {/* Menu Panel with exact dimensions */}
      <div 
        className="fixed left-0 top-0 w-[550px] h-[598px] bg-black bg-opacity-80"
        style={{
          width: '550px',
          height: '598px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          {/* Logo */}
          <div className="shrink-0">
            <img 
              className='h-10 max-w-full object-contain' 
              src="/images/logo.png" 
              alt="Primal Zone Logo" 
            />
          </div>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button 
                  className=" w-full flex items-center gap-4 text-left text-white text-3xl font-light py-3 px-4 hover:bg-gray-800 rounded-lg transition-colors duration-200 hover:text-[var(--mainpink)] group"
                  onClick={onClose}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 mr-5 h-6">
                    <img 
                      src={item.icon} 
                      alt="" 
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  
                  {/* Label */}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Transparent Backdrop - closes menu when clicked */}
      <div 
        className="fixed inset-0 z-40 bg-transparent" 
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  )
}

export default Menu