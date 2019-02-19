const FileSaver = require("./fileSaver");
const MyLogger = require("./myLogger");

const myLogger = new MyLogger();
const myFileSaver = new FileSaver();

myFileSaver.init(null);

//create event listener
myLogger.on('tag', (data) => {
	console.log("logging : ", data);
	//saving logs into file
	myFileSaver.save(data);
});



myLogger.log("yyytfffttyy");
