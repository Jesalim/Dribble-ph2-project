// import react, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Login from "./login";
import Register from "./register";


// const root = ReactDOM.createRoot(document.getElementById('yourroot'));



function Homepage() {


    return (
        <div>
            <Navbar />
            <Login />
            <Register/>
        </div>
    )

    // root.render(Homepage);
}

export default Homepage

