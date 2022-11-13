const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
/*mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, err => {
    if(err) 
        console.log(err);
    } 
);
*/