const shortid = require('shortid');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const UsersHelper = require('../../models/helpers/users.helper');
const usersHelper = new UsersHelper();

class UsersController {
    constructor() {}
    getUser(req, res) {
        usersHelper.findUser(req.query, { _id: 0, password: 0 })
            .then(userInfos => {
                res.status(200).json({
                    success: true,
                    data: userInfos,
                    message: 'User information retrieved successfully.'
                });
            })
            .catch(userInfoErr => {
                res.status(400).json({
                    success: false,
                    data: userInfoErr,
                    message: 'Failed to retrieve user information.'
                });
            });

    }
    listUser(req, res) {
        usersHelper.findAll({}, {})
            .then(userList => {
                res.status(200).json({
                    success: true,
                    data: userList,
                    message: "User List retrieved successfully."
                })
            })
            .catch(err => {
                res.status(400).json({
                    success: false,
                    data: err,
                    message: 'Faild to get user list.'
                })
            })
    }
    createUser(req, res) {
        let saveObj = {
            user_id: shortid.generate(),
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: '',
            created_at: new Date(),
            updated_at: new Date()
        };
        saveObj.password = crypto.createHmac(config.userAuths.algorithm, config.userAuths.secretKey).update(req.body.password).digest('hex');
        usersHelper.saveUser(saveObj)
            .then(userInfo => {
                res.status(200).json({
                    success: true,
                    data: userInfo,
                    message: "user has been saved successfully."
                })
            })
            .catch(err => {
                res.status(400).json({
                    success: false,
                    data: err,
                    message: "Faild to creat user."
                })
            })

    }
    editUser() {

    }
    loginUser(req, res) {
        usersHelper.findUser({ email: req.body.email }, {})
            .then(userInfos => {
                if (userInfos._id) {
                    let userPassword = crypto.createHmac(config.userAuths.algorithm, config.userAuths.secretKey)
                        .update(req.body.password)
                        .digest('hex');

                    if (userInfos['password'] === userPassword) {
                        let userInfo = userInfos;
                        let jwtSignData = {
                            userId: userInfo._id,
                            email: userInfo.email,
                        };

                        let jwtSignOptions = {
                            expiresIn: config.jwt.expireTime,
                            algorithm: config.jwt.algorithm
                        };

                        let authToken = jwt.sign(jwtSignData, config.jwt.secretKey, jwtSignOptions);

                        res.status(200).json({
                            success: true,
                            data: {
                                firstName: userInfo.first_name,
                                lastName: userInfo.last_name,
                                shortUserId: userInfo.short_user_id,
                                email: userInfo.email,
                                authToken: authToken
                            },
                            message: 'User logged in successfully.'
                        });
                    } else {
                        res.status(400).json({
                            success: false,
                            data: {},
                            message: 'Password does not match.'
                        });
                    }
                } else {
                    res.status(400).json({
                        success: false,
                        data: {},
                        message: 'Email does not exist.'
                    });
                }
            })
            .catch(userInfoErr => {
                res.status(400).json({
                    success: false,
                    data: userInfoErr,
                    message: 'Failed to retrieve user information.'
                });
            });
    }

}
module.exports = UsersController;