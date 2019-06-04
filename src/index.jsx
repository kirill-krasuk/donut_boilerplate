import React      from 'react';
import { render } from 'react-dom';
import { hot }    from 'react-hot-loader/root';

import './style';

const ROOT_NODE = document.getElementById('root');

const App = hot(() => (
    <div className="test">Hello, React!!</div>
));

render(<App />, ROOT_NODE);
