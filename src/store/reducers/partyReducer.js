const initialState = {
    parties: [
        {name: 'xsw', gst: '123', address: 'abc'},
    ],
};

const partiesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_PARTY':
            console.log('state', action.party);
            return state;

        default:
            return state;
    }
}

export default partiesReducer;