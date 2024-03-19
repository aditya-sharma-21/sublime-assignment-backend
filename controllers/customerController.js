const { Customer } = require("../models/Customer");

module.exports.getNoOfCustomers = async (req, res, next) => {
  try {
    let count = await Customer.countDocuments();
    res.send({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getAllCustomer = async (req, res) => {
  try {
    const { page = 1, per_page = 10, search } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(per_page);
    const limit = parseInt(per_page);
    const query = search
      ? {
          $or: [
            { first_name: new RegExp(search, "i") },
            { last_name: new RegExp(search, "i") },
            { city: new RegExp(search, "i") },
          ],
        }
      : {};

    const customers = await Customer.find(query).skip(skip).limit(limit);
    res.send(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.send(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getCustomerNoByCities = async (req, res, next) => {
  try {
    const cityCounts = await Customer.aggregate([
      { $group: { _id: "$city", count: { $sum: 1 } } },
    ]);
    res.send(cityCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.createCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);
    return res.send(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.editCustomer = async (req, res, next) => {
  try {
    const { first_name, last_name, city, company } = req.body;
    const file = req.file;

    const filePath = file ? "/uploads/" + file.filename : null;

    let updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      { first_name, last_name, city, company, file: filePath },
      { new: true }
    );

    res.send(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: "Error editing customer" });
  }
};
