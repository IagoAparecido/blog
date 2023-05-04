import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
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
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

export const signIn = async (email: string, password: string) => {
  setPersistence(auth, browserSessionPersistence);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Usuário autenticado:", userCredential.user);
  } catch (error) {
    console.error("Erro na autenticação:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Usuário desconectado");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
};
