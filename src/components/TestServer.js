import React from 'react';
import request from 'superagent';

const handleTestServer = async () => {
    try {
        const resp = await request
            .get(`${window.location.hostname}/api/getStatus`)
            .timeout({ response: 2000 });

        alert(`status=${resp.status} body=${JSON.stringify(resp)}`);
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
