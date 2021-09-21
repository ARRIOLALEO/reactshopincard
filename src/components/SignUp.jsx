import React, { useCallBack } from "react";
import { withRouter } from "react-router-dom";
import app from "../base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallBack(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit"> Sign Up </button>
      </form>
    </>
  );
};

export default SignUp;
