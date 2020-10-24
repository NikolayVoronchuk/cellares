const axios = require('axios');
const API_HOST_URL = 'http://localhost:4003';

export class IAcontroller {
    constructor() {
    }

    async connectToInstrument(connect: boolean) {
        return await axios.post(`${API_HOST_URL}/instrument/a/connection/connect`, {
            status: connect
        });
    }

    async controlProcedureOnInstrument(status: boolean, seconds?: number) {
        if(status && seconds !== undefined) {
            return await axios.post(`${API_HOST_URL}/instrument/a/procedure/start`, { secondsToRun: seconds });
        } else {
            return await axios.post(`${API_HOST_URL}/instrument/a/procedure/stop`, {});
        }

    }

    async isConnected() {
        return await axios.get(`${API_HOST_URL}/instrument/a/connection/status`, {});
    }

    async isProcedureRunning() {
        return await axios.get(`${API_HOST_URL}/instrument/a/service/status`, {});
    }

    async getTimeLeft() {
        return await axios.get(`${API_HOST_URL}/instrument/a/countdown`, {});
    }

    async getData() {
        return await axios.get(`${API_HOST_URL}/instrument/a/generate/random`, {});
    }

}



