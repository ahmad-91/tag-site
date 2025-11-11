'use client'

export default function Merchants() {
  const merchantBenefits = [
    {
      title: 'زود ولاء عملائك',
      description: 'قدم خصومات فورية تجذب العملاء وتجعلهم يعودون إليك مراراً وتكراراً',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-accent-green to-accent-green-dark',
      borderColor: 'border-accent-green/30',
      hoverBorder: 'hover:border-accent-green',
      hoverBg: 'hover:bg-accent-green/5',
      textColor: 'text-accent-green',
    },
    {
      title: 'سرع مبيعاتك',
      description: 'نظام دفع سريع وآمن عبر NFC/QR يقلل وقت المعاملة ويزيد حجم المبيعات',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-accent-purple to-accent-purple',
      borderColor: 'border-accent-purple/30',
      hoverBorder: 'hover:border-accent-purple',
      hoverBg: 'hover:bg-accent-purple/5',
      textColor: 'text-accent-purple',
    },
    {
      title: 'تابع تحليلات الإيرادات',
      description: 'لوحة تحكم شاملة لمتابعة المبيعات، الإيرادات، والعمليات في الوقت الفعلي',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-accent-lime to-accent-lime',
      borderColor: 'border-accent-lime/30',
      hoverBorder: 'hover:border-accent-lime',
      hoverBg: 'hover:bg-accent-lime/5',
      textColor: 'text-accent-lime',
    },
  ]

  return (
    <section id="merchants" className="relative py-20 bg-gradient-to-br from-primary/5 via-accent-green/5 to-accent-purple/5 dark:from-[#000000] dark:via-[#000000] dark:to-[#000000] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green dark:bg-[#8B7DFF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple dark:bg-[#A78BFA] rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-arabic font-black text-primary dark:text-[#FFFFFF] mb-6">
            للتجار
          </h2>
          <p className="text-2xl lg:text-3xl font-arabic font-bold text-text-primary dark:text-[#FFFFFF] mb-4 leading-relaxed">
            زود ولاء عملائك وسرع مبيعاتك، وتابع <span className="dark:text-gradient-dark">تحليلات الإيرادات</span>
          </p>
          <p className="text-lg text-text-secondary dark:text-[#CFCFCF] max-w-2xl mx-auto font-arabicBody">
            انضم إلى منصة tag وقدم لعملائك تجربة دفع فريدة مع خصومات تلقائية وتحليلات شاملة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {merchantBenefits.map((benefit, index) => (
            <div
              key={index}
              className={`feature-card text-center border-2 ${benefit.borderColor} ${benefit.hoverBorder} ${benefit.hoverBg} dark:bg-[#0A0A0A] dark:border-[#8B7DFF]/40 dark:hover:border-[#8B7DFF]/70 dark:shadow-dark-soft transition-all duration-300 bg-white/90 backdrop-blur-sm relative overflow-hidden group`}
            >
              {/* Gradient Accent on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} dark:from-[#8B7DFF] dark:to-[#A78BFA] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg dark:shadow-[0_8px_24px_rgba(139,125,255,0.4)] transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className={`text-xl font-arabic font-black mb-4 ${benefit.textColor} dark:text-[#C4B5FD] group-hover:scale-105 transition-transform duration-300`}>
                  {benefit.title}
                </h3>
                
                <p className="text-text-secondary dark:text-[#CFCFCF] leading-relaxed font-arabicBody">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${benefit.gradient} dark:from-[#8B7DFF] dark:to-[#A78BFA] opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-l from-[#8B7DFF] to-[#A78BFA] text-white hover:shadow-xl px-8 py-4 rounded-xl font-arabic font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_12px_24px_rgba(139,125,255,0.35)]">
              انضم كتاجر
            </button>
            <button className="border-2 border-accent-purple dark:border-[#8B7DFF] text-accent-purple dark:text-[#C4B5FD] hover:bg-accent-purple dark:hover:bg-gradient-to-l dark:hover:from-[#8B7DFF] dark:hover:to-[#A78BFA] hover:text-white px-8 py-4 rounded-xl font-arabic font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 dark:shadow-[0_8px_20px_rgba(139,125,255,0.25)]">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

