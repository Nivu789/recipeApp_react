import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'
import YouTube from '../components/Youtube'
import { IoIosHeart } from "react-icons/io";
import { BsFillHeartbreakFill } from "react-icons/bs";

function Details() {

  const {id} = useParams()
  const {recipeDetails,setRecipeDetails,handleFavourites,favouriteList,handleRemoveFromFavourites} = useContext(GlobalContext)
  const [ingredients,setIngredients] = useState([])
  const [videoId,setVideoId] = useState(null)

  
 
  console.log(id)
  useEffect(()=>{
    async function getRecipeDetails(){
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await res.json()
      if(data){
        // console.log(data)
        const url = new URL(data.meals[0].strYoutube);
        const searchParams = new URLSearchParams(url.search);
        const videoId = searchParams.get('v');
        console.log("Video id",videoId)
        setVideoId(videoId)

        setRecipeDetails(data.meals[0])
        const filteredData = Object.fromEntries(
          Object.entries(data.meals[0]).filter(([key, value]) => value !== null && value !== "")
        );
        console.log("FilteredData",filteredData)
        const ingredientMeasureArray = [];
        for (let i = 1; i <= 20; i++) {
        const ingredient = filteredData[`strIngredient${i}`];
        const measure = filteredData[`strMeasure${i}`];
        if (ingredient && measure) {
          ingredientMeasureArray.push({ ingredient, measure });
        }
      }
      setIngredients(ingredientMeasureArray)
    }
    
    // Filter out keys with null or empty string values
    
  }
  
  getRecipeDetails()
},[])

  console.log("Increditen",ingredients)

  
  return (
    <div>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 rounded-xl group my-14 flex items-center justify-center'>
          <img src={recipeDetails.strMealThumb} alt="Image" 
          className='w-full h-full object-cover block group-hover:scale-105 duration-300 relative'/>
          {
    favouriteList.findIndex((item) => item.idMeal === recipeDetails.idMeal) === -1 ?
    <IoIosHeart
      className='absolute w-20 h-16 text-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
      onClick={() => handleFavourites(recipeDetails)}
    />
    
    : <BsFillHeartbreakFill className='absolute w-20 h-16 text-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
    onClick={()=>handleRemoveFromFavourites(recipeDetails)}/>
  }
          
        </div>
        
      </div>
      <div className='flex justify-start flex-col'>
        <h1 className='text-2xl font-bold my-14 text-center'>{recipeDetails.strMeal}</h1>
        
        <h1 className='text-xl font-bold'>Ingredients</h1>
        <ul className='my-3 flex flex-col flex-wrap h-56 w-72'>
        { recipeDetails?
          Object.values(ingredients).map((value, index) => (
            <li key={index} className='text-lg list-disc mx-4'>{value.ingredient}:{value.measure}</li>
          )) 
          :
          <div>Something went wrong</div>
        }
        </ul>
      </div>
      <div className='-my-12 border-red-600 border-solid border-8 h-fit mb-8'>
        {videoId ? <YouTube id={videoId}/>: ""}
      </div>
      <div className='-my-12 mb-8 flex flex-col gap-5'>
        <h1 className='text-2xl'>How to cook?</h1>
        {recipeDetails.strInstructions}
        {recipeDetails.strSource?<h1>Know more @<a href={recipeDetails.strSource}>{recipeDetails.strSource}</a></h1>:""}
      </div>
        
    </div>
    
    </div>
    
  )
}

export default Details

