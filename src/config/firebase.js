import firebase from "firebase"; 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANRIxtVbiA-idPJmn9jacjPOAREe0J9l4",
    authDomain: "dribbly-react-app.firebaseapp.com",
    projectId: "dribbly-react-app",
    storageBucket: "dribbly-react-app.appspot.com",
    messagingSenderId: "450410540229",
    appId: "1:450410540229:web:84cea050cbff747e0454ac",
    measurementId: "G-CK50GD5XLS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase;