import React, { Component } from 'react'

const Pagination = (postsPerPage , totalPosts) => {
    const pageNumber = [] ;

    for(let i = 1 ; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i);
    }
    console.log('====================================');
    console.log(pageNumber);
    console.log('====================================');
    return (
        <h2>DSKDSKDS</h2>
    //    <nav>
    //        <ul className="pagination"> 
    //             {pageNumber.map((number)=>{
    //                 return (<li key={number} className="page-item">
    //                     <a href="#ds" className="page-link">
    //                         {number}
    //                     </a>
    //                 </li>)
    //             })}
    //        </ul>
    //    </nav>
        
        )
}


        
    

export default Pagination;