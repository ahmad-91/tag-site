'use client'

import Image from 'next/image'

export default function PromotionSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#000000] w-full h-[70vh] sm:h-[80vh] lg:h-screen flex items-center justify-center">
      {/* Full Width Container - Centered */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Content Container - Centered - Full Width */}
        <div className="relative z-10 w-full h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          {/* Image Container - Person centered */}
          <div className="relative w-full h-full max-h-[60vh] sm:max-h-[70vh] lg:max-h-[85vh] flex items-center justify-center overflow-visible">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-transparent">
              <Image
                src="/home-hero-bg-image-2.avif"
                alt="tag - تطبيق tag"
                fill
                className="object-cover object-center"
                quality={100}
                priority
                sizes="100vw"
              />
            </div>

            {/* Floating Cards - Overlay on Image */}
            
            {/* Top Right Card - Product Showcase (RTL: top-left corner) - Partially outside image */}
            <div className="absolute top-2 -left-4 sm:top-4 sm:-left-8 lg:top-8 lg:-left-12 bg-white dark:bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl dark:shadow-[0_20px_60px_rgba(139,125,255,0.3)] max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] z-20 border border-gray-100 dark:border-[#8B7DFF]/40">
              <div className="flex items-center gap-1.5 sm:gap-2.5 mb-2 sm:mb-3">
                {/* Phone Icon */}
                <div className="bg-gradient-to-br from-accent-green to-accent-lime dark:from-[#8B7DFF] dark:to-[#A78BFA] p-1.5 sm:p-2 rounded-lg">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Laptop Icon */}
                <div className="bg-gradient-to-br from-accent-purple to-accent-purple/80 dark:from-[#8B7DFF] dark:to-[#C4B5FD] p-1.5 sm:p-2 rounded-lg">
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button className="w-full bg-gradient-to-l from-[#8B7DFF] to-[#A78BFA] text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl font-arabicBody font-semiBold text-[10px] sm:text-xs hover:opacity-90 transition-all shadow-[0_4px_12px_rgba(139,125,255,0.3)]">
                عروض tag حصرية! كل يوم!
              </button>
            </div>

            {/* Top Left Banners (RTL: top-right) - Partially outside image */}
            <div className="absolute top-2 -right-4 sm:top-4 sm:-right-8 lg:top-8 lg:-right-12 space-y-1.5 sm:space-y-2.5 z-20 max-w-[140px] sm:max-w-[200px] lg:max-w-[240px]">
              {/* Banner 1 - Instant Discount */}
              <div className="bg-white dark:bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shadow-xl dark:shadow-[0_12px_24px_rgba(139,125,255,0.25)] border border-gray-100 dark:border-[#8B7DFF]/30">
                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <div className="bg-accent-green/10 dark:bg-[#8B7DFF]/20 p-1 sm:p-1.5 rounded-lg flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent-green dark:text-[#C4B5FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-arabicBody font-black text-accent-green dark:text-[#C4B5FD] text-[9px] sm:text-xs leading-tight">خصم فوري</h4>
                </div>
              </div>

              {/* Banner 2 - No Codes */}
              <div className="bg-white dark:bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shadow-xl dark:shadow-[0_12px_24px_rgba(139,125,255,0.25)] border border-gray-100 dark:border-[#8B7DFF]/30">
                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <div className="bg-accent-lime/10 dark:bg-[#A78BFA]/20 p-1 sm:p-1.5 rounded-lg flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-accent-lime dark:text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-arabicBody font-black text-accent-lime dark:text-[#A78BFA] text-[9px] sm:text-xs leading-tight">بلا أكواد أو قسائم</h4>
                </div>
              </div>
            </div>

            {/* Bottom Left Card - Discount Packages (RTL: bottom-right) - Partially outside image */}
            <div className="absolute bottom-2 -right-4 sm:bottom-4 sm:-right-8 lg:bottom-8 lg:-right-12 bg-white dark:bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl dark:shadow-[0_20px_60px_rgba(139,125,255,0.3)] max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] z-20 border border-gray-100 dark:border-[#8B7DFF]/40">
              <div className="mb-2 sm:mb-2.5">
                <div className="bg-gradient-to-br from-accent-green to-accent-lime dark:from-[#8B7DFF] dark:to-[#A78BFA] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl w-fit">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-lg font-arabic font-black text-accent-green dark:text-[#C4B5FD]">خصومات حتى %60</h4>
                <p className="text-text-secondary dark:text-[#CFCFCF] text-[10px] sm:text-xs font-arabicBody font-semiBold">باقات مرنة من 15% إلى 35%</p>
              </div>
            </div>

            {/* Bottom Right - Partner Logos (RTL: bottom-left) - Partially outside image */}
            <div className="absolute bottom-2 -left-4 sm:bottom-4 sm:-left-8 lg:bottom-8 lg:-left-12 flex flex-col gap-2 sm:gap-3 z-20">
              {/* SHEIN Logo */}
              <div className="bg-white dark:bg-[#0A0A0A] rounded-full p-2 sm:p-3 shadow-xl dark:shadow-[0_12px_24px_rgba(139,125,255,0.25)] border border-gray-100 dark:border-[#8B7DFF]/30 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <span className="font-bold text-xs sm:text-sm text-primary dark:text-[#FFFFFF]">SHEIN</span>
              </div>
              {/* Amazon Logo */}
              <div className="bg-white dark:bg-[#0A0A0A] rounded-full p-2 sm:p-3 shadow-xl dark:shadow-[0_12px_24px_rgba(139,125,255,0.25)] border border-gray-100 dark:border-[#8B7DFF]/30 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <span className="font-bold text-[10px] sm:text-xs text-primary dark:text-[#FFFFFF]">amazon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

