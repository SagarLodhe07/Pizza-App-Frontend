import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignUpPresentation";
import { useDispatch } from "react-redux";
import { createAccount } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [signUpState, setSignupState] = useState({
    firstName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  function handlerUserInput(event) {
    const { name, value } = event.target;
    setSignupState({
      ...signUpState,
      [name]: value,
    });
  }
   async function handleSignUp(e) {
    e.preventDefault();
    // console.log(signUpState);

    if (
      !signUpState.email ||
      !signUpState.firstName ||
      !signUpState.mobileNumber ||
      !signUpState.password
    ) {
      // For Pop up alert on window
      toast.error("please fill all input");
      return;
    }

    if (signUpState.firstName.length < 3 || signUpState.firstName.length > 20) {
      toast.error(
        "First Name should be atleast 3 charcter long and maximum 20 characters long"
      );
    }
    if (!signUpState.email.includes("@") || !signUpState.email.includes(".")) {
      toast.error("Invalid email");
    }
    if (
      signUpState.mobileNumber.length < 10 ||
      signUpState.mobileNumber.length > 12
    ) {
      toast.error("Mobile Number should be between 10-12 digits");
    }
    
      const apiResponse =  await dispatch(createAccount(signUpState))
      console.log('Api Response is',apiResponse);
      // redirect to Login page if api success
      if(apiResponse.payload.data.success)  navigate('/auth/login')

  }

  return (
    <SignUpPresentation
      handleSignUp={handleSignUp}
      handlerUserInput={handlerUserInput}
    />
  );
}

export default SignUp;
