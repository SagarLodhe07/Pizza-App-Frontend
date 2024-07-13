import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignUpPresentation";

function SignUp() {
  const [signUpState, setSignupState] = useState({
    firstname: "",
    email: "",
    password: "",
    mobilenumber: "",
  });

  function handlerUserInput(event) {
    const { name, value } = event.target;
    setSignupState({
      ...signUpState,
      [name]: value,
    });
  }
  function handleSignUp(e) {
    e.preventDefault();
    // console.log(signUpState);

    if (
      !signUpState.email ||
      !signUpState.firstname ||
      !signUpState.mobilenumber ||
      !signUpState.password
    ) {
      // For Pop up alert on window
      toast.error("please fill all input");
      return;
    }

    if (signUpState.firstname.length < 3 || signUpState.firstname.length > 20) {
      toast.error(
        "First Name should be atleast 3 charcter long and maximum 20 characters long"
      );
    }
    if (!signUpState.email.includes("@") || !signUpState.email.includes(".")) {
      toast.error("Invalid email");
    }
    if (
      signUpState.mobilenumber.length < 10 ||
      signUpState.mobilenumber.length > 12
    ) {
      toast.error("Mobile Number should be between 10-12 digits");
    }
  }

  return (
    <SignUpPresentation
      handleSignUp={handleSignUp}
      handlerUserInput={handlerUserInput}
    />
  );
}

export default SignUp;
