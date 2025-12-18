import db from "../config/db.js";

// get all categories
export const getCategories = (req, res) => {
    db.query("SELECT * FROM categories", (err, results) => {
        if (err) {
            return res.status(500).json({ message: "internal server error" });
        }
        res.json(results);
    });
};

//isi data
export const saveCategory = (req, res) => {
    const { name } = req.body;

    db.query(
        "INSERT INTO categories (name) VALUES (?)",
        [name],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            res.json({
                id: results.insertId,
                name: name,
                message: "Category berhasil ditambahkan"
            });
        }
    );
};

//get category by id
export const getCategoryById = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM categories WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "Category tidak ditemukan" });
        }
        res.json(results[0]);
    });
};

//update category
export const updateCategory = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    db.query(
        "UPDATE categories SET name = ? WHERE id = ?",
        [name, id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });
            res.json({ message: "Category berhasil diupdate" });
        }
    );
};
// Delete category
export const deleteCategory = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM categories WHERE id=?", [id], (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json({ message: "Category berhasil dihapus" });
  });
};