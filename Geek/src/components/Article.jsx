import React from 'react'

const Article = () => {
  return (
    <div className='bg-blue-50 p-10'>
        <div className='text-center p-20'>
          <p className='text-purple-600 flex justify-self-center justify-center w-59'><p className='inline'>T E S T I M O N A L S</p></p>
          <h1 className='text-5xl font-bold'>What our learners are saying</h1>
          <br /> 
          <h3 className='text-gray-700 text-2xl w-240 justify-self-center flex justify-center'>12+ million people are already learning on Geeks</h3>
        </div>
        <div className='flex w-full justify-between p-10 flex-wrap'>
            <div className='shadow-2xl m-10 rounded-4xl text-center w-xl'>
                <br />
                <p className='text-2xl p-10'>The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.</p>
                <img className='rounded-full w-30 border-10 border-violet-500 flex justify-self-center' src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg" alt="" />
                <div className='bg-violet-500 text-center rounded-b-4xl pt-7 p-4 border-4 border-violet-500'>
                  <h1 className='text-2xl text-white'>Barry Watson</h1>
                  <br />
                  <p className='text-gray-500'>Web Developer,UK</p>
                </div>
            </div>
            <div className='shadow-2xl m-10 rounded-4xl text-center w-xl'>
                <br />
                <p className='text-2xl p-10'>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed vel felis imperdiet, lacinia metus malesuada diamamus rutrum turpis leo, id tincidunt magna sodales.</p>
                <img className='rounded-full w-30 flex justify-self-center border-10 border-blue-500' src="https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg" alt="" />
                <div className='bg-blue-500 text-center rounded-b-4xl pt-7 p-4 border-4 border-blue-500'>
                  <h1 className='text-2xl text-white'>Linda Shenoy</h1>
                  <br />
                  <p className='text-gray-400'>Developer and Bootcamp Instructor</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article
