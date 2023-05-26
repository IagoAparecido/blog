import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
  // updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeKIDafjjaZNAmVLsCFqf35vspJz2TH6M",
  authDomain: "blog-41cb3.firebaseapp.com",
  projectId: "blog-41cb3",
  storageBucket: "blog-41cb3.appspot.com",
  messagingSenderId: "286602744674",
  appId: "1:286602744674:web:deb5aee7bede6f6954923b",
  measurementId: "G-W76CRDWQXD",
  databaseURL: "https://blog-41cb3-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const post = async (post: any) => {
  try {
    await addDoc(collection(db, "posts"), post);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const signIn = async (email: string, password: string) => {
  setPersistence(auth, browserSessionPersistence);

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Erro na autenticação:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    window.location.reload();
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
};
