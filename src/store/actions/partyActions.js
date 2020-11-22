export const createParty = (party) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        try{
            // console.log(firestore)
            await firestore.collection('parties').add({ ...party, createdAt: Date.now() })
            // firestore.collection('parties').add({ ...party, createdAt: Date.now() }) //spread so that we can add other properties
            dispatch({type: 'CREATE_PARTY', party})
            console.log('hello world')
        }
        catch(err) {
            console.log(err);
            dispatch({type: 'CREATE_PARTY_ERROR', party})
        }
    };
};
