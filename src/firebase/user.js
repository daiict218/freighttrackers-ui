import {firestore} from './config';

export const createUserDoc = async (user) => {
    //get a reference of the firestore document
    const docRef = firestore.doc(`/users/${user.uid}`);

    //create a user object
    const userProfile = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        role: '', //to be filled later
        address: '',
        city: '',
        state: '',
        zip: '',
        ip: '',
    };

    //write to cloud firestore
    return docRef.set(userProfile);
}