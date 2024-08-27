import { createContext, useId, useState } from "react";
import { auth, db } from "../config/Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const AppContextProvider = (props) => {
    const navigate = useNavigate()
  const [userData, setuserData] = useState(null);
  const [chatData, setchatData] = useState(null);

  const loadUserData = async (uid) => {
    try {
        const userRef = doc(db,"users",uid)
        const usersnap =   await getDoc(userRef)
        const userData = usersnap.data();
       setuserData(userData);
       if (userData.avatar && userData.name){
        navigate("/chat")
       }
       else{
        navigate("/profile")
       }
      await updateDoc(userRef,{
        lastseen:Date.now()

      })
        
      setInterval(async() => {
        if ( auth.chatUser){
            await updateDoc(userRef,{
                lastseen:Date.now()
            })
        }
      }, 60000);
     console.log(usersnap);
     
    } catch (error) {


    }
  };
  const value = {
    userData,
    setuserData,
    setchatData,
    chatData,
    loadUserData
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
