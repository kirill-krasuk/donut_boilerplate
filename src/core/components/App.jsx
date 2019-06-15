import React      from 'react';
import { hot }    from 'react-hot-loader/root';

import('./greeting');

const App = () => (
    <div>
        <div>Kirill</div>
        <div>Krasuk</div>
        <div>Made this</div>
    </div>
);

export default hot(App);
