import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-16 pb-8 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="flex flex-col gap-4">
            <img 
              src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" 
              alt="Logo" 
              className="h-8 w-auto self-start"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <span className="text-sm">🔵</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <span className="text-sm">⚫</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <span className="text-sm">🔴</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 mb-4 text-base tracking-wide uppercase">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">About</a></li>
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Pricing</a></li>
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Blog</a></li>
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Careers</a></li>
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 mb-4 text-base tracking-wide uppercase">Support</h2>
            <ul className="space-y-2 text-sm">
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Help and Support</a></li>
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Become Instructor</a></li>
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Get the app</a></li>
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">FAQ's</a></li>
              <li><a className="text-gray-500 hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Tutorial</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <h2 className="font-bold text-gray-900 text-base tracking-wide uppercase">Get in touch</h2>
            <p className="text-gray-500 leading-relaxed">
              339 McDermott Points Hettingerhaven, NV 15283
            </p>
            <p className="text-gray-500">
              Email: <a className="text-purple-600 hover:text-purple-800 font-medium transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">support@geeksui.com</a>
            </p>
            <p className="text-gray-500">
              Phone: <span className="text-gray-900 font-medium">(000) 123 456 789</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <img className="h-10 w-auto cursor-pointer" src="https://geeks-react.netlify.app/static/media/appstore.b464860c93223b3fc15fc7d026bcdca0.svg" alt="App Store" />
              <img className="h-10 w-auto cursor-pointer" src="https://geeks-react.netlify.app/static/media/playstore.f23c3dcbde32e767203274d4b1749cc7.svg" alt="Google Play" />
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-500">
          <p>© 2026 Geeks-UI, Inc. All Rights Reserved</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a className="hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Privacy Policy</a>
            <a className="hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Cookie Notice</a>
            <a className="hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Do Not Sell My Personal Info</a>
            <a className="hover:text-purple-600 transition-colors" href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
