export {intersperse as default};

function intersperse(separator, items = []) {
	return items
		.slice(1)
		.reduce((accumulator, value) => accumulator.concat([separator, value]), [
			items[0],
		]);
}
