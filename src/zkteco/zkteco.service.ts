import { Injectable, Logger } from '@nestjs/common';
const ZKJUBAER = require("zk-jubaer");
const ZKLib = require('node-zklib');

@Injectable()
export class ZktecoService {
    private readonly logger = new Logger(ZktecoService.name);

    // async getData() {
    //     console.log("Get Data")
    //     let zkInstance = new ZKLib("10.38.60.73", 4370, 10000, 4000);
    //     try {
    //         await zkInstance.createSocket();

    //         const users = await zkInstance.getAttendances();
    //         console.log(users);

    //         await zkInstance.disconnect();
    //     } catch (error) {
    //         console.log(error)
    //         this.logger.error(`Error fetching data from ZKTeco device: ${error.message}`);
    //         throw new Error(`Error fetching data from ZKTeco device: ${error.message}`);
    //     }
    // }

    async getData() {
        console.log("Get Data")
        let obj = new ZKJUBAER("10.38.60.70", 4370, 10000, 4000);
        try {
            // Create socket to machine
            await obj.createSocket()

            const users = await obj.getUsers()

            // Get all logs in the machine
            const attendances = await obj.getAttendances();

            // Read real-time logs
            await obj.getRealTimeLogs((data: any) => {
                console.log(data);
            });

            return {
                "users": users,
                "attendances": attendances
            }

            // Disconnect from device
            await obj.disconnect(); // when you are using real-time logs, you need to disconnect manually
        } catch (error) {
            console.log(error)
            this.logger.error(`Error fetching data from ZKTeco device: ${error.message}`);
            throw new Error(`Error fetching data from ZKTeco device: ${error.message}`);
        }
    }
}
