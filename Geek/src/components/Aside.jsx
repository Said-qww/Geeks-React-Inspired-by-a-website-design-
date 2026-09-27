import React from 'react'

const Aside = () => {
  return (
    <div>
      <div className='p-20'>
        <div className='flex justify-center g-20'>
            <div className='w-auto text-startx'>
                <p className='text-purple-600 font-bold flex justify-self-start justify-between w-52'><p className='inline'>Y O U R</p><p className='inline'>I N S T R U C T O R</p></p>
                <h1 className='text-5xl w-153'>Hi, I’m <p className='text-violet-600 inline'>James Davies</p>, will be taking you through lessons.</h1>
                <br />
                <p className='text-gray-600 w-120 text-2xl'>Create beautiful website with this Geeks UI template. Get started building a site today.</p>
                <br />
                <hr className='text-gray-300 w-130'/>
                <br />
                <div className='flex justify-between w-120'>
                    <div>
                        <h1 className='text-3xl font-bold'>45</h1>
                        <p className='text-gray-600'>Lessons</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>10,500+</h1>
                        <p className='text-gray-600'>Students</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>12+</h1>
                            <p className='text-gray-600'>Learning Hours</p>
                    </div>
                </div>
            </div>
            <img src="https://geeks-react.netlify.app/static/media/instructor-img.1ed9cc40ee4734876e12.png" alt="" />
        </div>
        <div>
          <br /><br /><br />
          <p className='text-purple-600 flex justify-self-center justify-between w-120'><p className='inline'>T R U S T E D</p><p className='inline'>B Y</p><p className='inline'>T O P</p><p className='inline'>-</p><p className='inline'>T I E R</p><p className='inline'>P R O D U C T</p><p className='inline'>C O M P A N I E S</p></p>
          <br />
          <br />
          <div className='flex justify-between'>
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-stripe.6b556d06bcc209f1c051bbdb399131f0.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-stripe.6b556d06bcc209f1c051bbdb399131f0.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-discord.2e0bae69d24feccf4efdd3f80746031b.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-intercom.870602b99ded665ecf0c2d5b2ffeb8c4.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-intercom.870602b99ded665ecf0c2d5b2ffeb8c4.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-netflix.a47db6eaf2de7327844f27eb230da39c.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
