import authReducer from './authReducer';
import partiesReducer from './partiesReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    parties: partiesReducer
});

export default rootReducer;