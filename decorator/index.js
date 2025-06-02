class DataService{
  processData(data) {
    // Simulate data processing
    return data.map(item => item * 2);
  }
}

// Logger class to log messages
class Logger {
  log(message) {
    console.log(`Log: ${message}`);
  }
}
// Decorator to add logging functionality
class DataServiceWhithLogging {
 constructor(dataService, logger) {
    this.dataService = dataService;
    this.logger = logger;
  }
  processData(data) {
    this.logger.log('Processing data with logging...');
    const result = this.dataService.processData(data);
    this.logger.log('Data processed successfully.');
    return result;
  }
}

// Example usage
const dataService = new DataService();
const logger = new Logger();
const dataServiceWithLogging = new DataServiceWhithLogging(dataService, logger);
const data = [1, 2, 3, 4, 5];
const processedData = dataServiceWithLogging.processData(data);
console.log('Processed Data:', processedData);