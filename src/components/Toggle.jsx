import React from 'react'
import useLocalStorage from 'use-local-storage'


const Toggle = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark",false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    ( e == true ? setDarkMode() : setLightMode())
    setIsDark(!e)
  };
  
  // absolute bottom-5 right-5

  return (
    <div className='ml-3'onClick={()=> toggleTheme(isDark)}>
      {isDark ? <img src="https://www.svgrepo.com/show/440502/moon-full-moon.svg" alt="" className='w-16'/>   : <img src="https://www.svgrepo.com/show/402758/sun.svg" alt=""  className='w-16'/> } 
    </div>
  )
}

export default Toggle