import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../Components/Firebase/Firebase.init";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(false);

    //Create User
    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name, photoURL);
    }
    //Google Sign In
    const googleSignIn = (auth, provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //Update Profile
    const updateUserProfile = (UpdateData) => {
        return updateProfile(auth.currentUser, UpdateData)
    }
    //Sign In user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }
    //Log Out User
    const signOutUser = (auth) => {
        return signOut(auth);
    }
    //Hold Current User data
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })

        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        setLoading,
        googleSignIn,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        status,
        setStatus

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;