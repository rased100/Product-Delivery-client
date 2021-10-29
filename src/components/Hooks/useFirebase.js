import { useEffect, useState } from "react";
import initializeFirebaseAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebaseAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    console.log('user', user)
    const [services, setServices] = useState([]);
    console.log(services[0])
    useEffect(() => {
        fetch('./servicedb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider)
        // .then((result) => {
        //     setUser(result.user)
        //     console.log(result.user)
        // })
        // .catch((error) => {
        //     console.log(error.message)
        // });
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])

    return {
        user,
        handleGoogleSignIn,
        services,
        logOut
    }
}

export default useFirebase;