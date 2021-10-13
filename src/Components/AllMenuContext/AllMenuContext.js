import React,{useState,useEffect} from 'react';
import Loader from '../Loader/Loader';


export const AllMenuContext=React.createContext()

export const AllMenus=(props)=>{
    let [menus,setMenu]=useState([]);
    let [loading, setLoading]=useState(false);

    async function getallthemenus(){
        setLoading(true)
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
        setLoading(false)
    }

    useEffect(()=>{
        getallthemenus();   
     }, [])
   
     return (
        <AllMenuContext.Provider value={menus}>
             {!loading ? props.children : <Loader/>}
            
        </AllMenuContext.Provider>
    )
}

