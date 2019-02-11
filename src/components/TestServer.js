import React from 'react';
import request from 'superagent';

const handleTestServer = async () => {
    try {
        const resp = await request
            .get('/api/getServerStatus')
            .timeout({ response: 2000 });
        alert(`status=${resp.status}: ${resp.text}`);
    } catch(err) {
        alert(`err=${JSON.stringify(err)}`);
    }
}

const handleTestWorker = async () => {
    try {
        const resp = await request
            .get('/api/getWorkerStatus')
            .timeout({ response: 2000 });
        alert(`status=${resp.status}: ${resp.text}`);
    } catch(err) {
        alert(`err=${JSON.stringify(err)}`);
    }
}

const TestServer = () => (
    <div>
        <button onClick={() => handleTestServer()}>
            Test Server
        </button>
        <button onClick={() => handleTestWorker()}>
            Test Worker
        </button>
    </div>
);

export default TestServer;
