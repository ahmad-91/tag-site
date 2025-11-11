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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/icon-black.svg"
              alt="tag Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-[10px]"
            />
            <span className="text-2xl font-arabic font-black text-text-primary">tag</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-primary font-semiBold hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-primary">
              حمّل التطبيق
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-text-primary" />
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

          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                  src="/icon-black.svg"
                  alt="tag Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-[30px]"
                />
                <span className="text-2xl font-arabic font-black text-text-primary">tag</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 text-text-primary" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-semiBold text-text-primary hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button className="btn-primary w-full mt-4">
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

