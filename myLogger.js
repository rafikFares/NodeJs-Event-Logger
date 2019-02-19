const events = require("events");
const uuid = require("uuid");


class MyLogger extends events {

	log(message){
		this.emit('tag', {
			id : uuid.v4(),
			message : message
		});
	}


}

module.exports = MyLogger;
