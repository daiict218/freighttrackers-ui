export const createParty = (party) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        console.log(firestore)
        firestore.collection('parties').add({ ...party }) //spread so that we can add other properties
            .then(() => {
                dispatch({type: 'CREATE_PARTY', party})
            })
            .catch(err => {
                console.log(err);
                dispatch({type: 'CREATE_PARTY_ERROR', party})
            })
    };
};
