const ninjas = require('./ninjas');
const slacks = require('./slackChannels');
const tribes = require('./tribes');

console.log({ninjas, slacks, tribes});

module.exports = () => {
	return {ninjas, slacks, tribes};
};
