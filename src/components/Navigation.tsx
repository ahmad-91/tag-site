'use client'

import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'عن تاق', href: '#service' },
  { name: 'المميزات', href: '#features' },
  { name: 'الأسئلة', href: '#faq' },
  { name: 'تحميل التطبيق', href: '#download' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-sm shadow-sm dark:shadow-dark-soft dark:border-b dark:border-[#1A1A1A]/50">
      <nav className="section-container py-4">
        <div className="flex flex-row-reverse md:flex-row items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/icon-black.svg"
              alt="tag Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-[10px] dark:hidden"
            />
            <Image
              src="/white-logo.png"
              alt="tag Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-[10px] hidden dark:block"
            />
            <span className="text-2xl font-arabic font-black text-text-primary dark:text-[#FFFFFF]">tag</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-primary dark:text-[#CFCFCF] font-arabicBody font-semiBold hover:text-primary dark:hover:text-[#00D085] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-gradient-to-l from-[#8B7DFF] to-[#A78BFA] text-white px-6 py-3 rounded-lg font-arabicBody font-semiBold shadow-[0_12px_24px_rgba(139,125,255,0.35)] hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 dark:bg-gradient-dark-accent dark:shadow-dark-soft">
              حمّل التطبيق
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-text-primary dark:text-[#FFFFFF]" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
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
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-[#0A0A0A] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-[#1A1A1A]/50">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                  src="/icon-black.svg"
                  alt="tag Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-[30px] dark:hidden"
                />
                <Image
                  src="/white-logo.png"
                  alt="tag Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-[30px] hidden dark:block"
                />
                <span className="text-2xl font-arabic font-black text-text-primary dark:text-[#FFFFFF]">tag</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
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
                      className="block px-3 py-2 text-base font-arabicBody font-semiBold text-text-primary dark:text-[#CFCFCF] hover:text-primary dark:hover:text-[#00D085]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button className="bg-gradient-to-l from-[#8B7DFF] to-[#A78BFA] text-white px-6 py-3 rounded-lg font-arabicBody font-semiBold shadow-[0_12px_24px_rgba(139,125,255,0.35)] hover:opacity-90 transition-all duration-300 dark:bg-gradient-dark-accent dark:shadow-dark-soft w-full mt-4">
                    حمّل التطبيق
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  )
}

