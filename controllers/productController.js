const { Category, Product, Status } = require("../models");

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll({
        include: [Category, Status],
      });
      res.status(200).json({ products });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: [Category, Status],
      });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ product });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getSellableProducts(req, res) {
    try {
      const products = await Product.findAll({
        include: [
          Category,
          {
            model: Status,
            where: { name: "bisa dijual" },
          },
        ],
      });
      res.status(200).json({ products });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async createProduct(req, res) {
    try {
      const { id_produk, nama_produk, harga, kategori_id, status_id } =
        req.body;
      const product = await Product.create({
        id_produk,
        nama_produk,
        harga,
        kategori_id,
        status_id,
      });

      const productWithRelations = await Product.findByPk(id_produk, {
        include: [Category, Status],
      });

      res.status(201).json({ product: productWithRelations });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { nama_produk, harga, kategori_id, status_id } = req.body;

      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await product.update({
        nama_produk,
        harga,
        kategori_id,
        status_id,
      });

      const updatedProduct = await Product.findByPk(id, {
        include: [Category, Status],
      });

      res.status(200).json({ product: updatedProduct });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      await product.destroy();
      res.status(200).json({ message: "Product has been deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = ProductController;
