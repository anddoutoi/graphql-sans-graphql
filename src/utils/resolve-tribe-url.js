export default function resolveSlackUrl(config = {}) {
	const baseUrl = '/tribes';

	if (config.id) {
		return `${baseUrl}/${config.id}`;
	}

	return baseUrl;
}
