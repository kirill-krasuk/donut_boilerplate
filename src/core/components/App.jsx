import React      from 'react';
import { hot }    from 'react-hot-loader/root';

import './style';

import('./greeting');

const App = () => (
    <div className="test">Го жрать?!</div>
);

export default hot(App);
