/* eslint-disable no-restricted-imports */
import { BrowserRouter }         from 'react-router-dom';
import { render }                from '@testing-library/react';
import { Provider }              from 'react-redux';
import { ThemeProvider }         from 'styled-components';

import { theme }                 from '@config/theme';
import { LocalesProvider }       from '@app/providers/with-locales';

import { store }                 from '../__mocks__/store';

import type { RenderOptions }    from '@testing-library/react';
import type { FC, ReactElement } from 'react';

const AllTheProviders: FC = ({ children }) => (
	<BrowserRouter>
		<Provider store={ store }>
			<LocalesProvider>
				<ThemeProvider
					theme={ {
						...theme,
						mode: 'dark'
					} }
				>
					{ children }
				</ThemeProvider>
			</LocalesProvider>
		</Provider>
	</BrowserRouter>
);

function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) {
	return render(ui, {
		wrapper: AllTheProviders,
		...options
	});
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
