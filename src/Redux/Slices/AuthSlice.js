import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosIntance from "../../Helpers/axiosInstance";

const initialState = {
  isLoggedin: localStorage.getItem("isLoggedin") === "true" || "false",
  role: localStorage.getItem("role") || "",
  data: JSON.parse(localStorage.getItem("data")) || {},
};
export const createAccount = createAsyncThunk(
  "/auth/createaccount",
  async (data) => {
    console.log("incoming data to Thunks", data);

    try {
      const response = await axiosIntance.post("/users", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // extraReducers:{}
});
export default AuthSlice.reducer;
