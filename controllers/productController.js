import db from "../config/db.js";

// Get All Products
export const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
        return res.status(500).json({ message: err });
    }
    res.json(results);
  });
};
// Isi data
export const saveProduct = (req, res) => {
    const { category_id, name, price } = req.body;

    db.query(
        "INSERT INTO products (category_id, name, price) VALUES (?, ?, ?)",
        [category_id, name, price],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            res.json({
                id: results.insertId,
                category_id,
                name,
                price,
                message: "Produk berhasil ditambahkan"
            });
        }
    );
};

// Get Product by ID
export const getProductById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
        return res.status(500).json({ message: err });
    }

    if (results.length === 0) {
        return res.status(404).json({ message: "Produk tidak ditemukan" });
    }
    res.json(results[0]);
  });
};

// Update Product
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { category_id, name, price } = req.body;

  db.query(
    "UPDATE products SET category_id = ?, name = ?, price = ? WHERE id = ?",
    [category_id, name, price, id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Produk berhasil diupdate" });
    }
  );
};

// Delete Product
export const deleteProduct = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id=?", [id], (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json({ message: "Produk berhasil dihapus" });
  });
};