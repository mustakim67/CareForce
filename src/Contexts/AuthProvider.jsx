import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../Components/Firebase/Firebase.init";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(false);

    //Create User
    const createUser = ( email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name, photoURL);
    }

    //Update Profile
    const updateUserProfile = (UpdateData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, UpdateData)
    }
    
    //Log Out User
    const signOutUser=(auth)=>{
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
        createUser,
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