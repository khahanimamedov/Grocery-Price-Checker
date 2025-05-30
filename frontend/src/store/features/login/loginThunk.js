import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../helpers/auth/firebaseConfig";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password, navigate }) => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/home");
      console.log(userCredential);
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
      };
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
);
