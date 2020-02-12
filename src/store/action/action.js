export const INCOME = 'INCOME';
export const SPENDING = 'SPENDING';

export const income = (type, amount, purpose) => {
	return {
		type: type,
		amount: amount,
		purpose: purpose
	}
}
export const spending = (type, amount, purpose) => {
	return {
		type: type,
		amount: amount,
		purpose: purpose
	}
}