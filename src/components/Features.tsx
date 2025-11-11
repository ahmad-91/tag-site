'use client'

export default function Features() {
  const features = [
    {
      title: 'محفظة خصومات موحّدة',
      description: 'شحن، فعل، ادفع - كل شيء في مكان واحد. لا حاجة لعدة تطبيقات أو أكواد',
      icon: '💳',
      accentColor: 'green',
    },
    {
      title: 'خصم فوري بلا أكواد',
      description: 'الخصم يُحتسب تلقائيًا عند الدفع. لا أكواد، لا قسائم، لا تعقيدات',
      icon: '⚡',
      accentColor: 'lime',
    },
    {
      title: 'دفع سريع عبر NFC/QR',
      description: 'ادفع داخل التطبيق أو عبر NFC/QR في ثوانٍ. تجربة سلسة وآمنة',
      icon: '📱',
      accentColor: 'purple',
    },
    {
      title: 'استهلاك فوري للباقة',
      description: 'استخدم باقاتك مباشرة لدى التاجر بدون تأخير أو تعقيدات',
      icon: '🎯',
      accentColor: 'green',
    },
    {
      title: 'سجل حركات واضح',
      description: 'تابع رصيدك، تاريخ مشترياتك، وإجمالي ما وفّرته - كل شيء واضح',
      icon: '📊',
      accentColor: 'lime',
    },
    {
      title: 'إشعارات ذكية',
      description: 'تنبيهات فورية لكل معاملة وتذكيرات ذكية لاستخدام باقاتك',
      icon: '🔔',
      accentColor: 'purple',
    },
  ]
  
  const accentClasses = {
    green: 'bg-accent-green/10 border-accent-green/30 group-hover:bg-accent-green/20 text-accent-green',
    lime: 'bg-accent-lime/10 border-accent-lime/30 group-hover:bg-accent-lime/20 text-accent-lime',
    purple: 'bg-accent-purple/10 border-accent-purple/30 group-hover:bg-accent-purple/20 text-accent-purple',
  }

  return (
    <section id="features" className="py-20 bg-background dark:bg-[#000000]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title dark:text-[#FFFFFF]">
           ايش يميزنا ؟
          </h2>
          <p className="section-subtitle dark:text-[#CFCFCF] font-arabicBody">
            اكتشف جميع الميزات الرائعة التي يقدمها tag
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group cursor-pointer border-2 ${accentClasses[feature.accentColor as keyof typeof accentClasses]}`}
            >
              <div className={`text-4xl mb-4 inline-block p-3 rounded-xl ${accentClasses[feature.accentColor as keyof typeof accentClasses]} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-arabic font-black mb-3 dark:text-[#FFFFFF]">
                {feature.title}
              </h3>
              <p className="text-text-secondary dark:text-[#CFCFCF] mb-3 font-arabicBody">
                {feature.description}
              </p>
              <div className={`h-1 w-full rounded-full ${accentClasses[feature.accentColor as keyof typeof accentClasses]}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

