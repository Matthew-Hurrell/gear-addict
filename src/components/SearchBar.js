import React from 'react';

const SearchBar = ({query, setQuery}) => {

  return (
    <div className='bg-zinc-800 py-3 px-5'>
      <div className='container mx-auto flex items-center justify-end'>
        <form className='relative inline-block' onSubmit={(event) => event.preventDefault()}>
          <input 
            placeholder='Search for a rig' 
            className='text-lg rounded-lg relative z-10 px-3 py-1 w-72 lg:w-96' 
            type='text'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          ></input>
          <i class="fa-solid fa-magnifying-glass absolute right-2 z-50 top-[50%] translate-y-[-50%] text-zinc-400"></i>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
