import React, { useEffect, useState } from "react";
import app from "../base.jsx";
import { BallScaleRippleMultiple } from "react-pure-loaders";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div className="containerLoading">
        <div className="loading">
          <BallScaleRippleMultiple color="#123abc" loading={pending} />
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
