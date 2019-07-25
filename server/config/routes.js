const review = require('../controllers/controllers');

module.exports = (app) => {
    

        app.get('/review', function(req, res) {
        review.getAll(req, res);
    })

    // app.put("/review/:id/like", review.addLike)
    app.get("/review/:id", review.getOne)
    app.post("/review", review.create)
    app.post("/review/:id", review.update)
    app.delete("/review/:id", review.delete)
};
