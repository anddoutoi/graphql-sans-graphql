export {prettyPrintPlease as default};

function prettyPrintPlease(ninja) {
	const prettyName = `${ninja.firstName} ${ninja.lastName}`;

	return prettyName || ninja.username;
}
