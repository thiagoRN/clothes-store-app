import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Product from '../components/Product';


const SearchList = () => {
    const [results, setResults] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    console.log(currentPage)
    const itemsPerPage = 5;
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const orderedResults = results.sort( function ordemCrescente(a, b) {
      if(a.published_at < b.published_at) {return 1}else return -1  })
    const items = orderedResults.slice(firstIndex,lastIndex);
    const pageNum = Math.ceil(results.length / itemsPerPage);
    const numbers = [...Array(pageNum + 1).keys()].slice(1)
    
    console.log(import.meta.env.VITE_USER)
    
    const prePage = ()=>{
      if(currentPage !== firstIndex){
        setCurrentPage(currentPage - 1)
      }}

    const nextPage = ()=>{
      if(currentPage !== lastIndex){
        setCurrentPage(currentPage + 1)
      }}
 
    
    
      

  return (
    <div className='m-8 '>
        <div className="w-2/5 m-auto flex flex-col items-center min-w-48">
          <SearchBar setResults={setResults}/>
        </div>

        <div className="m-8 flex flex-wrap border-primaryColor rounded-md border-4">
             {
                items.map((result)=> (
            <div key={result._id} className='flex flex-col  m-4 text-center'>
              <Link to={`/product/${result._id}`}>
                <img src={result.imageURL} alt={result.productName} className="w-52 max-h-52 mx-auto"/>
                <p href="">{result.productName}</p>
                <span>{result.productPrice}</span>
              </Link>
            </div>
                  ))
              }
        </div>

          <div className="flex overflow-x-auto sm:justify-center">
            <nav className="">
              <ul className="xs:mt-0 mt-2 inline-flex items-center -space-x-px">
                <li>
                  <button type="button" className={`ml-0 rounded-l-lg border border-gray-300 bg-background-color px-3 py-2 leading-tight text-primary-text-color enabled:hover:bg-primaryColor enabled:hover:text-gray-700  inline-flex ${currentPage == 1 ? 'cursor-not-allowed opacity-50': ''}`}
                  onClick={prePage}>
                    <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                        Previous
                      </button>
                    </li>

                      {
                        numbers.map((num , i)=>(
                          <li key={i}>
                            <button type="button" className={`w-12  cursor-not-allowed border border-gray-300 py-2 leading-tight  enabled:hover:text-primaryColor 
                            ${currentPage === num ? 'bg-primaryColor text-secondaryTextColor' : 'bg-backGroundColor text-primaryTextColor'}
                            `}>
                              {num}
                            </button>
                        </li>
                        ))
                      }

                <li>
                  <button type="button" className={`rounded-r-lg border border-gray-300 bg-background-color px-3 py-2 leading-tight text-primary-text-color  enabled:hover:bg-primaryColor  enabled:hover:text-gray-700 inline-flex ${currentPage == pageNum ? 'cursor-not-allowed opacity-50': ''}`} 
                  onClick={nextPage}>
                    Next
                    <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
           </div>
        
    </div>
  )
}



export default SearchList