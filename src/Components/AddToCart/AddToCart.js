import React,{useState} from 'react'

function AddToCart({addToCartItems,addToCartItemDelete}) {
let [arrowKey, setArrowKey]=useState(false)

    function cartUpHandler(){
        setArrowKey(true)
        console.log("up arrow pressed",arrowKey)
    }

    function cartDownHandler(){
       
        setArrowKey(false)
        console.log("down arrow pressed",arrowKey)
    }  

let addToCartResults = addToCartItems.map((item)=>{
    // console.log("index and key of item",item,key)
    
    return (
        <div>
             
             <img src={item.img} alt="" />
             <h6>{item.title}</h6>
             <h3 className="close-item" onClick={()=>addToCartItemDelete(item)} >X</h3>
             
        </div>
        
    )
    
})

    return (
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
            <h3  className="add-to-cart-title">Your Cart</h3>  
            <span class="up-arrow"> 
            <i  onClick={cartUpHandler}  class="fas fa-arrow-circle-up"></i> 
            </span>
            <span class="down-arrow">
            <i onClick={cartDownHandler} class="fas fa-arrow-circle-down"></i>
            </span>
            {!arrowKey? addToCartResults :
            
                 null
             
            }
              {/* {addToCartResults}  */}
            </div>
            
        </div>
    )
}
export default AddToCart
