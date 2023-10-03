import{createContext, useContext, useEffect, useState } from "react";
import{auth, db} from "../firebase";
import{
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    SignOut,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";



 const AuthContext = createContext()

 export function AuthContextProvider({children}){

    const[user, setUser] = useState({})

    function signUp(email, password){
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email),{
            savedShows:[]
        })
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut(){
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return() => {
            unSubscribe();
        };
    });

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
 }

 export function UserAuth() {
    return useContext(AuthContext)
 }