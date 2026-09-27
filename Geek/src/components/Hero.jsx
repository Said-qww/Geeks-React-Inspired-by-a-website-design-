import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className='p-25 flex'>
      <div>
        <h1 className='text-7xl w-200'>Become a Vanilla JavaScript Developer</h1>
        <br />
        <h3 className='text-gray-500 w-200 text-2xl'>In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.</h3>
        <br />
        <p className='text-gray-700'>🕑 4 Hours</p>
        <br />
        <p className='text-gray-700'>🎥 12 Videos</p>
        <br />
        <p className='text-gray-700'>👥 10,324+ Endrolled</p>
        <br />
        <button className='text-white bg-green-600 p-3 rounded-xl'>Watch Preview</button>
      </div>
      <div className='border-gray-300 border-2 w-500 h-120 shadow-2xl rounded-2xl p-8'>
        <h1 className='text-2xl font-bold'>Create Free Account</h1>
        <br />
        <button className='bg-gray-100 p-3 rounded-2xl ml-10 w-27 transition hover:bg-gray-300'>Google</button>
        <button className='bg-gray-100 p-3 rounded-2xl ml-10 w-27 transition hover:bg-gray-300'>Twitter</button>
        <button className='bg-gray-100 p-3 rounded-2xl ml-10 w-27 transition hover:bg-gray-300'>Facebook</button>
        <br /><br />
        <div className='flex items-center justify-center gap-2'>
        <hr className='w-50'/> 
        <p className='inline'>OR</p>
        <hr className='w-50'/>
        </div>
        <br />
      <input className='focus:outline-blue-500 transition' style={{border:'1px solid grey',padding:'5px',borderRadius:'5px',width: '100%'}} type="email" placeholder='Email'/>
      <br />
      <br />
      <input className='focus:outline-blue-500 transition' style={{border:'1px solid grey',padding:'5px',borderRadius:'5px',width: '100%'}} type="password" placeholder='Password'/>
      <br />
      <br />
      <button className='rounded-xl bg-purple-600 text-white w-full h-10 justify-center'><a href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Start Courses for Free</a></button>
      <br />
      <br />
      <hr className='p-0 m-0 w-full'/>
      <br />
      <p>By continuing you accept the <a className='font-bold transition hover:text-purple-600' href='https://geeks-react.netlify.app/marketing/landings/course-lead/'>Terms of Use</a>, <a className='font-bold transition hover:text-purple-600' href='https://geeks-react.netlify.app/marketing/landings/course-lead/'>Privacy Policy</a>, and <a className='font-bold transition hover:text-purple-600' href='https://geeks-react.netlify.app/marketing/landings/course-lead/'>Data Policy</a></p>
      </div>
      <br />
    </div>
    <br /><br /><br />
    <div className='justify-center flex gap-30'>
        <p>✅Shareable Certificate</p>
        <p>✅Flexible Deadlines</p>
        <p>✅100% Online Courses</p>
        <p>✅Approx.24 hours</p>
      </div>
    </div>
  )
}

export default Hero
