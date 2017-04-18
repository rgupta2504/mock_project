import { combineReducers } from 'redux';
import { users, itemsHasErrored, itemsIsLoading,user_logged,orders,instruments } from './items';

import {reducer as modalReducer} from 'react-redux-modal'
export default combineReducers({
    users,
    itemsHasErrored,
    itemsIsLoading,
    user_logged,
    orders,
    modals: modalReducer,
    instruments
});
