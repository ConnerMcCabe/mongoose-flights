const Flight = require('../models/flights');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req, res) {
    res.render('flights/index', )
}
function show(req, res) {

}
function newFlight(req, res) {
    res.render('flights/new');
}
function create(req, res) {
    let flight = new Flight;
    
}