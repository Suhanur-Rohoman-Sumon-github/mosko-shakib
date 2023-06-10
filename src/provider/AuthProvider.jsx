import  { createContext, useState,useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loding,setloading] = useState(true)

    const handleSinup = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleLogout = () =>{
        signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
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
        handleLogin,
        handleLogout,
        updateUserProfile,
        user,
        loding
    }
    return (
        <AuthContext.Provider value={authInfo}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;