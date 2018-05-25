export default function resolveNinjaUrl(config = {}) {
	const baseUrl = '/ninjas';

	if (config.id) {
		return `${baseUrl}/${config.id}`;
	}

	return baseUrl;
}
