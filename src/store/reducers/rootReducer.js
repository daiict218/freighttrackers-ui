import authReducer from './authReducer';
import partyReducer from './partyReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    parties: partyReducer
});

export default rootReducer;