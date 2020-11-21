import {firestore} from './config';

export const createPartyDoc = async (party) => {
    //get a reference of the firestore document
    const docRef = firestore.doc(`/parties/add`);
    console.log(docRef);
    //create a party object
    const partyProfile = {
        name: party.name,
        address: party.address,
        gst: party.gst,
    };

    //write to cloud firestore
    return docRef.set(partyProfile);
};

export const addParty = async ({name, address, gst}) => {
    const resp = await createPartyDoc({name, address, gst});
    console.log(resp);
    return resp;
};