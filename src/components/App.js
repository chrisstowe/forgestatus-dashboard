import React from 'react';

import TestServer from './TestServer';

const App = () => (
    <div>
        <h1>ForgeStatus Dashboard</h1>
        <p>Active work is in progress, please check back soon.</p>
        <h2>ForgeStatus Repo</h2>
        <a href="https://github.com/chrisstowe/forgestatus">https://github.com/chrisstowe/forgestatus</a>
        <br />
        <h2>ForgeStatus Dashboard Repo</h2>
        <a href="https://github.com/chrisstowe/forgestatus-dashboard">https://github.com/chrisstowe/forgestatus-dashboard</a>
        <TestServer />
    </div>
);

export default App;
