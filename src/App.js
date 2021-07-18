import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Header/index'
import About from './About';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
