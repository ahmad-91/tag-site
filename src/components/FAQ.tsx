'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: 'وش هي tag وكيف تعمل؟',
    answer: 'tag هي محفظة خصومات موحّدة تمنحك خصومات فورية بلا أكواد. شحن المحفظة، شراء وتفعيل الباقة، ثم الدفع عبر NFC/QR - والخصم يُحتسب تلقائيًا في خطوة واحدة!',
  },
  {
    question: 'وين أقدر أستخدم tag؟',
    answer: 'tag متاح في مطاعم وكافيهات وأماكن الترفيه والتسلية. يمكنك استكشاف العروض القريبة منك داخل التطبيق.',
  },
  {
    question: 'كيف أشحن المحفظة وأشتري الباقة؟',
    answer: 'اشحن رصيدك باستخدام Apple Pay، مدى، أو Visa. ثم اختر الباقة المناسبة لك (شقاردي 15%، قوة 30%، أستورة 35%) واشتريها من رصيدك. الباقة تُفعّل تلقائيًا.',
  },
  {
    question: 'كيف أدفع باستخدام tag؟',
    answer: 'بكل بساطة! افتح التطبيق، قرّب هاتفك من جهاز التاجر (NFC) أو امسح الكود QR. الخصم يُحتسب تلقائيًا من الباقة المُفعّلة ويدفع السعر النهائي المخفّض مباشرة.',
  },
  {
    question: 'هل يمكنني استخدام أكثر من باقة؟',
    answer: 'نعم! يمكنك شراء عدة باقات وتفعيل/إلغاء تفعيل أي باقة في أي وقت. النظام يستخدم تلقائيًا الباقة ذات الخصم الأعلى عند الدفع.',
  },
  {
    question: 'هل tag آمن؟',
    answer: 'أكيد! tag تستخدم أعلى معايير الأمان والحماية. جميع المعاملات مشفّرة وآمنة. رصيدك محمي ومستخدم فقط لدى التجار المعتمدين.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background-alt to-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              أسئلة ممكن تيجي في بالك
            </h2>
            <p className="section-subtitle">
              إجابات على الأسئلة الأكثر شيوعاً
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-white px-6 py-4 text-right shadow-md hover:shadow-lg transition-all border-r-4 border-accent-green hover:border-accent-green-dark">
                      <span className="text-lg font-arabic font-semiBold text-text-primary">
                        {faq.question}
                      </span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-accent-green transition-transform`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-4 bg-gradient-to-r from-accent-green/5 to-transparent rounded-b-lg text-text-secondary leading-relaxed border-r-4 border-accent-green/30">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

