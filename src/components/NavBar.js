import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'

function NavBar() {

  const {search,setSearch,handleSubmit} = useContext(GlobalContext)
  console.log(search)

  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
      <h2 className='text-2xl fond-semibold'><NavLink to={'/'}>Recipe App</NavLink></h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='search' placeholder='Search Items'
        className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200'
        value={search} onChange={(e)=>setSearch(e.target.value)}
        />
      </form>
      <ul className='flex gap-5'>
        <li>
          <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/favourites'} className='text-black hover:text-gray-700 duration-300'>Favoutites</NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default NavBar
