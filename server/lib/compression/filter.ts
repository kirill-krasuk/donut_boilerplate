import compressible     from 'compressible';

import type compression from 'compression';

const shouldCompress: compression.CompressionFilter = (req, res) => {
	if (req.headers['x-no-compression']) {
		return false;
	}

	return compressible(res.getHeader('Content-Type')?.toString() ?? '') ?? false;
};

export { shouldCompress };
