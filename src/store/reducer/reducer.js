import {INCOME, SPENDING} from '../../store/action/action';

export const balance = (balance=0, action) => {
	switch (action.type) {
		case INCOME:
			return balance = parseInt(action.amount) + parseInt(balance);
			break;
		case SPENDING:
			return balance = parseInt(balance) - parseInt(action.amount);
			break;
		default:
			return balance;	
	}
}

export const ttlincome = (income=0, action) => {
	switch (action.type) {
		case INCOME:
			return {
				in: action.amount,
				income: parseInt(action.amount) + parseInt(income),
				desc: action.purpose,
				type: action.type
			}
			break;
		default:
			return income;	 
	}
}

export const ttlspending = (spending=0, action) => {
	switch (action.type) {
		case SPENDING:
			return {
				spent: action.amount,
				spending: parseInt(action.amount) + parseInt(spending),
				desc: action.purpose,
				type: action.type
			}
			break;
		default:
			return spending;	
	}
}



