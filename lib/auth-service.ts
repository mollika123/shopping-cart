import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";

import { auth } from "./firebase";

// Register User
export const signUpWithEmail = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(userCredential.user, {
    displayName: name,
  });

  return userCredential.user;
};

// Login User
export const logInWithEmail = (
  email: string,
  password: string
): Promise<{ user: User }> => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout User
export const logOutUser = (): Promise<void> => {
  return signOut(auth);
};