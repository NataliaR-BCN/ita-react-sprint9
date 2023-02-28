import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./../application/firebase";


//USERS FIRESTORE DATABASE

//Create user
    export const createUserInDatabase = (userId, userEmail) => {    
        return setDoc(doc(db, 'users', userId), {
        email: userEmail,
        });        
    }


//Update user with name
    export const updateUserInDatabase = (userName, userId) => {    
        const nameRef = doc(db, 'users', userId);
        setDoc(nameRef, 
            { name: userName }, 
            { merge: true }
        );
    }

//Read user data
    export const readUserInDataBase = async (userId) => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {  
            return docSnap.data();    
        } else {
            //console.log("No such document!");
            return undefined;
        }
    }