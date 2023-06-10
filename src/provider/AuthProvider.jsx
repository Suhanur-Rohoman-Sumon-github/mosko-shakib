import  { createContext, useState,useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loding,setloading] = useState(true)

    const handleSinup = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
            setloading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        handleSinup,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;