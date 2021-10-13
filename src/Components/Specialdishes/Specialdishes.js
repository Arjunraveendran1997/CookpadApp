import React, { useContext, useState } from 'react';
import CardDish from '../CardDish/CardDish';
import Popup from '../Popup/Popup';
import {AllMenuContext} from '../AllMenuContext/AllMenuContext';
import AddToCart from '../AddToCart/AddToCart';

function Specialdishes(props){
    // console.log(props.specialmenu)
let [showPopup, setShowPopup]=useState(false);
let [currentDish, setCurrentDish]=useState("");
let [addToCartItems, setAddToCartItems] = useState([]);



const allMenus = useContext(AllMenuContext)

function showPopupHandler(dishName){
    setShowPopup(true)
    setCurrentDish(dishName)
}





function popupCloseHandler(){
    setShowPopup(false)

}
function addToCartItemDelete(item){
//    console.log("item",item.id)
//    console.log("key",key)
 let deletedItem = addToCartItems.filter((filtereditem)=>{
     return filtereditem !== item 
})
setAddToCartItems(deletedItem)
}

function addToCartHandler(addToCartImg,addToCartTitle){
    
    setAddToCartItems(
     [
         ...addToCartItems,
        {
           "img" : addToCartImg,
           "title" : addToCartTitle
        }
     ]
   )
   
}

let maxSpecialDishes=8;
    
    let specialMenus=allMenus.map((item,index)=>{
        if(index < maxSpecialDishes){
            return(
           
               <CardDish showPopupHandler={showPopupHandler} item={item}/>
        )
        }
       
    })

    return(
        
        <section className="special-dishes">
           {showPopup && <Popup 
           popupCloseHandler={popupCloseHandler}
           currentDish={currentDish}
           addToCartHandler={addToCartHandler}
           />}
            
            <div className="container">
                <AddToCart 
                addToCartItemDelete={addToCartItemDelete}
                addToCartItems={addToCartItems}
                />
                <div className="special-dishes-content text-center">
            <h2>Our Special Dishes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis repellendus unde, 
                a ut ratione exercitationem ducimus vero labore commodi, sint recusandae perspiciatis maiores.</p>
                </div>
                <div className="special-dishes-list">
                  <ul className="flex flex-wrap"> {specialMenus}
                  </ul>
                </div>

                </div>
        </section>
    )
}

export default Specialdishes;