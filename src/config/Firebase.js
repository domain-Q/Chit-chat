import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBmoMQVU-Ymhx_3BGKeJ_3iO4yIb8iEX80",
  authDomain: "chit-chat-959d5.firebaseapp.com",
  projectId: "chit-chat-959d5",
  storageBucket: "chit-chat-959d5.appspot.com",
  messagingSenderId: "300030524430",
  appId: "1:300030524430:web:d4a3128f4360bf2957905f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey there, I am using Chit Chat",
      lastSeen: serverTimestamp(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split('-').join(" ")||error.message)
  }
};

const login=async (email,password)=>{
  try {
    await  signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.error(error)
    toast.error(error.code.split("/")[1].split('-').join(" ")||error.message)
  }
}
const logout =async ()=>{
    try {
        await signOut(auth)
    } catch (error) {
        toast.error(error.code.split("/")[1].split('-').join(" ")||error.message) 
    }
}
export { signup ,login,logout,auth,db};
