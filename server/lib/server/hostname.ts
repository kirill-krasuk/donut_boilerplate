const getHostname = (host: string) => {
	if (/(0.0.0.0|127.0.0.1)/.test(host)) {
		return 'localhost';
	}

	return host;
};

export { getHostname };
