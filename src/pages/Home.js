import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import RecipeItem from '../components/RecipeItem'

function Home() {

  const {recipeList,loading} = useContext(GlobalContext)
  
  if(loading) return <div>Loading...Please Wait...</div>

  return (

    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        recipeList && recipeList.length > 0 ?
        recipeList.map((item)=><RecipeItem item={item}/>)
        :
        <div className='lg:text-4xl text-xl text-center text-black font-bold'>
          No recipes to show, try searching something
        </div>
      }
    </div>
  )
}

export default Home
