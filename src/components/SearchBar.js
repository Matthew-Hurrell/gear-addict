import React from 'react';

const SearchBar = ({query, setQuery, gear}) => {

  return (
    <div className='bg-zinc-600 py-2 px-5'>
      <div className='container mx-auto flex items-center justify-end'>
        <form className='relative inline-block w-full md:w-80 lg:w-96' onSubmit={(event) => event.preventDefault()}>
          <input 
            placeholder={gear ? ( 'Search gear' ) : ( 'Search for a rig' ) }
            className='rounded-sm text-lg relative z-10 px-3 py-1 w-full md:w-80 lg:w-96' 
            type='text'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          ></input>
          <i className="fa-solid fa-magnifying-glass absolute right-2 z-50 top-[50%] translate-y-[-50%] text-zinc-400"></i>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
