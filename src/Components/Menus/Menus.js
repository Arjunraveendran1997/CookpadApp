import React from 'react';
import './Menu.scss'
import Specialdishes from '../Specialdishes/Specialdishes';
import Hero from '../Hero/Hero';
import FilteredDishes from '../FilteredDishes/FilteredDishes';
import Header from '../Header/Header';
import {AllMenus} from '../AllMenuContext/AllMenuContext';




function Menus() {
   
   
    // console.log("The menus are", menus)

    

    return(
        <div>
            <Header/>
        <Hero/>
        <AllMenus>
           <Specialdishes />
        
            <FilteredDishes />
           
       </AllMenus>

        </div>

    )
}

export default Menus;