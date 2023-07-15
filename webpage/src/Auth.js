import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // add a realtime listener
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    auth.signInWithPopup(provider)
      .then((result) => {
        // User signed in
        console.log('User successfully signed in with Google:', result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error('Error signing in with Google:', error);
      });
  };

  const logOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div>
      <h1>Authentication Page</h1>
      {user ? (
        <button onClick={logOut}>Log Out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Auth;

