const { MongoClient } = require("mongodb");
require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ix1iyof.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri);
console.log(uri)
async function run(){
    try {
       await client.connect()
        console.log('mongo connected'.bold.green)
    } catch (error) {
        console.log(error.name.bgRed, error.message.yellow)
    }
};

module.exports = {run, client}