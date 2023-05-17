import { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import type { FirebaseError } from "@firebase/util";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error: FirebaseError) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>Sign in successful!</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Sign out successful!</p>
      )}
    </div>
  );
};

export default AuthDetails;
