import React from "react";
import { useState } from "react";
function Blog(props) {
    // let isActive = false;
    const [isActive, setIsActive] = useState(false);
    
    const clickHandle=() =>{
        setIsActive(!isActive);
        // isActive = !isActive;
    }
    return<> 
        <h1>Blog Page</h1>;
        <h2>Title:{props.title}</h2>
        <h3>Author:{props.author}</h3>
        <p>Date:{props.date.day}/{props.date.month}/{props.date.year}</p>
        {isActive == false 
        ? <button onClick={clickHandle}>Active </button>
        : <button onClick={clickHandle}>Inactive </button> }
    </>
};
export default Blog;