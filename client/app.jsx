
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux"

import MainContainer from "./components/mainContainer.jsx";
import store from "./store"

render(<Provider store={store}>
    <MainContainer />
  </Provider>, document.getElementById('maincontainer'));
