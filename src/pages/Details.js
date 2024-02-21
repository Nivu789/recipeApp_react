import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'
import Ingredients from '../components/Ingredients'

function Details() {

  const {id} = useParams()
  const {recipeDetails,setRecipeDetails} = useContext(GlobalContext)

  const keysToExtract = ["strIngredient1", "strIngredient2","strIngredient3","strIngredient4","strIngredient5","strIngredient6",
                        "strIngredient7", "strIngredient8","strIngredient9","strIngredient10","strIngredient11","strIngredient12",
                        "strIngredient13", "strIngredient14","strIngredient15","strIngredient16","strIngredient17","strIngredient18",
                        "strIngredient19", "strIngredient20"]

  const slicedData = {};

  keysToExtract.forEach(key => {
    if (recipeDetails.hasOwnProperty(key)&&recipeDetails.hasOwnProperty(key)!=="") {
      slicedData[key] = recipeDetails[key];
    }
  });


  console.log(id)
  useEffect(()=>{
    async function getRecipeDetails(){
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await res.json()
      if(data){
        console.log(data.meals[0].strMealThumb)
        setRecipeDetails(data.meals[0])
      }
    }

    getRecipeDetails()
  },[])
  
  return (
    <div>
      <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-xl group my-14'>
          <img src={recipeDetails.strMealThumb} alt="Image" 
          className='w-full h-full object-cover block group-hover:scale-105 duration-300'/>
        </div>
      </div>
      <div className='flex flex-col gap-3 h-10'>
        <h1 className='text-xl font-bold'>{recipeDetails.strMeal}</h1>
        
        <div className='grid grid-cols-3 my-3'>
        {
          Object.keys(slicedData).map((item)=>{
            return <div className='bg-yellow-500 m-2 rounded-xl p-2'>
                  {slicedData[item]}
                    </div>
              
          })
        }
      </div>
      </div>
        <div>
          
        </div>
    </div>
    
    </div>
    
  )
}

export default Details

