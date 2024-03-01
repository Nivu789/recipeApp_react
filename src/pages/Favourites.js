import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import { Link } from 'react-router-dom'


function Favourites() {

  const {favouriteList} = useContext(GlobalContext)


  return (
    <div>
      {
        favouriteList && favouriteList.length>0
        ?
        favouriteList.map((item)=>{
          return <div className='w-full h-fit container rounded-xl shadow-xl mx-auto flex p-7 space-x-48'>
            <div className='w-56 h-56 rounded-sm border-teal-950'>
                <img className="rounded-xl" src={item.strMealThumb} alt="" />
            </div>
            <div className='flex flex-col justify-between'>
              <h1 className='text-bold text-4xl'>{item.strMeal}</h1>
              <h1 className='text-bold text-xl'>Category : {item.strCategory}</h1>
              <h1 className='text-bold text-xl'>Area : {item.strArea}</h1>
              <Link to={`/details/${item.idMeal}`} className='bg-black text-white border text-sm p-3 rounded-lg uppercase text-center w-44'>Read Details</Link>
            </div>
          </div>
        })
        :
        <div className='lg:text-4xl text-xl text-center text-black font-bold'>Nothing in favourites</div>
}
    </div>
  )
}

export default Favourites
