import React from 'react'

const Aside = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-purple-600 font-semibold tracking-widest text-sm mb-3">
              YOUR INSTRUCTOR
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Hi, I’m <span className="text-purple-600">James Davies</span>, will be taking you through lessons.
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8">
              Create beautiful website with this Geeks UI template. Get started building a site today.
            </p>
            <hr className="border-gray-200 mb-8" />
            <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">45</h2>
                <p className="text-gray-500 text-sm">Lessons</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">10,500+</h2>
                <p className="text-gray-500 text-sm">Students</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">12+</h2>
                <p className="text-gray-500 text-sm">Learning Hours</p>
              </div>
            </div>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
            <img 
              src="https://geeks-react.netlify.app/static/media/instructor-img.1ed9cc40ee4734876e12.png" 
              alt="Instructor" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <p className="text-center text-purple-600 font-semibold tracking-widest text-sm mb-8">
            TRUSTED BY TOP-TIER PRODUCT COMPANIES
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <img className="h-6 w-auto" src="https://geeks-react.netlify.app/static/media/gray-logo-stripe.6b556d06bcc209f1c051bbdb399131f0.svg" alt="Stripe" />
            <img className="h-6 w-auto" src="https://geeks-react.netlify.app/static/media/gray-logo-discord.2e0bae69d24feccf4efdd3f80746031b.svg" alt="Discord" />
            <img className="h-6 w-auto" src="https://geeks-react.netlify.app/static/media/gray-logo-intercom.870602b99ded665ecf0c2d5b2ffeb8c4.svg" alt="Intercom" />
            <img className="h-6 w-auto" src="https://geeks-react.netlify.app/static/media/gray-logo-netflix.a47db6eaf2de7327844f27eb230da39c.svg" alt="Netflix" />
            <img className="h-6 w-auto hidden md:block" src="https://geeks-react.netlify.app/static/media/gray-logo-stripe.6b556d06bcc209f1c051bbdb399131f0.svg" alt="Stripe" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Aside
