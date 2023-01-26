import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
  