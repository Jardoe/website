import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './About';
import Books from './Books';
import Hello from './Hello';
import Home from './Home';
import Music from '../containers/Music'

class Navbar extends Component{
  render(){
    return(
      <Router>
        <div className="navbar">
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/hello">Hello</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/music">Music</Link></li>
            </ul>
            <hr/>

            <Route exact={true} path="/" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/about" component={About} />
            <Route path="/books" component={Books} />
            <Route path='/music' component={Music} />

            </div>
        </div>
    </Router>
    )
  }
}

export default Navbar
