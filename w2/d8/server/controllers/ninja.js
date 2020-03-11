module.exports = {
    index: function(req, res) {
        ninjas = [{name:'bob'},{name:'carl'}]
    	req.session.name = 'bob'
        res.json(ninjas);
    },
    create: function(req, res) {
    	// code...
    },
    destroy: function(req, res) {
    	// code...
    }
};