import { Injectable, Logger } from '@nestjs/common';
const ZKJUBAER = require("zk-jubaer");

@Injectable()
export class ZktecoService {
    private readonly logger = new Logger(ZktecoService.name);

    async getData() {
        let obj = new ZKJUBAER("10.38.61.14", 4370, 50000, 5000);
        try {
            // Create socket to machine
            await obj.createSocket();

            // Get all logs in the machine
            const logs = await obj.getAttendances();
            console.log(logs);

            // Read real-time logs
            await obj.getRealTimeLogs((data: any) => {
                console.log(data);
            });

            // Disconnect from device
            await obj.disconnect(); // when you are using real-time logs, you need to disconnect manually
        } catch (error) {
            console.log(error)
            this.logger.error(`Error fetching data from ZKTeco device: ${error.message}`);
            throw new Error(`Error fetching data from ZKTeco device: ${error.message}`);
        }
    }
}
