import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full border-b border-gray-200 bg-white px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <div className="flex items-center gap-6 flex-1 md:flex-initial">
          <img 
            src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" 
            alt="Logo" 
            className="h-8 w-auto"
          />
          
          <div className="hidden xl:flex items-center gap-4 text-sm font-medium text-gray-700">
            <select className="bg-transparent outline-none cursor-pointer">
              <option>Browse</option>
              <option>Web Development</option>
              <option>Design</option>
            </select>
            <select className="bg-transparent outline-none cursor-pointer">
              <option>Landings</option>
              <option>Home Learning</option>
            </select>
            <select className="bg-transparent outline-none cursor-pointer">
              <option>Pages</option>
              <option>Courses</option>
            </select>
            <select className="bg-transparent outline-none cursor-pointer">
              <option>Accounts</option>
              <option>Instructor</option>
            </select>
            <select className="bg-transparent outline-none cursor-pointer">
              <option>Documentation</option>
            </select>
          </div>

          <div className="hidden md:block">
            <input 
              type="text" 
              placeholder="🔍 Search Courses" 
              className="w-64 rounded-lg border border-gray-300 px-3 py-1.5 text-sm outline-none focus:border-purple-600"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-full bg-blue-50 p-2">☀️</button>
            <button className="rounded-lg border border-gray-900 px-4 py-1.5 text-sm font-semibold">
              <a href="https://netlify.app">Sign In</a>
            </button>
            <button className="rounded-lg bg-purple-600 px-4 py-1.5 text-sm font-semibold text-white">
              <a href="https://netlify.app">Sign Up</a>
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="xl:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 border-t border-gray-200 pt-4 xl:hidden flex flex-col gap-3">
          <div className="md:hidden">
            <input 
              type="text" 
              placeholder="🔍 Search Courses" 
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <select className="border border-gray-200 rounded-lg p-2"><option>Browse</option></select>
            <select className="border border-gray-200 rounded-lg p-2"><option>Landings</option></select>
            <select className="border border-gray-200 rounded-lg p-2"><option>Pages</option></select>
            <select className="border border-gray-200 rounded-lg p-2"><option>Accounts</option></select>
          </div>

          <div className="flex md:hidden items-center justify-between gap-3 mt-2 border-t pt-3">
            <button className="rounded-full bg-blue-50 p-2">☀️</button>
            <div className="flex gap-2 flex-1">
              <button className="flex-1 rounded-lg border border-gray-900 py-2 text-sm font-semibold text-center">
                <a href="#" className="block w-full">Sign In</a>
              </button>
              <button className="flex-1 rounded-lg bg-purple-600 py-2 text-sm font-semibold text-white text-center">
                <a href="#" className="block w-full">Sign Up</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
