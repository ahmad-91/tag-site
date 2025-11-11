'use client'

import { useEffect, useRef } from 'react'

export default function UniqueFeatures() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-fade')
          
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
  const uniqueFeatures = [
    {
      subtitle: 'الباقة الأساسية',
      title: '70 ريال = خصم 15%',
      icon: (
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-accent-green/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Wallet with 15% badge */}
          <div className="relative w-20 h-20 bg-white dark:bg-gradient-to-br dark:from-[#8B7DFF]/20 dark:to-[#A78BFA]/10 rounded-2xl shadow-xl dark:shadow-[0_8px_24px_rgba(139,125,255,0.4)] flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 dark:border dark:border-[#8B7DFF]/30">
            <svg className="w-12 h-12 text-accent-green dark:text-[#C4B5FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {/* 15% Badge */}
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-accent-green to-accent-green-dark dark:from-[#8B7DFF] dark:to-[#A78BFA] rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-[#0A0A0A]">
              <span className="text-sm font-black text-white">15%</span>
            </div>
          </div>
          {/* Green Top Bar */}
          <div className="absolute -top-1 left-2 right-2 h-1.5 bg-gradient-to-r from-accent-green to-accent-green-dark dark:from-[#8B7DFF] dark:to-[#A78BFA] rounded-full"></div>
        </div>
      ),
      bgColor: 'bg-gradient-to-br from-accent-green/10 via-accent-green/5 to-transparent',
      borderColor: 'border-accent-green/20 hover:border-accent-green/40',
      textColor: 'text-accent-green',
      iconColor: 'text-accent-green',
    },
    {
      subtitle: 'باقة المطنوخ',
      title: '200 ريال = خصم 30%',
      icon: (
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-accent-purple/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Wallet with 30% badge */}
          <div className="relative w-20 h-20 bg-white dark:bg-gradient-to-br dark:from-[#8B7DFF]/20 dark:to-[#A78BFA]/10 rounded-2xl shadow-xl dark:shadow-[0_8px_24px_rgba(139,125,255,0.4)] flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 dark:border dark:border-[#8B7DFF]/30">
            <svg className="w-12 h-12 text-accent-purple dark:text-[#8B7DFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {/* 30% Badge */}
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-purple dark:from-[#8B7DFF] dark:to-[#A78BFA] rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-[#0A0A0A]">
              <span className="text-sm font-black text-white">30%</span>
            </div>
          </div>
          {/* Purple Top Bar */}
          <div className="absolute -top-1 left-2 right-2 h-1.5 bg-accent-purple dark:bg-gradient-to-r dark:from-[#8B7DFF] dark:to-[#A78BFA] rounded-full"></div>
        </div>
      ),
      bgColor: 'bg-gradient-to-br from-accent-purple/10 via-accent-purple/5 to-transparent',
      borderColor: 'border-accent-purple/20 hover:border-accent-purple/40',
      textColor: 'text-accent-purple',
      iconColor: 'text-accent-purple',
    },
    {
      subtitle:'باقة الأسطورة',
      title: '500 ريال = خصم 35%',
      icon: (
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-accent-lime/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Wallet with 35% badge */}
          <div className="relative w-20 h-20 bg-white dark:bg-gradient-to-br dark:from-[#8B7DFF]/20 dark:to-[#A78BFA]/10 rounded-2xl shadow-xl dark:shadow-[0_8px_24px_rgba(139,125,255,0.4)] flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 dark:border dark:border-[#8B7DFF]/30">
            <svg className="w-12 h-12 text-accent-lime dark:text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {/* 35% Badge */}
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-accent-green to-accent-lime dark:from-[#8B7DFF] dark:to-[#A78BFA] rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-[#0A0A0A]">
              <span className="text-sm font-black text-white">35%</span>
            </div>
          </div>
          {/* Gradient Top Bar */}
          <div className="absolute -top-1 left-2 right-2 h-1.5 bg-gradient-to-r from-accent-green via-accent-lime to-accent-lime dark:from-[#8B7DFF] dark:to-[#C4B5FD] rounded-full"></div>
        </div>
      ),
      bgColor: 'bg-gradient-to-br from-accent-lime/10 via-accent-lime/5 to-transparent',
      borderColor: 'border-accent-lime/20 hover:border-accent-lime/40',
      textColor: 'text-accent-lime',
      iconColor: 'text-accent-lime',
    },
    {
      subtitle: 'الدفع السريع',
      title: 'NFC/QR في ثوانٍ - بلا أكواد!',
      icon: (
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-accent-purple/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* NFC/QR Icon */}
          <div className="relative w-20 h-20 bg-gradient-to-br from-accent-purple to-accent-purple rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            {/* QR Code overlay */}
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white dark:bg-gradient-to-br dark:from-[#8B7DFF]/30 dark:to-[#A78BFA]/20 rounded-lg flex items-center justify-center shadow-lg dark:shadow-[0_4px_12px_rgba(139,125,255,0.4)] border-2 border-accent-purple/20 dark:border-[#8B7DFF]/40">
              <svg className="w-5 h-5 text-accent-purple dark:text-[#8B7DFF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm0 4h3v2h-3v-2zm-3-4h2v6h-2v-6z" />
              </svg>
            </div>
          </div>
        </div>
      ),
      bgColor: 'bg-gradient-to-br from-accent-purple/10 via-accent-purple/5 to-transparent',
      borderColor: 'border-accent-purple/20 hover:border-accent-purple/40',
      textColor: 'text-accent-purple',
      iconColor: 'text-accent-purple',
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-white via-background-alt to-white dark:from-[#000000] dark:via-[#000000] dark:to-[#000000] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="scroll-reveal inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-green/10 via-accent-purple/10 to-accent-lime/10 border border-accent-green/20 mb-6">
            <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-text-primary dark:text-[#FFFFFF] tracking-wide">باقات مميزة</span>
          </div>

          {/* Title */}
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-arabic font-black mb-6 leading-tight dark:text-[#FFFFFF]">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent-green via-accent-purple to-accent-lime dark:text-gradient-dark">الجيل الجديد</span> من الخصومات
          </h2>
          
          {/* Description */}
          <p className="scroll-reveal text-lg md:text-xl text-text-secondary dark:text-[#CFCFCF] leading-relaxed max-w-3xl mx-auto font-arabicBody">
            اشحن محفظتك، وفعل باقاتك، وادفع بطرق متعددة داخل التطبيق أو عبر NFC/QR، 
            <span className="font-arabicBody font-semibold text-text-primary dark:text-[#FFFFFF]"> ليُطبّق الخصم مباشرة</span> دون أكواد أو قسائم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {uniqueFeatures.map((feature, index) => {
            // Staggered effect: cards in right column (index 1, 3) are shifted down
            const isRightColumn = index % 2 === 1;
            const staggerClass = isRightColumn ? 'md:mt-12' : '';
            
            return (
              <div
                key={index}
                className={`scroll-reveal-scale group relative ${staggerClass}`}
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br dark:bg-gradient-radial dark:from-[#8B7DFF]/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>
                
                {/* Card */}
                <div className={`relative ${feature.bgColor} dark:bg-gradient-to-br dark:from-[#0A0A0A] dark:to-[#1A1A1A] rounded-[32px] p-10 border-2 ${feature.borderColor} dark:border-[#8B7DFF]/40 dark:hover:border-[#8B7DFF]/70 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl dark:shadow-[0_20px_60px_rgba(139,125,255,0.3)] backdrop-blur-sm h-full flex flex-col min-h-[380px]`}>
                  {/* Icon */}
                  <div className="mb-8 flex items-start flex-shrink-0">
                    {feature.icon}
                  </div>
                  
                  {/* Subtitle */}
                  <p className={`text-base font-arabicBody font-semiBold mb-4 ${feature.textColor} dark:text-[#C4B5FD] opacity-90 flex-shrink-0`}>
                    {feature.subtitle}
                  </p>
                  
                  {/* Title */}
                  <h3 className={`text-3xl md:text-4xl font-arabic font-black ${feature.textColor} dark:text-[#FFFFFF] flex-grow leading-tight`}>
                    {feature.title}
                  </h3>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 left-0 w-20 h-20 ${feature.textColor} opacity-5 rounded-tl-[32px]`}>
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="0" cy="0" r="100" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

