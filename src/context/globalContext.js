import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const [search,setSearch] = useState('')
    const [loading,setLoading] = useState(false)
    const [recipeList,setRecipeList] = useState([])
    const [recipeDetails,setRecipeDetails] = useState([])
    const [favouriteList,setFavouriteList] = useState([])

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const res =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
            const data = await res.json()
            
            if(data){
                console.log(data)
                setRecipeList(data.meals)
                setLoading(false)
                setSearch('')
            } 
        } catch (error) {
            console.log(error.message)
            setLoading(false)
            setSearch('')
        }
        
    }

    function handleFavourites(getItemDetail){
        let cpyFavourites = [...favouriteList]
        let index = cpyFavourites.findIndex((item)=>item.idMeal===getItemDetail.idMeal)
        if(index===-1){
            cpyFavourites.push(getItemDetail)
            console.log(cpyFavourites)
            console.log("Pushed")
        }
        setFavouriteList(cpyFavourites)
    }

    function handleRemoveFromFavourites(getItemDetail){
        let cpyFavourites = [...favouriteList]
        let index = cpyFavourites.findIndex((item)=>item.idMeal===getItemDetail.idMeal)
        if(index!==-1){
            cpyFavourites.splice(index,1)
            console.log(cpyFavourites)
            console.log("Removed")
        }
        setFavouriteList(cpyFavourites)
    }
    
    return <GlobalContext.Provider value={{search,setSearch,handleSubmit,loading,recipeList,recipeDetails,setRecipeDetails,handleFavourites,favouriteList,handleRemoveFromFavourites}}>{children}</GlobalContext.Provider>
}