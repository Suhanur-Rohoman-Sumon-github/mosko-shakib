import  { createContext, useState,useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loding,setloading] = useState(true)
    const provider = new GoogleAuthProvider();

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
    const handleGoogleSinin =() =>{
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
            
            if(loggedUser){
                axios.post('http://localhost:5000/jwt',{email:loggedUser?.email})
                .then(data=>{
                    console.log(data.data.token)
                    const token = data.data.token
                    localStorage.setItem('access-token',token)
                    setloading(false)
                })
            }
            else{
                localStorage.removeItem('acsses-token')
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        handleSinup,
        handleLogin,
        handleLogout,
        handleGoogleSinin,
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