import React,{useContext, useState,useEffect} from 'react';
import CardDish from '../CardDish/CardDish';
import Pagination from '../Pagination/Pagination';
import Popup from '../Popup/Popup';
import {AllMenuContext} from '../AllMenuContext/AllMenuContext'
import AddToCart from '../AddToCart/AddToCart';

function FilteredDishes(props){
    // console.log("props",props.allmenuCategory)
    // console.log("single dish",props.singleDish)

    let [menuCategory,setMenuCategory]=useState([]);
    let [singleDish, setSingleDish]=useState([]);
    let [searcheddishes, setSearcheddishes] = useState([]);
    let [activeDish,setActiveDish]=useState("Beef");
    let [currentPage, setCurrentPage]=useState(1);
    let [itemsPerPage, setItemsPerPage]=useState(4);
    let [showPopup, setShowPopup]=useState(false);
    let [currentDish, setCurrentDish]=useState("");
    let [addToCartItems, setAddToCartItems] = useState([]);
    let indexOfLastDish = currentPage * itemsPerPage;

    // 1*4=4
    // 2*4=8
    // 3*4=12
    let indexOfFirstDish = indexOfLastDish-itemsPerPage;
    // 4-4=0
    // 8-4=4
    // 12-4=8

    let showTheseDishesNow= searcheddishes.slice(indexOfFirstDish , indexOfLastDish )
   
    let maxItem=4
    

   
    async function getallthecategory(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL)
        let categoryData = await response.json()
        setMenuCategory(categoryData.categories)
        
    }

    console.log("menu category",menuCategory)
   
    async function getOnlyOneDish(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response = await fetch(API_URL)
        let singleDishData = await response.json()
        setSingleDish(singleDishData.meals)
    }


    useEffect(()=>{
       getallthecategory();
       getOnlyOneDish();
      
       
    }, [])




    
   
      const allMenus=useContext(AllMenuContext);

      function addToCartItemDelete(item){
          let deletedItem = addToCartItems.filter((filteredItem)=>{
              return filteredItem !== item
             
          })
          setAddToCartItems(deletedItem)
      }

    function showPopupHandler(dishName){
        setShowPopup(true)
        setCurrentDish(dishName)
    }

    function popupCloseHandler(){
        setShowPopup(false)
    }
    
    function addToCartHandler(addToCartImg,addToCartTtitle){
        setAddToCartItems(
            [
                ...addToCartItems,
                {
                    "img": addToCartImg,
                    "title":addToCartTtitle
                }
            ]
        )
    }

   
    let singleDishItem= singleDish.map((item, index)=>{
        console.log("all menus from single dishes",props.singleDish)
        if(index < maxItem) {
            return (
            
               <CardDish showPopupHandler={showPopupHandler} item={item}/>
            
        )
        }
        

    })
   
    function showcategorylist(category){
       
        
        setSingleDish([]);
        setActiveDish(category)
       
        
    // alert("clisked dish is"+category)
        let filtereddishes = allMenus.filter((item)=>{
            // console.log("all menus from filtered dishes",props.allmenus)
            return item.strCategory===category
            }).map((item)=>{
           return(
              <CardDish showPopupHandler={showPopupHandler} item={item}/>
           )
       })
    //    console.log("mapped categories are",filtereddishes)
       setSearcheddishes(filtereddishes);
      
       
    }

   
   

   let allcategories= menuCategory.map((categoryItem)=>{
        return(
                <li className={categoryItem.strCategory==activeDish ? "active": ""} onClick={()=>{showcategorylist(categoryItem.strCategory)}}>{categoryItem.strCategory}</li>
                
        )
        
    })
 
    return(
        <div className="filtered-dishes">
             {/* <AddToCart 
            addToCartItems={addToCartItems} 
            addToCartItemDelete={addToCartItemDelete}
            />  */}
           
           {showPopup && <Popup
            popupCloseHandler={popupCloseHandler}
            addToCartHandler={addToCartHandler}
            currentDish={currentDish}
            fullMenu={props.allmenus}
            fullMenu={props.singleDish}
            />}
            
            <div className="container">
                <div className="text-center">
                <h2>Choose your Dishes.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut enim quaerat explicabo sunt vero iure, nobis neque recusandae temporibus.</p>
                </div>
                <div className="filtered-dishes">
                    <ul>
                        <li>{allcategories}</li>
                    </ul>
                </div>
                <div className= "filtered-dishes-results">
                    <ul className="flex flex-wrap">
                       {singleDishItem}
                       
                       {
                         singleDishItem !=0 || searcheddishes.length !=0 ? showTheseDishesNow :  
                        <div  className="alert">
                        <h3>Sorry.. Currently the dish is not available.We will update soon.</h3>
                        <h4>Please choose another Menu</h4>
                        
                     </div>
                     
                         }          
                    </ul>
                </div>
                <Pagination 
                searcheddishes={searcheddishes}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
            </div>

        </div>
    )
}

export default FilteredDishes;