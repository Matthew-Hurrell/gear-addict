import React from 'react';

const SearchBar = ({ query, setQuery, gear }) => {

  return (
    <div className='bg-zinc-800 py-2 px-5'>
      <div className='container mx-auto flex items-center justify-end'>
        <form className='relative inline-block w-full md:w-96 xl:w-[530px]' onSubmit={(event) => event.preventDefault()}>

          {/* Search Bar Input */}
          <input
            placeholder={gear ? ('Search gear') : ('Search for a rig')}
            className='rounded-sm text-lg relative z-10 px-3 py-1 w-full md:w-full'
            type='text'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          ></input>

          {/* Search Icon */}
          <i className="fa-solid fa-magnifying-glass absolute right-2 z-50 top-[50%] translate-y-[-50%] text-zinc-400"></i>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
