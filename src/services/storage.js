import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";


// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();


//Save image in Storage:
export const uploadPetImage = async (currentUserUid, petName, imgName, imgCarregada) => {

  const petImageRef = ref(storage, `petImages/${currentUserUid}/${petName}/${imgName}`);

  return uploadBytes(petImageRef, imgCarregada)
      .then((snapshot) => {
          return getDownloadURL(snapshot.ref)

      })

}



//Delete image in Storage:

export const deletePetImages = (refImage) => {

  const petImgRef = ref(storage, refImage);

// Delete the file
  deleteObject(petImgRef).then(() => {
    return
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });

}