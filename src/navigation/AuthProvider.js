import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin'

/**
 * This provider is created
 * to access user in whole app
 */
 GoogleSignin.configure({
  webClientId: '844089416095-oov310bbo4jn780v9519rbtaupvue9j8.apps.googleusercontent.com',
});

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        login: async (email, password) => {
          setLoading(true);
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
          setLoading(false);
        },
        googleLogin: async() => {
          try{
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);

          }catch(error){
            console.log({error});

          }
        },

        register: async (email, password) => {
          setLoading(true);
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
          setLoading(false);
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};