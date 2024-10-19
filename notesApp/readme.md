nodemon: agar tidak running 'npm run start' tiap perubahan

eslint format dicoding: https://github.com/dicodingacademy/javascript-style-guide

frontEnd noteApp: http://notesapp-v1.dicodingacademy.com/

postman: untuk testing back end (bisa manual satu2 (get, put, dll) atau bisa collection/sekaligus dengan menggunakan collection (hrus set up enviroiment dlu))

Mulai dari Maret 2023, pengguna gratis Postman versi 10.x.x memiliki batasan dalam menjalankan Postman Collection melalui UI sebanyak 25 kali dalam sebulan. Jika Anda sudah mencapai batasan tersebut, tetapi masih perlu menjalankan collection, terdapat dua solusi yang bisa Anda ambil.
1. (Rekomendasi) Jalankan Postman Collection secara terprogram menggunakan Postman CLI atau Newman.
2. Gunakan Postman versi 9 stabil yang dapat diunduh melalui tautan: https://dl.pstmn.io/download/version/9.31.0/win64

#### cara testing pake newman (kalau misal limit)
1. export collection & enviroinment dari postman (yg udh dibikin)
2. install newman: `npm install newman --g`
3. pastikan app dlm keadaan running `npm run start`
4. jalankan collection & enviroinment yg sdh di export `newman run <<notes-api-test.postman_collection.json --environment notes-api-test.postman_environment.json>></notes-api-test.postman_collection.json>`