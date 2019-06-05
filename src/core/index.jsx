import React      from 'react';
import { render } from 'react-dom';

import { App }    from './components';

console.log('source-maps');

const ROOT_NODE = document.getElementById('root');

render(<App />, ROOT_NODE);
