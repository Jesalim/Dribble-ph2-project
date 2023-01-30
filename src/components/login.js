import React, { useState } from 'react';
import Profile from './profile';
import { Routes, Route, Link } from "react-router-dom"

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

// const API_URL = 'https://api.dribbble.com/v2/user?access_token='
const API_URL = 'http://localhost:3000/users'
// const ACCESS_TOKEN = '43179613111cce84d49ba4171c92163f0088573c1e513aef414a4766e41350a3'

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
    <h2 className="card-header">Login Here</h2>
    <div className="form-group">
      <form onSubmit={handleSubmit}>
      <label className="form-control" htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder="E-mail"
        onChange={e => setEmail(e.target.value)}
      />
      
    
      <label className="form-control" htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      
      <br />
      {error && <p>{error}</p>}
      <Link type="submit" to='./profile' onClick={handleSubmit}>Login</Link>
    </form>
    </div>
    </div>
    <Routes>
      <Route exact path="/profile" element = {Profile}></Route>
    </Routes>
    </div>
  );
}

export default LoginForm;
