import React from "react";

const Navbar = () => {
    
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div class="container-fluid">
          <a href="#home" className="navbar-brand">HOME TO THE WORLD'S BEST DESIGN AND CREATIVE PROFESSIONALS.💻💯</a>
          <button>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#contact-us">Contact-us</a>
        </li>
      </ul>
            
          </div>
          
        </div>
       
    </nav>
  );
};

export default Navbar;