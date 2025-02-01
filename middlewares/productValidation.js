const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("nama_produk").notEmpty().withMessage("Nama produk harus diisi"),
  body("harga")
    .notEmpty()
    .withMessage("Harga harus diisi")
    .isNumeric()
    .withMessage("Harga harus berupa angka"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateProduct };
