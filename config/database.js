const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connection;

const flightSchema = new Schema({
    airline: String,
//enum to include 'American', 'Southwest' & 'United'
    flightNo: Number,
//Between 10 and 9999
    departs: Date,
//default One year from date created


});
// Create a destinationSchema that will provide the structure for destination subdocuments with the following properties
const destinationSchema = new Schema({

    airport: String,
//enum to include 'AUS', 'DAL', 'LAX' & 'SEA
    arrival: Date,

});
mongoose.connect('mongodb://localhost/movies',
    {useNewUrlParser: true, useCreateIndex: true});

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});