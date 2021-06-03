import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
// import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

import DetailUserContainer from "./containers/DetailUserContainer";


export default class App extends Component {
  // state = {
  //   title: "User Data",
  // };
  
  render() {
    return (
      <div>
        <NavbarComponent />
        {/* <JumbotronComponent title={this.state.title} /> */}
        <BrowserRouter>
          <Route path="/" exact >
            <HomeContainer/>
          </Route>
         
          <Route path="/detail/:id" component={DetailUserContainer}/>
          
         
    
        </BrowserRouter>
      </div>
    );
  }
}
