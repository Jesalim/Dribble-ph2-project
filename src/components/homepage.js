import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom"
import LoginForm from "./login";

const API_URL = 'http://localhost:3000/users'

function Homepage() {
  const [error, setError] = useState(null);

  function handleSubmit (data) {
  
    return fetch(API_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new error('Failed to fetch data')
      }
      return response.json()
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="App">
      <div className="card">
        <h1 className="card-header">Welcome to NewDrib</h1>
        <center style={{marginTop: 1 +'em', fontSize: 14 + 'px'}}>
                <h4>About Us</h4>
                <p>1,569 inspira  tional designs, illustrations, and graphic elements from the world’s best designers.
Want more inspiration? Browse our search results.</p>
            </center>
        <div className="signup-holder">
          Already have an account?
           <Link to="/login">Sign in here</Link>
        </div>
        <div className="form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Full name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control half" placeholder="First name" />
            <input type="text" className="form-control half" placeholder="Last name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="E-mail" />
          </div>
          <button onSubmit={handleSubmit} className="submit-button">Sign up</button>
          <label className="terms">
            <input type="checkbox" /> I have read and agreed to the <a href="/terms-n-conditions">Terms of Service</a>
          </label>
        </div>
        <div>
            
        </div>
      </div>
    
      <Routes>
      <Route path="/login" element= {<LoginForm/>}></Route>
      <Route path="/"></Route> 
            
      </Routes>
 </div>
  );
}

export default Homepage;



