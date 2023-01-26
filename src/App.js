// import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import LoginForm from './components/login';
import Profile from './components/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
