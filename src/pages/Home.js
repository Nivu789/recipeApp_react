import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalContext'
import RecipeItem from '../components/RecipeItem'
import { Link } from 'react-router-dom'

function Home() {

  const {recipeList,loading,handleRandomRecipe,randomRecipe} = useContext(GlobalContext)

  useEffect(()=>{
    handleRandomRecipe()
  },[])
  
  console.log("Random Recipe in home",randomRecipe)
  if(loading) return <div>Loading...Please Wait...</div>

  return (
    <div className=''>
      {
        randomRecipe
        ?
        <div className='text-center my-10'>
          <h1 className='text-4xl font-bold'>Confused about what to prepare?</h1>
          <h1 className='text-2xl font-bold'>Let's get your tummy filled up with {randomRecipe.strMeal}</h1>
          <div className='hover:scale-95 duration-300 my-10 flex flex-col justify-end alig rounded-xl mx-auto container w-full h-[500px] bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${randomRecipe.strMealThumb})`}}>
          <Link className='text-xl font-bold bg-black text-white' to={`/details/${randomRecipe.idMeal}`}>Take me to the recipe</Link>
        </div>
        </div>
        
        :null
      }
      <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10 my-14'>
      {
        recipeList && recipeList.length > 0 ?
        recipeList.map((item)=><RecipeItem item={item}/>)
        :
        <div className='lg:text-4xl text-xl text-center text-black font-bold'>
          Not interested in this?....You can try searching for something
        </div>
      }
    </div>
    </div>
    
  )
}

export default Home
