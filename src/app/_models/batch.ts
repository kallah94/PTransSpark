/**
 * {@param file} path  	File containing the application to execute @requires true
 * {@param args} Command line arguments for the application @typedef list[string]
 * {@param driverMemory} Amount of memory to use for the driver process @typedef string
 */
export interface IBatchSession {
  file?: string;
  args?: string[];
  driverMemory?: string;
  driverCores?: number;
  executorMemory?: string;
  numExecutors?: number;
  name?: string;
}

export class BatchSession implements IBatchSession {
  constructor(
    public file?: string,
    public args?: string[],
    public driverMemory?: string,
    public driverCores?: number,
    public executorMemory?: string,
    public numExecutors?: number,
    public name?: string
  ) {
    this.file = file ? file : null;
    this.args = args ? args : null;
    this.driverMemory = driverMemory ? driverMemory : null;
    this.driverCores = driverCores ? driverCores : null;
    this.executorMemory = executorMemory ? executorMemory : null;
    this.numExecutors = numExecutors ? numExecutors : null;
    this.name = name ? name : null;
  }
}
