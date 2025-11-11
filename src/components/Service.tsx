'use client'

import { useEffect, useRef } from 'react'

export default function Service() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-fade, .scroll-reveal-blur')
          
          if (entry.isIntersecting) {
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed')
              }, index * 150) // زيادة التأخير لتأثير أفضل
            })
          } else {
            // إزالة revealed عند الخروج من الشاشة للسماح بإعادة التشغيل
            elements.forEach((el) => {
              el.classList.remove('revealed')
            })
          }
        })
      },
      { 
        threshold: 0.15, // زيادة threshold
        rootMargin: '0px 0px -80px 0px' 
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="service" className="relative section-spacing bg-gradient-to-b from-background via-background-alt to-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent-green/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent-purple/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          {/* Badge */}
          <div className="scroll-reveal inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-accent-green/10 via-accent-purple/10 to-accent-lime/10 border border-accent-green/20 mb-4 sm:mb-5 lg:mb-6">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-accent-green"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-text-primary tracking-wide">محفظة الخصومات الذكية</span>
          </div>

          {/* Title */}
          <h2 className="scroll-reveal text-responsive-3xl font-arabic font-black mb-4 sm:mb-5 lg:mb-6 leading-tight px-4">
            ما هي خدمة <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent-green via-accent-purple to-accent-lime">tag</span>؟
          </h2>

          {/* Description */}
          <p className="scroll-reveal text-responsive-lg text-text-secondary leading-relaxed max-w-3xl mx-auto px-4">
            محفظة خصومات موحّدة تمنحك خصومات فورية بلا أكواد. 
            <span className="font-semibold text-text-primary"> اشحن ، فعّل، ادفع</span> - والخصم يُحتسب تلقائيًا في خطوة واحدة!
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Green */}
          <div className="scroll-reveal-scale group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green to-accent-green-dark rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-responsive-full padding-responsive shadow-responsive hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-accent-green/30">
              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-accent-green/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-green to-accent-green-dark rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-arabic font-black mb-2 sm:mb-3 text-text-primary group-hover:text-accent-green transition-colors duration-300">
                خصومات فورية
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                خصومات فورية بلا أكواد. الخصم يُحتسب تلقائيًا عند الدفع
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-accent-green to-transparent rounded-b-2xl sm:rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Card 2 - Purple */}
          <div className="scroll-reveal-scale group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple to-accent-purple rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-responsive-full padding-responsive shadow-responsive hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-accent-purple/30">
              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-accent-purple/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-purple to-accent-purple rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-arabic font-black mb-2 sm:mb-3 text-text-primary group-hover:text-accent-purple transition-colors duration-300">
                دفع سريع
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                ادفع داخل التطبيق أو عبر NFC/QR في ثوانٍ بدون تعقيدات
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-accent-purple to-transparent rounded-b-2xl sm:rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Card 3 - Lime */}
          <div className="scroll-reveal-scale group relative sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-lime to-accent-lime rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-responsive-full padding-responsive shadow-responsive hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-accent-lime/30">
              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-accent-lime/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-lime to-accent-lime rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-arabic font-black mb-2 sm:mb-3 text-text-primary group-hover:text-accent-lime transition-colors duration-300">
                شفافية كاملة
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                شوف السعر الأصلي، نسبة الخصم، والسعر النهائي قبل الدفع
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-accent-lime to-transparent rounded-b-2xl sm:rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

