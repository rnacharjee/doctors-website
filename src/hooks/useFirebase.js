import React, { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [fbError, setFbError] = useState("");

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setIsLoading(false);
      })
      .catch((error) => {
        setFbError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setFbError(error.message);
      });
  };

  const emailPasswordRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        const user = useCredential.user;

        setIsLoading(false);
      })
      .catch((error) => {
        setFbError(error.message);
      });
  };
  const emailPasswordLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setFbError(error.message);
      });
  };

  return {
    user,
    fbError,
    isLoading,
    signInUsingGoogle,
    logOut,
    emailPasswordRegister,
    emailPasswordLogin,
  };
};

export default useFirebase;
