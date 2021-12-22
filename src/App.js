import React from "react";
import { Route } from "react-router-dom";
import axios from 'axios';

import { Footer } from "./components/index";
import { Home, Cart } from "./pages";

function App() {
  const [ pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   });
  }, []);

  return (
    <div className="App">
        <Route path={"/"} render={() => <Home items={pizzas}/>} exact/>
        <Route path={"/Cart"} component={<Cart/>} exact/>
      <Footer/>
    </div>
  );
}

export default App;
