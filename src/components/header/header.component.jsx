import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import CartIcon from "../carticon/cart-icon.component";
import CartDropDown from "../cartDropDown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Signout
        </div>
      ) : (
        <Link className="option" to="/signin">
          SignIn
        </Link>
      )}
      <CartIcon />
    </div>
    <CartDropDown />
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
