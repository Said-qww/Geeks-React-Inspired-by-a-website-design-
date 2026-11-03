import React from 'react'

const Footer1 = () => {
  return (
    <div className="w-full bg-gray-50 border-y border-gray-200 py-16 px-4 md:py-24 bg-[url('https://remire.co/wp-content/uploads/2024/05/stacks.svg')] bg-cover bg-center">
      <div className="mx-auto max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Join more than 1 million learners worldwide
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
          Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-colors">
            <a href="#" className="block w-full">Start Learning for Free</a>
          </button>
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-colors">
            <a href="#" className="block w-full">Geeks for Business</a>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Footer1
