import { createRoot, hydrateRoot } from 'react-dom/client';
import { loadableReady }           from '@loadable/component';

import { env }                     from '@env/index';

import { Application }             from './application/Application.client';

const rootNode = document.querySelector('#root')!;

const renderRoot = () => {
	env.client.needHydrate
		? hydrateRoot(rootNode, <Application />)
		: createRoot(rootNode).render(<Application />);
};

async function registerSW() {
	try {
		await navigator.serviceWorker.register('/sw.js', {
			scope: '/'
		});

		console.info('SW registered');
	} catch (error) {
		console.error(`SW registration failed: ${ error }`);
	}
}

async function locatorJS() {
	if (__IS_DEV__) {
		const { default: setup } = await import('@locator/runtime');

		setup();
	}
}

loadableReady(() => {
	if (env.client.swEnable) {
		if (!window.isSecureContext) {
			console.info('SW need a secure context');
		}

		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				registerSW().catch(console.error);
			});
		}
	}

	locatorJS().catch(console.error);
	renderRoot();
}).catch(console.error);
