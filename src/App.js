import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

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
      <Route path="/hats" component={HatPage} />
    </Switch>
    </div>
  );
}

export default App;
