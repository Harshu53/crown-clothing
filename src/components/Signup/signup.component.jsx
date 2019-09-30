import React from "react";
import FormInput from "../form-input/formInput.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";
import formInput from "../form-input/formInput.component";

export class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I don not have an account</h1>
        <span>Signup with your username and password</span>
        <form>
          <formInput
            input="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <formInput
            input="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <formInput
            input="text"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <formInput
            input="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
