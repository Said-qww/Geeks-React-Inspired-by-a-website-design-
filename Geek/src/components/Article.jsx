import React from 'react'

const Article = () => {
  const testimonials = [
    {
      id: 1,
      text: "The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.",
      avatar: "https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg",
      name: "Barry Watson",
      role: "Web Developer, UK",
      colorClass: "border-purple-500 bg-purple-500"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed vel felis imperdiet, lacinia metus malesuada diamamus rutrum turpis leo, id tincidunt magna sodales.",
      avatar: "https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg",
      name: "Linda Shenoy",
      role: "Developer and Bootcamp Instructor",
      colorClass: "border-blue-500 bg-blue-500"
    }
  ]

  return (
    <div className="bg-blue-50/50 py-12 px-4 md:py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-purple-600 font-semibold tracking-widest text-sm mb-3">
            TESTIMONIALS
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What our learners are saying
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            12+ million people are already learning on Geeks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between overflow-hidden pt-8 md:pt-10">
              <p className="text-gray-600 text-base md:text-xl px-6 md:px-10 text-center leading-relaxed mb-8">
                "{item.text}"
              </p>
              
              <div className="flex flex-col items-center">
                <img 
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 ${item.colorClass.split(' ')[0]} object-cover shadow-md z-10 -mb-10`} 
                  src={item.avatar} 
                  alt={item.name} 
                />
                <div className={`w-full ${item.colorClass.split(' ')[1]} text-center pt-14 pb-6 px-4`}>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {item.name}
                  </h2>
                  <p className="text-white/80 text-sm font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Article
