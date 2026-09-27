import React from 'react'

const header = () => {
  return (
    <div style={{padding:'20px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid black'}}>
      <div style={{display: "flex",width:'70%',alignItems:'center',gap:'20px'}}>
      <img src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" alt="" />
      <select style={{width:'100px'}}>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Browse</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Web Development</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Design</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Mobile App</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">IT Software</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Marketing</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Music</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Life Style</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Business</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Photography</a></option>
      </select>
      <select style={{width:'100px'}}>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Landings</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Home Aboard🆕</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Home Learning Platform🆕</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Home Mentor</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Home Education</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Home Academy</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Home Courses</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Home Saas</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Lead Course</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Request Access</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Job Listing</a></option>
      </select>
      <select style={{width:'100px'}}>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Courses</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Paths</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Blog</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Career</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Portfolio</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Mentor</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Job</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Specialty</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">About</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Help Center</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Pricing</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Compare Plan</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Contact</a></option>
      </select>
      <select style={{width:'100px'}}>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Accounts</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Instructor</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Students</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Admin</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Sign In</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Sign Up</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Forgot Password</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Edit Profile</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Security</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Social Profiles</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Notifications</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Privacy Settings</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Delete Profile</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Linked Accounts</a></option>
      </select>
      <select style={{width:'140px'}}>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Documentation</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Snippets</a></option>
        <option value=""><a style={{color:'black',textDecoration:'none'}} href="#">Changelog</a></option>
      </select>
      <input style={{border:'1px solid grey',padding:'5px',borderRadius:'5px'}} type="text" placeholder='🔍  Search Courses'/>
      </div>
      <div style={{width:'23%',gap:'50px',display:'flex',alignItems:'center'}}>
        <button className='rounded-4xl bg-blue-100 p-3'>☀️</button>
        <button className='rounded-xl border-black border-2 w-70 h-10'><a href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Sign In</a></button>
        <button className='rounded-xl bg-purple-600 text-white w-70 h-10'><a href="https://geeks-react.netlify.app/marketing/landings/course-lead/">Sign Up</a></button>
      </div>
    </div>
  )
}

export default header
