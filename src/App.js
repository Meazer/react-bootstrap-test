import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import News from './components/news';
import CustomNavbar from './components/customNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <CustomNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/news' component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
