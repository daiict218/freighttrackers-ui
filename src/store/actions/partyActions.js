export const createParty = (party) => {
    return (dispatch, getState) => {
        //make async call to database
        console.log(party);
        dispatch({type: 'CREATE_PARTY', party})
    };
};
