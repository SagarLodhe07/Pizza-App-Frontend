import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: localStorage.getItem("isLoggedin") === "true" || "false",
  role: localStorage.getItem("role") || "",
  data: JSON.parse(localStorage.getItem("data")) || {},
};

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    // extraReducers:{}
})
export default AuthSlice.reducer