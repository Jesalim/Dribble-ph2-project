// import react, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Login from "./login";
import video from "./video.mp4"


function Homepage() {


    return (
        <div>
            <video 
            autoPlay
            loop
            muted
            style={{
                position:"absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height:"100%",
                objectFit:"cover",
                transform:"translate(-50%, -50%)",
                zIndex:"-1"
            }}>
                <source src={video} type="video/mp4"/>
            </video>
            <Navbar />
            <Login />
        </div>
    )
}

export default Homepage

