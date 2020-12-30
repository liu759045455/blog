
const express = require("express");
const router = express.Router();
const svgCaptcha = require('svg-captcha');

let captchaVal = "";

router.get('/captcha', (req, res) => {
    let captcha = svgCaptcha.create({
        size: 4,
        noise: 3,
        ignoreChars: '0o1i',
        color: true
    });
    req.session.captcha = captcha.text.toLowerCase();
    captchaVal = req.session.captcha;
    console.log(captchaVal)
    res.type('svg');
	res.status(200).send(captcha.data);
})



function validateCaptcha(req, res, next) {
    //得到用户传递的验证码
    const reqCaptcha = req.body.captcha ? req.body.captcha.toLowerCase() : "";
    console.log(reqCaptcha)
    if(reqCaptcha !== req.session.captcha) {
        res.send({
            code: 401,
            msg: "验证码错误"
        })
    } else {
        next();
    }

    req.session.captcha = "";
}

router.post('/comment', validateCaptcha)


module.exports = router;