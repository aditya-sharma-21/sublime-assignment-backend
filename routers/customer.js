const express = require("express");
const {
  getAllCustomer,
  createCustomer,
  getCustomerById,
  getCustomerNoByCities,
  getNoOfCustomers,
  editCustomer,
} = require("../controllers/customerController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public/uploads")); // Save uploaded files to public/uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Append timestamp to filename
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/count-of-customer", getNoOfCustomers);

router.get("/get-all-customers", getAllCustomer);

router.get("/get-customer-details/:id", getCustomerById);

router.get("/get-customer-by-city", getCustomerNoByCities);

router.post("/add-customer", createCustomer);

router.post("/edit-customer/:id", upload.single("file"), editCustomer);

module.exports = router;
