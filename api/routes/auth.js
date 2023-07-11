const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken")
//register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.Pass_Sec).toString(),
    });
    try {
        const savedUser = await newUser.save(); //saving in database
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});



//login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json("Wrong Credentials");
        const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.Pass_Sec);
        const Orgpassword = hashedPassword.toString(CryptoJs.enc.Utf8);
        if (Orgpassword !== req.body.password) return res.status(401).json("Wrong Credentials");

        const acessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            }, process.env.JWT_SEC, { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc; //destructured
        res.status(200).json({ ...others, acessToken });
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
