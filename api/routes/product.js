const router = require("express").Router();



const Product = require("../models/Product");
const { verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }

})

//delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
})

//get product
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all products
router.get("/", async (req, res) => {
    const qnew = req.query.new; //mtlb agar tune url mein new=true ya fir category=man
    const qcategory = req.query.category;

    try {
        let products;
        if (qnew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);

        } else if (qcategory) {
            products = await Product.find({
                categories: {
                    $in: [qcategory],
                },
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
