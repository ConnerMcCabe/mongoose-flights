const Flight = require('../models/flights');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req, res) {
    res.render('flights/index', {flights, title: 'All Flights'});
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {
                title: `${flight.airline} Flight ${flight.flightNo}`,
                flight,
                tickets
            });
        })
    })
}
function newFlight(req, res) {
    res.render('flights/new', {title: 'New Flight'});
}
function create(req, res) {
    Flight.create(req.body)
    res.redirect('/flights')   
}