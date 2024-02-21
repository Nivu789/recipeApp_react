import React from 'react'
import { Link } from 'react-router-dom'

function RecipeItem({item}) {
  return (
    
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2
     rounded-2xl border-white'>
      <div className='h-40 flex justify-end overflow-hidden items-center rounded-xl'>
            <img src={item.strMealThumb} alt="" className='block w-full'/>
      </div>
      <div>
        <span className='text-black text-l truncate font-bold'>{item.strMeal}</span>
      </div>
      {/* <div>
        <span className='text-sm font-bold text-green-500 font-small'>{item.missedIngredientCount} more ingredients to get this ready!</span>
      </div> */}
      
      <Link className=' block bg-black text-white border text-sm p-3 px-8 rounded-lg uppercase' to={`/details/${item.idMeal}`}>Get Recipe</Link>
      
    </div>
    
    
  )
}

export default RecipeItem
