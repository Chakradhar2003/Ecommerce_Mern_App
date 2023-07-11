const router = require("express").Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);



router.post("/payment", (req, res) => {
    stripe.paymentIntents.create(
        {

            amount: req.body.amount,
            currency: "usd",
            payment_method_types: ['card'],
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                return res.status(500).json(stripeErr);
            } else {
                return res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;