import {combineReducer} from 'redux';
import CryptoReducer from './CryptoReducer';

export default combineReducer({
    crypto: CryptoReducer
});