import React from 'react'

const Hero = () => {
  return (
    <div className="bg-sky-100 py-12 px-4 md:py-20 md:px-8">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Become a Vanilla JavaScript Developer
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
            In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-semibold text-gray-700 mb-8">
            <span>🕑 4 Hours</span>
            <span>🎥 12 Videos</span>
            <span>👥 10,324+ Enrolled</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors">
            Watch Preview
          </button>
        </div>

        <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Create Free Account</h2>
          
          <div className="grid grid-cols-3 gap-2 mb-6">
            <button className="bg-gray-50 border border-gray-200 hover:bg-gray-100 py-2.5 rounded-xl text-sm font-medium transition-colors">Google</button>
            <button className="bg-gray-50 border border-gray-200 hover:bg-gray-100 py-2.5 rounded-xl text-sm font-medium transition-colors">Twitter</button>
            <button className="bg-gray-50 border border-gray-200 hover:bg-gray-100 py-2.5 rounded-xl text-sm font-medium transition-colors">Facebook</button>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <hr className="w-full border-gray-200" />
            <span className="text-xs font-bold text-gray-400">OR</span>
            <hr className="w-full border-gray-200" />
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-purple-600 transition-colors"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-purple-600 transition-colors"
            />
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md">
              <a href="https://geeks-react.netlify.app/marketing/landings/course-lead/" className="block w-full">Start Courses for Free</a>
            </button>
          </form>

          <hr className="border-gray-200 my-6" />

          <p className="text-xs text-gray-500 leading-relaxed text-center lg:text-left">
            By continuing you accept the{' '}
            <a className="font-bold text-gray-700 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Terms of Use</a>,{' '}
            <a className="font-bold text-gray-700 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Privacy Policy</a>, and{' '}
            <a className="font-bold text-gray-700 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Data Policy</a>
          </p>
        </div>

      </div>

      <div className="mx-auto max-w-5xl mt-12 md:mt-20 border-t border-gray-200 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm md:text-base font-medium text-gray-700">
          <div>✅ Shareable Certificate</div>
          <div>✅ Flexible Deadlines</div>
          <div>✅ 100% Online Courses</div>
          <div>✅ Approx. 24 hours</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
