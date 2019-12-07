import React, { Component } from 'react';
import './App.css';
import NavbarComponent from "./navbar/NavbarComponent";
import BodyComponent from "./body/BodyComponent";

class App extends Component {
  render() {
    return (
        <div>
          <NavbarComponent>

          </NavbarComponent>
          <BodyComponent></BodyComponent>

        </div>

    );
  }

  getMenu(mssg) {
    console.log(mssg)
  }
}

export default App;
