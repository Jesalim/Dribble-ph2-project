import React from "react";


function Homepage() {
  return (
    <div className="App">
      <div className="card">
        <h1 className="card-header">Welcome to NewDrib</h1>
        <div className="signup-holder">
          Already have an account?
           <a href="/login">Sign in</a>
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
          <button className="submit-button">Sign up</button>
          <label className="terms">
            <input type="checkbox" /> I have read and agreed to the <a href="/terms-n-conditions">Terms of Service</a>
          </label>
        </div>
      </div>
 </div>
  );
}

export default Homepage;



