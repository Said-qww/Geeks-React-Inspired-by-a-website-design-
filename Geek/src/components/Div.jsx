import React, { useState } from 'react'

const Faq = () => {
  const [openId, setOpenId] = useState(1)

  const faqs = [
    {
      id: 1,
      question: "What is the cost of an online course",
      answer: "Create beautiful website with this Geeks UI template. Get started building a site today."
    },
    {
      id: 2,
      question: "What do I need to take a course?",
      answer: "Alekam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs."
    },
    {
      id: 3,
      question: "What do I receive for taking this course?",
      answer: "In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare."
    },
    {
      id: 4,
      question: "What will I get if I subscribe to this Certificate?",
      answer: "Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada."
    }
  ]

  return (
    <div className="w-full bg-white py-12 px-4 md:py-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-purple-600 font-semibold tracking-widest text-sm mb-3">
            NEED TO KNOW
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.
          </p>
        </div>

        <div className="border-t border-gray-200 mb-12">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 py-5">
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </span>
                <span className="text-purple-500 text-2xl font-light ml-4 select-none">
                  {openId === faq.id ? '−' : '+'}
                </span>
              </button>
              
              {openId === faq.id && (
                <div className="mt-3 pr-8">
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
            <a href="#">More questions? Visit the Learner Help Center</a>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Faq
