import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./../application/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


const AuthContext = createContext();


export function useAuth() {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }


     function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() { 
    signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup, 
        login,
        logout
    }

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )

};

