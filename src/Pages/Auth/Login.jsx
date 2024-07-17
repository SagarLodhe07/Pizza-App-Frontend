import { useState } from "react";
import toast from "react-hot-toast";
import { login } from "../../Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import LoginPresantation from "./LoginPresantation";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  function handlerUserInput(event) {
    const { name, value } = event.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    // console.log(signUpState);

    if (!loginData.email || !loginData.password) {
      // For Pop up alert on window
      toast.error("please fill all input");
      return;
    }

    if (!loginData.email.includes("@") || !loginData.email.includes(".")) {
      toast.error("Invalid email");
    }

    const apiResponse = await dispatch(login(loginData));
    console.log("Api Response is", apiResponse);
    // redirect to Login page if api success
    if (apiResponse.payload.data.success) navigate("/");
  }
  return (
    <LoginPresantation
      handleSignUp={handleSignUp}
      handlerUserInput={handlerUserInput}
    />
  );
}
export default Login;
