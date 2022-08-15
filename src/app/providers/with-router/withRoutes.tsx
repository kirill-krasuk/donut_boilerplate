import { Routes } from '@app/routes';

function withRoutes() {
	return function () {
		return <Routes />;
	};
}

export { withRoutes };
