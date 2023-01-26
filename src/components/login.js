
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

const API_URL = 'https://api.dribbble.com/v2/user?access_token='
const ACCESS_TOKEN = '43179613111cce84d49ba4171c92163f0088573c1e513aef414a4766e41350a3'

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // handle login logic here, for example:
      const res = await fetch(API_URL + ACCESS_TOKEN, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json', 
                  'authorization': 'Bearer ' + ACCESS_TOKEN}
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      // handle successful login
    } catch (err) {
      setError(err.message);
    }
  };

  // useEffect(() => {
  //   // check if user is logged in
  //   if (loggedIn) {
  //     // redirect to profile
  //     window.location.href = '/profile';
  //   }
  // }, [loggedIn]);

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
      <button className="submit-button" type="submit" onClick={handleSubmit}>Login</button>
    </form>
    </div>
    </div>
    </div>
  );
}

export default LoginForm;