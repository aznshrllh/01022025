const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("id_produk").notEmpty().withMessage("ID Produk harus diisi"),

  body("nama_produk").notEmpty().withMessage("Nama produk harus diisi"),

  body("harga")
    .notEmpty()
    .withMessage("Harga harus diisi")
    .isNumeric()
    .withMessage("Harga harus berupa angka"),

  body("kategori_id")
    .notEmpty()
    .withMessage("Kategori harus diisi")
    .isInt()
    .withMessage("Kategori harus berupa angka"),

  body("status_id")
    .notEmpty()
    .withMessage("Status harus diisi")
    .isInt()
    .withMessage("Status harus berupa angka"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateProduct };
