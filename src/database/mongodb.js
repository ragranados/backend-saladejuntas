//const { MongoClient } = require("mongodb");
const Mongoose = require("mongoose");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME;

const uri = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`

const connect = async () => {
    try {
        await Mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("Connection succesfull");
    } catch (error) {
        console.log("Connection failed", error);
        process.exit(1);
    }
};

/**
 * Disconnect method
 */
const disconnect = async () => {
    try {
        await Mongoose.disconnect();
        console.log("Database disconnected");
    } catch (error) {
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconnect
}
