import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from 'react-redux';

import Routes from "./Routes";
import Header from './page/layout/Header';
import Footer from './page/layout/Footer';
import store from './store';

import {setAuthToken} from './helper/utils';
import { setCurrentUser } from './actions/authAction';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  // store.dispatch(getCurrentProfile());
}

class App extends Component {
  
  render() {
   
    return (
      <Provider store = { store }>
        <Router>
          <div className="flyout">
            <Header/>
            <main style={{ marginTop: "4rem" }}>
              <Routes />
            </main>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
