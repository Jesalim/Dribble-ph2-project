// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Token from "./token";


// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // function validateForm() {
//   //   return email.length > 0 && password.length > 0;
//   // }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <card className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Token/>

//       </Form>

//     </card>

//   );

// }


import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // handle login logic here, for example:
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;