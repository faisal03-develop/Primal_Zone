'use client';

import React, { useEffect } from 'react';
import CalendlyEmbed from "@/components/CalendlyEmbeded";

export default function Booking() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl font-bold mt-6 mb-6 sm:mt-8 sm:mb-10 text-center text-white">
  Talk <span className="text-[var(--mainpink)]">To Us</span>
</h1>

      <div 
        className="calendly-inline-widget w-full max-w-[1200px] px-4 sm:px-6 md:px-0" 
        data-url="https://calendly.com/altaffaisal532/30min?background_color=313131&text_color=cecece&primary_color=c32b7d"
        style={{
          minWidth: '320px',
          height: '700px',
          width: '100%',
          overflow: 'hidden',
          boxSizing: 'border-box'
      }}
    />
    </div>
  );
}
