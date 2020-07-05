import { Kinds } from './kind.enum';

export interface IUser {
    kind?: Kinds;
    proxyUser?: string;
    driverMemory?: string,
    driverCores?: number;
    executorMemory?: string;
    executorCores?: number;
    numExecutors?: number;
    name?: string;
    heartbeatTimeoutInSecond?: number;
}

export class User implements IUser {
        constructor(
            public kind?: Kinds,
            public proxyUser?: string,
            public driverMemory?: string,
            public driverCores?: number,
            public executorMemory?: string,
            public executorCores?: number,
            public numExecutors?: number,
            public name?: string,
            public heartbeatTimeoutInSecond?: number 

        ) {
            this.kind = kind ? kind : null;
            this.proxyUser = proxyUser ? proxyUser : null;
            this.driverMemory = driverMemory ? driverMemory : null;
            this.driverCores = driverCores ? driverCores : null;
            this.executorMemory = executorMemory ? executorMemory : null;
            this.executorCores = executorCores ? executorCores : null;
            this.numExecutors = numExecutors ? numExecutors : null;
            this.name = name ? name : null;
            this.heartbeatTimeoutInSecond = heartbeatTimeoutInSecond ? heartbeatTimeoutInSecond : null; 
        }
}
