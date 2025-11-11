'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  main: [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الخدمة', href: '#service' },
    { name: 'المميزات', href: '#features' },
    { name: 'الباقات', href: '#packages' },
  ],
  info: [
    { name: 'عن tag', href: '#about' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'تحميل التطبيق', href: '#download' },
    { name: 'الشركاء', href: '#partners' },
  ],
  legal: [
    { name: 'سياسة الخصوصية', href: '#privacy' },
    { name: 'الشروط والأحكام', href: '#terms' },
    { name: 'التواصل', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-black text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 py-16">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/white-logo.png"
                alt="tag Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 font-arabicBody leading-relaxed mb-6 max-w-md">
              محفظة الخصومات الذكية التي تجمع أفضل العروض في مكان واحد. خصومات فورية، دفع سريع، وشفافية كاملة.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a href="#" className="group w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent-green transition-all duration-300 border border-white/10 hover:border-accent-green">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="group w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent-purple transition-all duration-300 border border-white/10 hover:border-accent-purple">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="group w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent-lime transition-all duration-300 border border-white/10 hover:border-accent-lime">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a href="#" className="group w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 border border-white/10 hover:border-blue-600">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Main Links */}
            <div>
              <h3 className="text-lg font-arabic font-black mb-4 text-white">روابط سريعة</h3>
              <ul className="space-y-3">
                {footerLinks.main.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-accent-green transition-colors duration-300 text-sm font-arabicBody flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-accent-green transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Links */}
            <div>
              <h3 className="text-lg font-arabic font-black mb-4 text-white">معلومات</h3>
              <ul className="space-y-3">
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-accent-purple transition-colors duration-300 text-sm font-arabicBody flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-accent-purple transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-arabic font-black mb-4 text-white">قانوني</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-accent-lime transition-colors duration-300 text-sm font-arabicBody flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-accent-lime transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm font-arabicBody">
              © 2025 <span className="font-arabicBody font-semibold text-white/70">tag</span>. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-white/50 hover:text-white transition-colors font-arabicBody">
                سياسة الاستخدام
              </Link>
              <span className="text-white/20">•</span>
              <Link href="#" className="text-white/50 hover:text-white transition-colors font-arabicBody">
                الشروط والأحكام
              </Link>
              <span className="text-white/20">•</span>
              <Link href="#" className="text-white/50 hover:text-white transition-colors font-arabicBody">
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

