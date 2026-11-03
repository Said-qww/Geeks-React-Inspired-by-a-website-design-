import React from 'react'

const Main = () => {
  const cards = [
    {
      id: 1,
      icon: "https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg",
      title: "Introduction to JavaScript",
      isFree: true,
      course: "COURSES - 1",
      lessons: "6 LESSONS",
      duration: "1 HOUR 12 MIN",
      desc: "In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare"
    },
    {
      id: 2,
      icon: "https://geeks-react.netlify.app/static/media/feature-icon-2.35b3b77394deb3cd7ebf78b8464fab62.svg",
      title: "JavaScript Beginning",
      isFree: false,
      course: "COURSES - 2",
      lessons: "4 LESSONS",
      duration: "32 MIN",
      desc: "Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada."
    },
    {
      id: 3,
      icon: "https://geeks-react.netlify.app/static/media/feature-icon-3.7cfb20a1964dfcd934da6b2267d68bc9.svg",
      title: "Variables and Constants",
      isFree: false,
      course: "COURSES - 3",
      lessons: "8 LESSONS",
      duration: "10 MIN",
      desc: "Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs."
    },
    {
      id: 4,
      icon: "https://geeks-react.netlify.app/static/media/feature-icon-4.4e54d5c3aeac9d9d151971629ba18abf.svg",
      title: "Types and Operators",
      isFree: false,
      course: "COURSES - 4",
      lessons: "10 LESSONS",
      duration: "32 MIN",
      desc: "In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl."
    }
  ]

  return (
    <div className="bg-sky-100 px-4 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-purple-600 font-semibold tracking-widest text-sm mb-3">
            COURSE DESCRIPTION
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What will you learn?
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-xl flex flex-col justify-between min-h-[240px]">
              <div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-full p-3 shrink-0">
                    <img className="h-6 w-6" src={card.icon} alt="" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex flex-wrap items-center gap-2 mb-2">
                      {card.title}
                      {card.isFree && (
                        <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full font-normal">
                          Free
                        </span>
                      )}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span>{card.course}</span>
                      <span>•</span>
                      <span>{card.lessons}</span>
                      <span>•</span>
                      <span>{card.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="mt-6">
                <a className="text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/#!">
                  View Chapter Details +
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Main
