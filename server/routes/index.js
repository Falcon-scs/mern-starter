module.exports = function(app) {
    app.use('/users', require('../controllers/users'));
    // app.use('categories', userAuth, require('../controllers/categories'));
    // app.use('contents', userAuth, require('../controllers/contents'));

    //middleware
    function userAuth(req, res, next) {
        let headerToken = req.headers.token;
        let jwtSecretKey = config.jwt.secretKey;
        let jwtAlgorithm = { algorithms: config.jwt.algorithm };
        jwt.verify(headerToken, jwtSecretKey, jwtAlgorithm, (err, decoded) => {
            if (err) {
                res.status(401).send({ success: false, message: 'Login is Required!' });
            } else {
                req.headers.userId = decoded.userId;
                req.headers.email = decoded.email;
                next();
            }
        });
    }
}