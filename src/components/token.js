

// import React, { useState } from 'react';
// import axios from 'axios';
// import Register from './register';

// const API_URL = 'https://api.dribbble.com/v2/user?access_token='
// const ACCESS_TOKEN = '43179613111cce84d49ba4171c92163f0088573c1e513aef414a4766e41350a3';

// function Token() {
//   const [data, ] = useState(null);
//   const [showForm, setShowForm] = useState(false);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get('https://api.dribbble.com/v2/user?access_token=');
// //       setData(response.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }

// const fetchData = async () => {

// axios.post(`${API_URL} users/dribbbleuser`, {
//     headers: {
//       'Authorization': `Bearer ${ACCESS_TOKEN}`,
//       'Content-Type': 'application/json'
//     }
//    }).then(response => {
//     // handle the response
    
//    }).catch(error => {
//     // handle the error
//     })
//     .then (response => console.log(response))
  
// }

//   const handleRegister = () => {
//     setShowForm(true);
//   }

//   return (
//     <div>
//       <button onClick={fetchData}>Login</button>
//       <button onClick={handleRegister}>Register</button>
//       {showForm && <Register />}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// }

// export default Token;
