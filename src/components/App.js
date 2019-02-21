import React from 'react';

import SimpleLineChart from './SimpleLineChart';

import './app.css';

const App = () => (
    <div className="demo">
        <h1>Hello ForgeRock</h1>
        <h1>ForgeStatus Dashboard</h1>
        <SimpleLineChart />
        <p>Active work is in progress, please check back soon.</p>
        <h2>ForgeStatus Repo</h2>
        <a href="https://github.com/chrisstowe/forgestatus">https://github.com/chrisstowe/forgestatus</a>
        <br />
        <h2>ForgeStatus Dashboard Repo</h2>
        <a href="https://github.com/chrisstowe/forgestatus-dashboard">https://github.com/chrisstowe/forgestatus-dashboard</a>

    </div>
);

export default App;
