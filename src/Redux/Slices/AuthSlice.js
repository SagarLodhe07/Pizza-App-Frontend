import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosIntance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

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
      const response = axiosIntance.post("/users", data);
      toast.promise(response, {
        success: (resolvedPromise) => {
          return resolvedPromise?.data?.message;
        },
        loading: "Hold back tight, we are processing....",
        error: "Oh no! Something went wrong. Please try again",
      });
      const apiResponse = await response;
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  }
);
export const login = createAsyncThunk("/auth/login", async (data) => {
  console.log("incoming data to Thunks", data);

  try {
    const response = axiosIntance.post("/auth/login", data);
    toast.promise(response, {
      success: (resolvedPromise) => {
        return resolvedPromise?.data?.message;
      },
      loading: "Hold back tight, we are processing....",
      error: "Oh no! Something went wrong. Please try again",
    });
    const apiResponse = await response;
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
});
export const logout = createAsyncThunk("/auth/logout", async () => {
  console.log("incoming data to Thunks");

  try {
    const response = axiosIntance.post("/auth/logout");
    toast.promise(response, {
      success: (resolvedPromise) => {
        return resolvedPromise?.data?.message;
      },
      loading: "Logging Out....",
      error: "Oh no! Something went wrong. Please try again",
    });
    const apiResponse = await response;
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedin = true;
        state.role = action?.payload?.data?.data?.userRole;
        state.data = action?.payload?.data?.data?.userData;

        localStorage.setItem("isLoggedin", true);
        localStorage.setItem("role", action?.payload?.data?.data?.userRole);
        localStorage.setItem(
          "data",
          JSON.stringify(action?.payload?.data?.data.userData)
        );
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.setItem("isLoggedin", false);
        localStorage.setItem("role", "");
        localStorage.setItem("data", JSON.stringify({}));
        state.isLoggedin = false;
        state.role = "";
        state.data = {};
      });
  },
  // extraReducers:{}
});
export default AuthSlice.reducer;
