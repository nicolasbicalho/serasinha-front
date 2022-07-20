function moneyFormater(value) {
	return value ? `R$ ${value.toFixed(2).replace('.', ',')}` : '';
}

export default {
    moneyFormater,
}