// import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile';


function App() {
  return (
    <BrowserRouter className="App">
      <Homepage />
      <Profile/> 
    </BrowserRouter>
  );
}

export default App;
