import React from "react";
// import { Outlet,Link } from "react-router-dom";

const Layout = () => {
    return(
        <>
        <ul>
            <li><a href="/">Home</a></li>  
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/form">Form</a></li>
            {/* instead of link we are using anchor tag to get the layout of link follow below */}
            {/* <li><Link to="/">UseEffect Hook</Link></li> */}
        </ul>
        {/* as such we have not used the link we are not using outlet */}
        {/* <Outlet/>  */}
        </>
    )
}
export default Layout; 