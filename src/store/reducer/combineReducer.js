import {combineReducers} from 'redux';
import {balance, ttlincome, ttlspending} from './reducer';

export default combineReducers({
	balance: balance,
	ttlincome: ttlincome,
	ttlspending: ttlspending
});