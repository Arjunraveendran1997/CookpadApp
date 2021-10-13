import React from 'react'

function Pagination(props) {
    // console.log("items in pagination",props.searcheddishes)
    let numberOfPages=[]
    for(let i=1; i<= Math.ceil(props.searcheddishes.length / props.itemsPerPage); i++){
        numberOfPages.push(i)
    }

    function showNextPageHandler(event){
        props.setCurrentPage(event.target.id)
    }

    let pages= numberOfPages.map((pageNumber)=>{
        return(
            <li id={pageNumber} onClick={showNextPageHandler}>{pageNumber}</li>
        )
    })

    return (
        <section>
        <ul className="pagination">
           {pages}
        </ul>
        </section>
    )
}

export default Pagination
