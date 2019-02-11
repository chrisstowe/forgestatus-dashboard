import React from 'react';
import request from 'superagent';

const handleTestClicked = async (serviceName) => {
    try {
        const resp = await request
            .get(`${serviceName}/status`)
            .timeout({ response: 2000 });
        alert(`status=${resp.status}: ${resp.text}`);
    } catch(err) {
        alert(`err=${JSON.stringify(err)}`);
    }
}

const TestServer = () => (
    <div>
        <button onClick={() => handleTestClicked('server')}>
            Test Server
        </button>
        <button onClick={() => handleTestClicked('worker1')}>
            Test Worker
        </button>
    </div>
);

export default TestServer;
