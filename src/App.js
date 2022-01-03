import React from "react";
import { Route } from "react-router-dom";
// import { useDispatch } from 'react-redux';

import { Footer } from "./components/index";
import { Home, Cart } from "./pages";


function App() {
  // const dispatch = useDispatch();

  return (
    <div className="App">
        <Route path={"/"} component={Home} exact/>
        <Route path={"/cart"} component={Cart} exact/>
      <Footer/>
    </div>
  );
}

export default App;
