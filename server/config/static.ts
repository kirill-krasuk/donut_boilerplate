import { paths }          from '@server/constants/paths';
import { ONE_YEAR_CACHE } from '@server/constants/cache';

const staticFiles = [
	{
		publicPath : '/dist',
		source     : paths.dist,
		compression: true,
		extras     : { maxAge: ONE_YEAR_CACHE }
	},

	{
		publicPath : '/public',
		source     : paths.public,
		compression: true,
		extras     : { maxAge: ONE_YEAR_CACHE }
	},

	{
		publicPath: '/sw.js',
		source    : paths.serviceWorker
	},

	{
		publicPath: '/images',
		source    : paths.images.static,
		extras    : { maxAge: ONE_YEAR_CACHE }
	},

	{
		publicPath: '/images/build',
		source    : paths.images.builded,
		extras    : { maxAge: ONE_YEAR_CACHE }
	},

	{
		publicPath: '/fonts/build',
		source    : paths.fonts,
		extras    : { maxAge: ONE_YEAR_CACHE }
	},

	{
		publicPath: '/',
		source    : paths.root
	}
];

export { staticFiles };
