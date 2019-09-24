import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SingInAndSignOut from "./pages/signIn-and-signOut/signIn-and-signOut.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SingInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
