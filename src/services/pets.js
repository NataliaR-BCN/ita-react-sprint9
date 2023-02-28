import { collection, getDocs, query, doc, getDoc, deleteDoc, setDoc, where } from "firebase/firestore";
import { db } from "./../application/firebase";


//New pet with first form data 
export const createPetInDatabase = (userOwnerId, petName, petSex, colorSelected, petAge, petWeight, petBreed) => {    

    return setDoc(doc(db, "pets", userOwnerId+petName), {
    userOwnerId: userOwnerId,
    petName: petName,
    petSex: petSex,
    petColor: colorSelected,
    petAge: petAge,
    petWeight: petWeight,
    petBreed: petBreed,
    });  
      
}


//Update images in pet
export const updatePetImgInDatabase = (arrayImgs, userOwnerId, petName) => {   
     
    const petRef = doc(db, 'pets', userOwnerId+petName);
    setDoc(petRef, 
        { petImages: arrayImgs },
        { merge: true });

}


//Update pet with Lost Form info:
export const updatePetLostDataInDatabase = async (userOwnerId, petName, petLostDate, petLostArea, petClothes, petClothesType, clothesColor, petLostDescription, petContactName, petContactData) => {   
 
    const petRef = doc(db, 'pets', userOwnerId+petName);
    await setDoc(petRef, {
        isLost: true,
        petLostDate: petLostDate,
        petLostArea: petLostArea,
        petClothes: petClothes,
        petClothesType: petClothesType,
        clothesColor: clothesColor,
        petLostDescription: petLostDescription,
        petContactName: petContactName,
        petContactData: petContactData },
        { merge: true });

}


//Read PET

//Get pet by ID:
export const readPetInDatabaseById = async (id) => {
    const docRef = doc(db, 'pets', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}



//Get pet: 
export const readPetInDatabase = async (userOwnerId, petName) => {
    const docRef = doc(db, 'pets', userOwnerId+petName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}

//Get all lost pets: 
export const readAllLostPetsInDatabase = async () => {

    const q = query(collection(db, "pets"), where("isLost", "==", true));

    const lostPets = [];
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

      lostPets.push({...doc.data()});

    });
    
    return lostPets;

}


//Get all pets of a user: 
export const readUserPetsInDatabase = async (currentUserUid) => {

    const q = query(collection(db, "pets"), where("userOwnerId", "==", currentUserUid));

    const userPets = [];
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

      userPets.push({...doc.data()});

    });
    
    return userPets;

}


//Delete pet from User's Dashboard
export const deletePetInDatabase = async (userOwnerId, petName) => {

    await deleteDoc(doc(db, 'pets', userOwnerId+petName));

}