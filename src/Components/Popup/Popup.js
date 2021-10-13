import React,{useContext} from 'react';
import {AllMenuContext} from '../AllMenuContext/AllMenuContext'

function Popup({popupCloseHandler,currentDish,addToCartHandler}){
    // console.log("lets see full menus here",fullMenu)
    const allMenu= useContext(AllMenuContext)

    let dishDetails = allMenu.filter((item)=>{
        return item.strMeal==currentDish
    }).map((item)=>{
        return (
            <div className="popup-content-data">
                <div className="popup-header">
                <img src={item.strMealThumb} alt="" />
                <h5 className="popup-header-category">{item.strCategory}</h5>
                </div>
                 <h2>{item.strMeal} </h2>
                 <p>{item.strInstructions}</p>
                 <ul className="dish-ingredients flex">
                     <li>{item.strIngredient1}</li>
                     <li>{item.strIngredient2}</li>
                     <li>{item.strIngredient3}</li>
                     <li>{item.strIngredient4}</li>
                 </ul>
                     <button
                      onClick={()=>addToCartHandler(item.strMealThumb,item.strMeal)}>
                          Add to Cart</button>
                     <h5 onClick={popupCloseHandler} className="popup-close">Close</h5>  
            </div>
        )
    })

    return(
        <div className="popup">
            <div className="popup-content">
            {dishDetails}
               
            </div>

        </div>
    )
}

export default Popup;