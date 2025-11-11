'use client'

import { useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'عن تاق', href: '#service' },
  { name: 'المميزات', href: '#features' },
  { name: 'الأسئلة', href: '#faq' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes ambientPulse {
          0% {
            transform: scale(0.96);
            opacity: 0.28;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.55;
          }
          100% {
            transform: scale(0.96);
            opacity: 0.28;
          }
        }

        .ambient-blob {
          animation: ambientPulse 12s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .ambient-blob--alt {
          animation-delay: 4s;
        }

        @media (prefers-reduced-motion: reduce) {
          .ambient-blob,
          .ambient-blob--alt {
            animation: none !important;
          }
        }
      `}</style>

      {/* NAV - Enhanced Responsive */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'border-b border-white/60 dark:border-[#1A1A1A]/50 bg-white/90 dark:bg-[#0A0A0A]/95 backdrop-blur-2xl shadow-lg dark:shadow-dark-soft py-2 sm:py-3' 
          : 'border-b border-white/40 dark:border-[#1A1A1A]/50 bg-white/70 dark:bg-[#0A0A0A]/90 backdrop-blur-2xl py-3 sm:py-4'
      }`}>
        <div className="section-container">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Mobile Menu Button - Left */}
            <button 
              type="button" 
              className="rounded-xl p-2 text-primary/70 dark:text-[#CFCFCF] hover:text-primary dark:hover:text-[#00D085] md:hidden touch-manipulation active:scale-95 transition-transform" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="فتح القائمة"
            >
              <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Logo & Navigation - Right Side */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-white/60 dark:border-[#1A1A1A]/50 bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur">
                  <Image 
                    src="/icon-black.svg" 
                    alt="tag Logo" 
                    width={28} 
                    height={28} 
                    className="h-5 w-5 sm:h-7 sm:w-7 rounded-xl sm:rounded-2xl dark:hidden" 
                  />
                  <Image 
                    src="/white-logo.png" 
                    alt="tag Logo" 
                    width={28} 
                    height={28} 
                    className="h-5 w-5 sm:h-7 sm:w-7 rounded-xl sm:rounded-2xl hidden dark:block" 
                  />
                </div>
                <span className="text-xl sm:text-2xl font-arabic font-black text-primary dark:text-[#FFFFFF]">tag</span>
              </Link>

              <div className="hidden items-center gap-4 lg:gap-6 md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xs lg:text-sm font-arabicBody font-semiBold text-primary/70 dark:text-[#CFCFCF] transition-colors duration-200 hover:text-primary dark:hover:text-[#00D085] whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Download Button - Left */}
            <button className="hidden md:flex group items-center gap-1.5 lg:gap-2 rounded-lg lg:rounded-xl bg-gradient-to-l from-[#8B7DFF] to-[#A78BFA] dark:bg-gradient-dark-accent px-3 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-arabicBody font-bold text-white shadow-[0_12px_24px_rgba(139,125,255,0.35)] dark:shadow-dark-soft transition-transform duration-300 hover:-translate-y-0.5 touch-manipulation active:scale-95 whitespace-nowrap">
              حمّل التطبيق
              <span className="translate-x-1 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO - Enhanced Responsive */}
      <section
        id="home"
        className="relative isolate flex items-center overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-16 min-h-[calc(100vh-60px)] sm:min-h-screen"
      >
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#030507] via-[#050a10] to-[#020305]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="ambient-blob absolute -right-[10%] sm:-right-[5%] top-[-80px] sm:top-[-120px] -z-10 h-[280px] w-[280px] sm:h-[480px] sm:w-[480px] rounded-full bg-accent-green/30 blur-3xl" />
        <div className="ambient-blob ambient-blob--alt absolute -left-[18%] sm:-left-[15%] bottom-[-100px] sm:bottom-[-160px] -z-10 h-[320px] w-[320px] sm:h-[520px] sm:w-[520px] rounded-full bg-primary/25 blur-[100px] sm:blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl container-padding">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:gap-14 lg:grid-cols-12" dir="ltr">
            {/* النص */}
            <div className="order-1 lg:order-2 text-right lg:col-span-6 lg:col-start-7" dir="rtl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-arabicBody font-semibold text-white/80">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent-green" />
                تمكين المدفوعات مع الخصومات 
              </div>

              <h1 className="mt-5 sm:mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-arabic font-black leading-[1.2] text-white dark:text-white">
                تاق ما يخصم {' '}
                <span className="bg-gradient-to-l from-accent-green via-white to-white dark:text-gradient-dark bg-clip-text text-transparent">
                  تاق
                </span>{' '}
                يعزك
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-arabicBody leading-[1.7] sm:leading-[1.9] text-white/70 lg:ml-auto lg:max-w-2xl">
                حل تقني مبتكر، يجعل خصمك والدفع بلحظة! ما يخليك تنتظر العروض! فعّل الباقة وراح تزيد العروض ما تنقص طول السنة.
              </p>

              <div className="mt-6 sm:mt-10 flex flex-col items-stretch sm:items-start gap-3 sm:gap-4 sm:flex-row sm:items-center lg:justify-start">
                <button className="group flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-l from-[#8B7DFF] to-[#A78BFA] dark:bg-gradient-dark-accent px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-arabicBody font-bold text-white shadow-[0_18px_36px_rgba(139,125,255,0.4)] dark:shadow-dark-soft transition-all duration-300 hover:-translate-y-0.5 touch-manipulation active:scale-95">
                  حمّل التطبيق الآن
                  <span className="translate-x-1 text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                </button>
              </div>

              <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-right">
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-4 text-white backdrop-blur-sm">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent-green/20 mb-2 sm:mb-3">
                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-arabicBody font-medium text-white/60 leading-snug">شبكة متاجر معتمدة لدى تاق</p>
                </div>
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-4 text-white backdrop-blur-sm">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent-purple/20 mb-2 sm:mb-3">
                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-arabicBody font-medium text-white/60 leading-snug">العروض تزيد ما تنقص</p>
                </div>
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-4 text-white backdrop-blur-sm xs:col-span-2 sm:col-span-1">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent-lime/20 mb-2 sm:mb-3">
                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-accent-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-arabicBody font-medium text-white/60 leading-snug">مجموعة باقات تناسب طموحك</p>
                </div>
              </div>
            </div>

            {/* المشهد */}
            <div className="order-2 lg:order-1 lg:col-span-6 lg:col-start-1">
              <div className="relative mx-auto w-full max-w-[220px] xs:max-w-[240px] sm:max-w-[260px] md:max-w-[280px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 rounded-[60px] bg-gradient-to-br from-accent-green/35 via-transparent to-primary/35 blur-3xl" />
                
                {/* iPhone Frame - Responsive */}
                <div className="relative">
                  {/* Phone Border/Frame */}
                  <div className="relative rounded-[40px] sm:rounded-[48px] md:rounded-[56px] border-[10px] sm:border-[12px] md:border-[14px] border-[#1a1a1a] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.7)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.8)] md:shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
                    {/* Notch */}
                    <div className="absolute left-1/2 top-0 z-20 h-[22px] w-[90px] sm:h-[26px] sm:w-[105px] md:h-[30px] md:w-[120px] -translate-x-1/2 rounded-b-[16px] sm:rounded-b-[18px] md:rounded-b-[20px] bg-[#1a1a1a]">
                      <div className="absolute left-1/2 top-[6px] sm:top-[7px] md:top-[8px] h-[4px] w-[35px] sm:h-[5px] sm:w-[42px] md:h-[6px] md:w-[50px] -translate-x-1/2 rounded-full bg-[#0a0a0a]" />
                    </div>

                    {/* Screen Content */}
                    <div className="relative overflow-hidden rounded-[32px] sm:rounded-[38px] md:rounded-[44px] bg-black">
                      {/* App Screenshot - Full Coverage */}
                      <div className="relative w-full aspect-[9/19.5]">
                        <Image
                          src="/hero-img.PNG"
                          alt="TAG App Screenshot"
                          fill
                          className="object-cover rounded-[32px] sm:rounded-[38px] md:rounded-[44px]"
                          priority
                          sizes="(max-width: 375px) 220px, (max-width: 640px) 240px, (max-width: 768px) 260px, 280px"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Side Buttons - Responsive */}
                  <div className="absolute -left-[2px] top-[90px] sm:top-[105px] md:top-[120px] h-[35px] sm:h-[42px] md:h-[50px] w-[2px] sm:w-[2.5px] md:w-[3px] rounded-r-full bg-[#1a1a1a]" />
                  <div className="absolute -left-[2px] top-[135px] sm:top-[157px] md:top-[180px] h-[35px] sm:h-[42px] md:h-[50px] w-[2px] sm:w-[2.5px] md:w-[3px] rounded-r-full bg-[#1a1a1a]" />
                  <div className="absolute -left-[2px] top-[180px] sm:top-[210px] md:top-[240px] h-[50px] sm:h-[60px] md:h-[70px] w-[2px] sm:w-[2.5px] md:w-[3px] rounded-r-full bg-[#1a1a1a]" />
                  <div className="absolute -right-[2px] top-[135px] sm:top-[157px] md:top-[180px] h-[56px] sm:h-[68px] md:h-[80px] w-[2px] sm:w-[2.5px] md:w-[3px] rounded-l-full bg-[#1a1a1a]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition show={mobileMenuOpen}>
          <Dialog onClose={setMobileMenuOpen} className="md:hidden">
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/50" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-[#0A0A0A] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-[#1A1A1A]/50">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Image src="/icon-black.svg" alt="tag Logo" width={40} height={40} className="h-10 w-10 rounded-[30px] dark:hidden" />
                  <Image src="/white-logo.png" alt="tag Logo" width={40} height={40} className="h-10 w-10 rounded-[30px] hidden dark:block" />
                  <span className="text-2xl font-arabic font-black text-text-primary dark:text-[#FFFFFF]">tag</span>
                </Link>
                <button type="button" className="-m-2.5 p-2.5" onClick={() => setMobileMenuOpen(false)}>
                  <XMarkIcon className="h-6 w-6 text-text-primary dark:text-[#FFFFFF]" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-[#1A1A1A]/50">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-arabicBody font-semiBold text-text-primary dark:text-[#CFCFCF] transition-colors hover:text-primary dark:hover:text-[#00D085]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <button className="bg-gradient-to-l from-[#8B7DFF] to-[#A78BFA] text-white px-6 py-3 rounded-lg font-arabicBody font-semiBold shadow-[0_12px_24px_rgba(139,125,255,0.35)] hover:opacity-90 transition-all duration-300 dark:bg-gradient-dark-accent dark:shadow-dark-soft mt-4 w-full">حمّل التطبيق</button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </>
  )
}
