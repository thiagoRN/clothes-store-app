import React from 'react'
import AboutImg from '../assets/1.jpg'

const About = () => {
  return (
    <div className='w-full py-16 px-4 mt-32'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={AboutImg} alt='AboutImg'/>
        
        <div className='flex flex-col justify-center mx-4'>
            <p className='text-primaryColor font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className='bg-primaryColor w-[200px] rounded-md font-bold my-6 md:mx-0 mx-auto py-3'>Get Started</button>
         </div>
        </div>
    </div>
  )
}

export default About