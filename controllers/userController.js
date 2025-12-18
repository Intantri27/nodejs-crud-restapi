import db from "../config/db.js";

export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error" });
        }
        res.json(results);
    });
};
//isi data
export const saveUser = (req, res) => {
    const { nama, email, password } = req.body;

    db.query(
        "INSERT INTO users (nama, email, password) VALUES (?, ?, ?)",
        [nama, email, password],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            res.json({ id: results.insertId, nama: nama, email: email});
        }
    )
};

//show data by id
export const getUserById = (req, res) => {
    const {id} = req.params;
    db.query("SELECT * FROM users WHERE ID = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err});
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "User not found"});
        }
        res.json(results[0]);
    });
};

//update data
//sql?UPDATE users set nama=?, email=?, password=? WHERE ID=?
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { nama, email } = req.body;
    db.query(
        "UPDATE users SET nama=?, email=? WHERE ID=?",
        [nama, email, id],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            res.json({ message: "update berhasil" });
        }
    );
};

//hapus data
export const deleteUser = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE ID=?", [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        res.json({ message: "User deleted successfully" });
    });
}
