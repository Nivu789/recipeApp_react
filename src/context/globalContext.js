import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const [search,setSearch] = useState('')
    const [loading,setLoading] = useState(false)
    const [recipeList,setRecipeList] = useState([])
    const [recipeDetails,setRecipeDetails] = useState([])

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const res =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
            const data = await res.json()
            
            if(data){
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
    
    return <GlobalContext.Provider value={{search,setSearch,handleSubmit,loading,recipeList,recipeDetails,setRecipeDetails}}>{children}</GlobalContext.Provider>
}