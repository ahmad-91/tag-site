'use client'

import Image from 'next/image'

export default function PromotionSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full h-screen flex items-center justify-center">
      {/* Full Width Container - Centered */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Content Container - Centered - Full Width */}
        <div className="relative z-10 w-full h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          {/* Image Container - Person centered */}
          <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center overflow-visible">
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
            <div className="absolute top-4 -left-8 lg:top-8 -left-12 bg-white rounded-2xl p-4 shadow-xl max-w-[240px] z-20 border border-gray-100">
              <div className="flex items-center gap-2.5 mb-3">
                {/* Phone Icon */}
                <div className="bg-gradient-to-br from-accent-green to-accent-lime p-2 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Laptop Icon */}
                <div className="bg-gradient-to-br from-accent-purple to-accent-purple/80 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button className="w-full bg-accent-purple text-white py-2 px-3 rounded-xl font-semiBold text-xs hover:bg-accent-purple/90 transition-all">
                عروض tag حصرية! كل يوم!
              </button>
            </div>

            {/* Top Left Banners (RTL: top-right) - Partially outside image */}
            <div className="absolute top-4 -right-8 lg:top-8 -right-12 space-y-2.5 z-20 max-w-[240px]">
              {/* Banner 1 - Instant Discount */}
              <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="bg-accent-green/10 p-1.5 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-arabic font-black text-accent-green text-xs leading-tight">خصم فوري</h4>
                </div>
              </div>

              {/* Banner 2 - No Codes */}
              <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="bg-accent-lime/10 p-1.5 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-arabic font-black text-accent-lime text-xs leading-tight">بلا أكواد أو قسائم</h4>
                </div>
              </div>
            </div>

            {/* Bottom Left Card - Discount Packages (RTL: bottom-right) - Partially outside image */}
            <div className="absolute bottom-4 -right-8 lg:bottom-8 -right-12 bg-white rounded-2xl p-4 shadow-xl max-w-[240px] z-20 border border-gray-100">
              <div className="mb-2.5">
                <div className="bg-gradient-to-br from-accent-green to-accent-lime p-2.5 rounded-xl w-fit">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-lg font-arabic font-black text-accent-green">خصومات حتى %60</h4>
                <p className="text-text-secondary text-xs font-semiBold">باقات مرنة من 15% إلى 35%</p>
              </div>
            </div>

            {/* Bottom Right - Partner Logos (RTL: bottom-left) - Partially outside image */}
            <div className="absolute bottom-4 -left-8 lg:bottom-8 -left-12 flex flex-col gap-3 z-20">
              {/* SHEIN Logo */}
              <div className="bg-white rounded-full p-3 shadow-xl border border-gray-100 w-16 h-16 flex items-center justify-center">
                <span className="font-bold text-sm text-primary">SHEIN</span>
              </div>
              {/* Amazon Logo */}
              <div className="bg-white rounded-full p-3 shadow-xl border border-gray-100 w-16 h-16 flex items-center justify-center">
                <span className="font-bold text-xs text-primary">amazon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

