import React from 'react';
import request from 'superagent';

const handleTestServer = async (url) => {
    try {
        const resp = await request
            .get(`${url}/api/health`)
            .timeout({ response: 2000 });

        alert(`status=${resp.status} body=${resp.body}`);
    } catch(err) {
        alert(`err=${JSON.stringify(err)}`);
    }
}

const TestServer = () => (
    <div>
        <button onClick={() => handleTestServer('http://forgestatus.com')}>
            Test Prod Server
        </button>
        <button onClick={() => handleTestServer('http://dev.forgestatus.com')}>
            Test Dev Server
        </button>
    </div>
);

export default TestServer;
