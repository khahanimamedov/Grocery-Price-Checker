import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

export const saveProfile = createAsyncThunk(
  "profile/saveProfile",
  async (profileData) => {
    try {
      const { uid, ...otherUserDetails } = profileData;
      const db = getFirestore();
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, { ...otherUserDetails });
      return profileData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (uid) => {
    try {
      const db = getFirestore();
      const userRef = doc(db, "users", uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Profile not found");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
