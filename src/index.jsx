import React      from 'react';
import { render } from 'react-dom';

const ROOT_NODE = document.getElementById('root');

const App = () => (
    <div>Hello React!</div>
);

render(<App />, ROOT_NODE);
