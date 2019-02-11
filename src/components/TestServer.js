import React from 'react';
import request from 'superagent';

const handleTestServer = async () => {
    try {
        const resp = await request
            .get('/api/getStatus')
            .timeout({ response: 2000 });
        alert(`status=${resp.status}: ${resp.text}`);
    } catch(err) {
        alert(`err=${JSON.stringify(err)}`);
    }
}

const TestServer = () => (
    <button onClick={() => handleTestServer()}>
        Test Server
    </button>
);

export default TestServer;
