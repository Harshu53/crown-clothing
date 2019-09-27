import React from "react";
import FormInput from "../form-input/formInput.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";
import "./signIn.styles.scss";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have already and account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={SignInWithGoogle}>
            Sign In WIth Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
