import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";

const HatPage = () => (
  <div>
    THis is Hat Page
  </div>
);

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;