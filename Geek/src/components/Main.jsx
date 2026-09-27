import React from 'react'

const Main = () => {
  return (
    <div className='bg-sky-100'>
      <div>
        <div className='text-center p-10'>
          <p className='text-purple-600 flex justify-self-center justify-between w-59'><p className='inline'>C O U R S E</p><p className='inline'>D E S C R I P T I O N</p></p>
          <h1 className='text-5xl font-bold'>What will you learn?</h1>
          <br /> 
          <h3 className='text-gray-700 text-2xl w-240 justify-self-center flex'>Vanilla JS is a fast, lightweight, cross-platformframework for building incredible, powerful JavaScript applications.</h3>
        </div>
        <div className='flex-wrap flex justify-center p-20'>
          <div className='m-3 bg-white rounded-xl outline-2 outline-gray-300 w-163 h-65 shadow-2xl shadow-gray-400 p-7'>
            <div className='flex'>
              <img className='bg-violet-600 rounded-full' src="https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg" alt="" />
              <div className='ml-5'>
                <h1 className='text-3xl'>Introduction to JavaScript <p className='text-white bg-yellow-500 inline text-base px-2 py-1 rounded-xl'>Free</p></h1>
                <div className='flex justify-between w-80'>
                  <p className='text-s'>COURSES - 1</p>
                  <p className='text-gray-600 text-s'>6 LESSONS</p>
                  <p className='text-gray-600 text-s'>1 HOUR 12 MIN</p>
                </div>
              </div>
            </div>
            <br />
            <p className='text-gray-600'>In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare</p>
            <br />
            <a className='text-violet-600 transition hover:text-violet-800' href="https://geeks-react.netlify.app/marketing/landings/course-lead/#!">View Chapter Details +</a>
          </div>
          <div className='m-3 bg-white rounded-xl outline-2 outline-gray-300 w-163 h-65 shadow-2xl shadow-gray-400 p-7'>
            <div className='flex'>
              <img className='bg-violet-600 rounded-full' src="https://geeks-react.netlify.app/static/media/feature-icon-2.35b3b77394deb3cd7ebf78b8464fab62.svg" alt="" />
              <div className='ml-5'>
                <h1 className='text-3xl'>JavaScript Beginning</h1>
                <div className='flex justify-between w-70'>
                  <p className='text-s'>COURSES - 2</p>
                  <p className='text-gray-600 text-s'>4 LESSONS</p>
                  <p className='text-gray-600 text-s'>32 MIN</p>
                </div>
              </div>
              
            </div>
            <br />
            <p className='text-gray-600'>Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada.</p>
            <br />
            <a className='text-violet-600 transition hover:text-violet-800' href="https://geeks-react.netlify.app/marketing/landings/course-lead/#!">View Chapter Details +</a>
          </div>
          <div className='m-3 bg-white rounded-xl outline-2 outline-gray-300 w-163 h-65 shadow-2xl shadow-gray-400 p-7'>
            <div className='flex'>
              <img className='bg-violet-600 rounded-full' src="https://geeks-react.netlify.app/static/media/feature-icon-3.7cfb20a1964dfcd934da6b2267d68bc9.svg" alt="" />
              <div className='ml-5'>
                <h1 className='text-3xl'>Variables and Constants</h1>
                <div className='flex justify-between w-70'>
                  <p className='text-s'>COURSES - 3</p>
                  <p className='text-gray-600 text-s'>8 LESSONS</p>
                  <p className='text-gray-600 text-s'>10 MIN</p>
                </div>
              </div>
            </div>
            <br />
            <p className='text-gray-600'>Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs.</p>
            <br />
            <a className='text-violet-600 transition hover:text-violet-800' href="https://geeks-react.netlify.app/marketing/landings/course-lead/#!">View Chapter Details +</a>
          </div>
          <div className='m-3 bg-white rounded-xl outline-2 outline-gray-300 w-163 h-65 shadow-2xl shadow-gray-400 p-7'>
            <div className='flex'>
              <img className='bg-violet-600 rounded-full' src="https://geeks-react.netlify.app/static/media/feature-icon-4.4e54d5c3aeac9d9d151971629ba18abf.svg" alt="" />
              <div className='ml-5'>
                <h1 className='text-3xl'>Types and Operators</h1>
                <div className='flex justify-between w-70'>
                  <p className='text-s'>COURSES - 4</p>
                  <p className='text-gray-600 text-s'>10 LESSONS</p>
                  <p className='text-gray-600 text-s'>32 MIN</p>
                </div>
              </div>
            </div>
            <br />
            <p className='text-gray-600'>In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl.  </p>
            <br />
            <a className='text-violet-600 transition hover:text-violet-800' href="https://geeks-react.netlify.app/marketing/landings/course-lead/#!">View Chapter Details +</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
