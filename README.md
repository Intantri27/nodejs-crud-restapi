nodejs-crud-restapi: REST API sederhana menggunakan Node.js, Express.js, dan MySQL dengan fitur CRUD Categories dan Products. API menggunakan format JSON dan menerapkan relasi foreign key antara tabel categories dan products.
Teknologi yang digunakan: Node.js, Express.js, MySQL, mysql2, Postman.
Nama database: aplikasi_kasir dengan tabel categories (id, name, created_at, updated_at) dan products (id, category_id, name, price, created_at, updated_at).

----------------------------------------------------------------------------

Dalam project ini, Node.js digunakan sebagai runtime, Express.js sebagai framework backend, dan MySQL sebagai database. 
Struktur folder dibuat terpisah antara konfigurasi database, controller, dan routes supaya alur kode lebih rapi dan mudah dipahami. Semua data yang dikirim dan diterima oleh API menggunakan format JSON.
Untuk menjalankan aplikasi, butuh install dependency menggunakan npm lalu jalankan server. Setelah server aktif, API bisa diakses melalui Postman menggunakan endpoint yang sudah disediakan. 
Endpoint tersebut mendukung method GET, POST, PUT, dan DELETE sesuai dengan kebutuhan pengelolaan data.
Aplikasi ini memiliki dua data utama yaitu categories dan products. Data category harus dibuat terlebih dahulu sebelum menambahkan product karena product terhubung ke category melalui relasi database. 
Seluruh fitur API diuji menggunakan Postman untuk memastikan setiap request dan response berjalan dengan baik.
