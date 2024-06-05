import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-950  shadow ">
    <div className="w-full max-w-screen-xl mx-auto  p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
               
                <li>
                    <a href="https://thiagoramos-port.firebaseapp.com" target="_blank" className="hover:underline me-4 md:me-6">Portfolio</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGnUzVtU-NEbAAAAY-CqCYoKlWwGMdC59UcK1kUIA20mCoqNX96AWSeTARKI2qZue-dlcZW8-ZLiAiF6BM1YkWtAPBzQQ895xA2u1bU_hpghPlRr_oFjGQ-1McTsgNwOzSLIY0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fthiago-ramos-1696a81ba%2F" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>

                <li>
                    <a href="https://github.com/thiagoRN" target="_blank" className="hover:underline me-4 md:me-6">GitHub</a>
                </li>

                <li>
                    <a href="#" className="hover:underline">Contato</a>
                </li>

                
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer