import React from 'react'

function CardDish(props) {
    // console.log("cardish click", props)
    

    
    return (
        <li>
          <a className="carddish-class" href="javaScript:;" onClick={()=>props.showPopupHandler(props.item.strMeal)}>
          <img className="br-10" src={props.item.strMealThumb} alt=""/>
          <h5>{props.item.strMeal}</h5>
          </a>
               </li>
    )
}

export default CardDish
