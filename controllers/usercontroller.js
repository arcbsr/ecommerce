const User = require('../models/User');
var otpGenerator = require('otp-generator')
const mongoose = require('mongoose');


const login = (req, res) => {
    const user = new User(req.body);
    user.code = otpGenerator.generate(6, { digits: true, specialChars: false, alphabets: false, upperCase: false });
    if (!user.phone) {
        res.send("Error")
    }
    User.findOne({ phone: user.phone }, function (err, docs) {
        if (err) {
            res.send(err);
        }
        else {
            if (docs) {
                sendToUserOtpVerify({id:docs._id}, res);
            } else {
                user.save()
                    .then(result => {
                        sendToUserOtpVerify({id:result._id},res);
                    })
                    .catch(err => {
                        res.send(err);
                    });
                //res.send(docs);
            }
        }
    });
}

function sendToUserOtpVerify(datas, res) {
    var response = {msg:"ok", data: datas};
    res.send(response);
}

module.exports = {
    login,

}