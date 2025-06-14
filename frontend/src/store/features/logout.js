import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../../helpers/auth/firebaseConfig";

export const logout = createAsyncThunk(
  "auth/logout",
  async ({ navigate }, { rejectWithValue }) => {
    try {
      await signOut(auth);

      navigate("/login");

      localStorage.removeItem("user");
      localStorage.removeItem("currentUser");
    } catch (error) {
      console.log("Here");
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
