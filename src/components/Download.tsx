'use client'

import { useEffect, useRef } from 'react'

export default function Download() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale')
          
          if (entry.isIntersecting) {
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed')
              }, index * 150)
            })
          } else {
            elements.forEach((el) => {
              el.classList.remove('revealed')
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="download" className="relative py-24 bg-gradient-to-b from-background via-background-alt to-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="scroll-reveal inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-green/10 via-accent-purple/10 to-accent-lime/10 border border-accent-green/20 mb-6">
              <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span className="text-sm font-semibold text-text-primary tracking-wide">ابدأ الآن</span>
            </div>

            <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-arabic font-black mb-6 leading-tight">
              حمّل تطبيق <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent-green via-accent-purple to-accent-lime">tag</span> الآن
            </h2>
            
            <p className="scroll-reveal text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              ابدأ رحلتك مع الخصومات الذكية. حمّل التطبيق واستمتع بعروض حصرية من أول يوم!
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* App Store */}
            <a
              href="#"
              className="scroll-reveal-left group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 border-2 border-gray-100 hover:border-accent-green/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                
                {/* Text */}
                <div className="flex-1 text-right">
                  <p className="text-sm text-text-secondary mb-1">متوفر على</p>
                  <p className="text-2xl font-black text-text-primary group-hover:text-accent-green transition-colors duration-300">App Store</p>
                  <p className="text-xs text-text-secondary mt-1">لأجهزة iPhone و iPad</p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center group-hover:bg-accent-green group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-accent-green group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" transform="scale(-1, 1) translate(-24, 0)" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="scroll-reveal-right group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 border-2 border-gray-100 hover:border-accent-purple/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-purple rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L14.54,18.81L6.05,10.31L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                
                {/* Text */}
                <div className="flex-1 text-right">
                  <p className="text-sm text-text-secondary mb-1">متوفر على</p>
                  <p className="text-2xl font-black text-text-primary group-hover:text-accent-purple transition-colors duration-300">Google Play</p>
                  <p className="text-xs text-text-secondary mt-1">لأجهزة Android</p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center group-hover:bg-accent-purple group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-accent-purple group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" transform="scale(-1, 1) translate(-24, 0)" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-text-primary">آمن ومحمي</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-text-primary">سريع وسهل</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-lime/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-text-primary">خصومات فورية</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-text-primary">دعم 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


