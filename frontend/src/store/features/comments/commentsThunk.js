import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  setDoc,
  doc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { app } from "../../../helpers/auth/firebaseConfig";

const saveComments = createAsyncThunk(
  "comments/saveComments",
  async (userData) => {
    const auth = getAuth(app);
    const db = getFirestore();

    const reviewsRef = collection(db, "reviews");

    await setDoc(doc(reviewsRef, auth.currentUser.uid), {
      ...userData,
      userId: auth.currentUser.uid,
      createAt: serverTimestamp(),
    });
  }
);

export default saveComments;
