import React from 'react'
import SearchList from './SearchList'
import About from '../components/About'
//react typed "
const Home = () => {
  return (
    <div className="">
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-primaryColor font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                      Fast, flexible financing for
                    </p>
                    {/* *Typed* */}
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-primaryColor w-[200px] rounded-md font-bold my-6 mx-auto py-3'>Get Started</button>
        </div>
        <About/>
        <SearchList/>
    </div>
  )
}

export default Home