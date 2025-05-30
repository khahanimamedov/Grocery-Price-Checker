import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setUser } from "./store/features/login/loginSlice.js";
import { useDispatch } from "react-redux";
import { getUid } from "./store/features/profile/profileSlice.js";
import { getProducts } from "./store/features/data/dummyJsonThunk.js";
const auth = getAuth();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(setUser(userData));
        dispatch(getUid(user.uid));
      }
    });
  });
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
