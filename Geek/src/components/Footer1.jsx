import React from 'react'

const Footer1 = () => {
  return (
    <div className="bg-[url('https://remire.co/wp-content/uploads/2024/05/stacks.svg')] bg-contain bg-center h-70 w-full border-4 border-solid border-gray-200">
        <div className='bg-white w-200 h-auto justify-self-center text-center'>
            <div className='text-center h-auto p-6'>
                <h1 className='text-4xl font-bold'>Join more than 1 million learners worldwide</h1>
                <br /> 
                <h3 className='text-gray-500 text-2xl w-200 justify-self-center flex justify-center'>Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier.</h3>
                <br />
                <button className='rounded-xl bg-purple-600 text-white w-70 h-10 m-2'><a href="">Start Learning for Free</a></button>
                <button className='rounded-xl bg-blue-400 text-white w-70 h-10 m-2'><a href="">Geeks for Business</a></button>
            </div>
        </div>
        <br /><br /><br />
    </div>

  )
}

export default Footer1
