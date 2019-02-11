import React from 'react';
import request from 'superagent';

const handleTestClicked = async () => {
    try {
        const resp = await request
            .get('/api/status')
            .timeout({ response: 2000 });
        alert(`status=${resp.status}: ${resp.text}`);
    } catch(err) {
        alert(`err=${JSON.stringify(err)}`);
    }
}

const TestServer = () => (
    <div>
        <button onClick={() => handleTestClicked()}>
            Test Server
        </button>
    </div>
);

export default TestServer;
