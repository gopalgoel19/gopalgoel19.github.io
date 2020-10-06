import React, { Component } from 'react';
import './App.css';
import SideBarContainer from './SideBarContainer';
import SideContainer from './SideContainer';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <SideBarContainer />
          <SideContainer />  
        </div>
      </div>
    );
  }
}

export default App;
