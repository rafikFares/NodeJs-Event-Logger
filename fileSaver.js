const fileSystem = require("fs");

const logFileName = "log";
const logFileDelimitter = ".txt";
var currentIsoDate;
var logFile;

class FileSaver {

	init(data){
		console.log("initializing...");
		// Update variables 
		currentIsoDate = new Date().toISOString().split('T')[0];
		logFile = logFileName + currentIsoDate + logFileDelimitter;

		// Check if the file exists in the current directory, and if it is writable.
		fileSystem.access(logFile, fileSystem.constants.F_OK | fileSystem.constants.W_OK, (err) => {
		  if (err) {
		    if (err.code === 'ENOENT') {
		    	//create file 
				fileSystem.writeFile(logFile, data === null ? "starting..." + "\n" : JSON.stringify(data), (err) => {
					if (err) {
						throw err;
					}else{
						console.log("File created !");
					}
				});
		    }else{
		    	console.log('file is read-only');
		    }
		  } else {
		    console.log("file already exists, and it is writable");
		  }
		});
	}

	save(data){
		// Check if we need a new file log for today
		if (new Date().toISOString().split('T')[0] === currentIsoDate) {
			fileSystem.appendFile(logFile, JSON.stringify(data) + "\n", (err) => {
					if (err) {
						throw err;
					}else{
						console.log("Saving... ");
					}
				});
		}else{
			this.init(data);
		}
		
	}

}

module.exports = FileSaver;