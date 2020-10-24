const { randomBytes } = require('crypto');

export class InstrumentAcontroller {
    private timeOut: number = 0;
    private connected: any = {"status": false};
    private status: string = 'stopped';
    private interval: any;


    async startProcedure(secondsToRun: number) {
        this.startTimer(secondsToRun);
        this.status = 'started';
        return this.status;
    };

    async stopProcedure() {
        this.stopTimer();
        this.status = 'stopped';
        return this.status;
    };

    async connectionStatus() {
        return this.connected.status;
    };

    async connect(state: boolean) {
        this.connected.status = state;
        return this.connected.status;
    };

    async getStatus() {
        return this.status;
    };

    async generateRandom() {
        return randomBytes(4).toString('hex');
    };

    async getRemainingTime() {
        return this.timeOut;
    };

    private async startTimer(start: number) {
        let counter = start;
        this.interval = setInterval(() => {
            this.timeOut = counter;
            counter--;

            if (counter < 0 ) {
                this.status = 'stopped';
                clearInterval(this.interval);
            }
        }, 1000);
    };

    private stopTimer() {
        this.status = 'stopped';
        this.timeOut = 0;
        clearInterval(this.interval);
    }

}



