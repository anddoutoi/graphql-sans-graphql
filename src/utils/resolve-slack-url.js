export default function resolveSlackUrl(config = {}) {
	const baseUrl = '/slacks';

	if (config.id) {
		return `${baseUrl}/${config.id}`;
	}

	return baseUrl;
}
