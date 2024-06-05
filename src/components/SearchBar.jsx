import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:5000/all-products")
    .then(res => res.json())
    .then(data => {setResults(data),setData(data)});
    
    
      
  }, [])
  
  
  const filterData = (value) => {
   
    const results = data.filter((item) => {
            return (
              value&&
              item &&
              item.productName &&
              item.productName.toLowerCase().includes(value.toLowerCase()) 
              ||
              item.color &&
              item.color.toLowerCase().includes(value.toLowerCase()) 
            );
          });
          results == '' ? setResults(data) : setResults(results)
  };

  const handleChange = (value) => {
    setInput(value);
    filterData(value);
  };
  
  return (
    <div className='bg-white text-slate-950 flex w-full h-10 rounded-xl pl-4  shadow-xl justify-center items-center'>
        <FaSearch className='text-blue-800' id="search-icon" />
      
      <input className='h-full w-full bg-transparent  ml-1 rounded-none pl-2         focus:outline-none ' 
        placeholder='Pesquisar' 
        value={input}
        onChange={(e) => handleChange(e.target.value)}/> 
    </div>
  )
}

export default SearchBar