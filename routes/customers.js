module.exports = (server) => {
    server.get('/customers', function (req, res, next) {
        res.send({"kundenr": "Matt0698", "navn": "Matt Thomassen"});
        return next();
    });
};