import React from 'react'

const Div = () => {
  return (
    <div className='text-center p-20'>
        <div className='text-center p-20'>
          <p className='text-purple-600 flex justify-self-center justify-between w-45'><p className='inline'>N E E D</p><p className='inline'>T O</p><p className='inline'>K N O W</p></p>
          <h1 className='text-5xl font-bold'>Frequently Asked Questions.</h1>
          <br /> 
          <h3 className='text-gray-500 text-2xl w-240 justify-self-center flex justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.</h3>
        </div>
        <br />
        <div className='w-full'>
            <div className='flex justify-between w-200 justify-self-center'>
                <a className='font-bold transition hover:text-purple-600 text-2xl' href='https://geeks-react.netlify.app/marketing/landings/course-lead/'>What is the cost of an online course</a>
                <p className='text-purple-500 text-4xl'>+</p>
            </div>
            <br />
            <hr  className='w-200 flex justify-self-center'/>
            <br />
            <div className='flex w-200 justify-self-center'>
                <h3 className='text-gray-500 text-2xl w-200 text-start'>Create beautiful website with this Geeks UI template. Get started building a site today.</h3>
            </div>
            <br />
            <div className='flex justify-between w-200 justify-self-center'>
                <a className='font-bold transition hover:text-purple-600 text-2xl' href='https://geeks-react.netlify.app/marketing/landings/course-lead/'>What do I need to take a course?</a>
                <p className='text-purple-500 text-4xl'>+</p>
            </div>
            <br />
            <hr  className='w-200 flex justify-self-center'/>
            <br />
            <div className='flex justify-between w-200 justify-self-center'>
                <a className='font-bold transition hover:text-purple-600 text-2xl' href='https://geeks-react.netlify.app/marketing/landings/course-lead/'>What do I receive for taking this course?</a>
                <p className='text-purple-500 text-4xl'>+</p>
            </div>
            <br />
            <hr  className='w-200 flex justify-self-center'/>
            <br />
            <div className='flex justify-between w-200 justify-self-center'>
                <a className='font-bold transition hover:text-purple-600 text-2xl' href='https://geeks-react.netlify.app/marketing/landings/course-lead/'>What willI get if I subscribe to this Certificate?</a>
                <p className='text-purple-500 text-4xl'>+</p>
            </div>
            <br />  
            <hr  className='w-200 flex justify-self-center'/>
        </div>
        <br />
        <button className='rounded-xl bg-white text-purple-600 border-2 border-purple-600 w-90 h-10 transition hover:bg-purple-600 hover:text-white'><a href="#">More questions? Visit the Learner Help Center</a></button>
    </div>
  )
}

export default Div
