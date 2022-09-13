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

loadableReady(() => {
	if (env.client.swEnable) {
		if (!window.isSecureContext) {
			console.info('SW need a secure context');
		}

		if ('serviceWorker' in navigator) {
			window.addEventListener('load', async () => {
				try {
					await navigator.serviceWorker.register('/sw.js', {
						scope: '/'
					});

					console.info('SW registered');
				} catch (error) {
					console.error(`SW registration failed: ${ error }`);
				}
			});
		}
	}

	renderRoot();
}).catch(console.error);
