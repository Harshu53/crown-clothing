import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SingInAndSignOut from "./pages/signIn-and-signOut/signIn-and-signOut.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    // It is opening the susbscription, which identify any change on firebase, SO we are here getting the loggedIn user.
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    // It will close the susbscription.
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SingInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
