# Notes App

Aplikasi Notes App adalah aplikasi sederhana untuk menyimpan catatan. Berikut adalah beberapa petunjuk untuk menjalankan aplikasi ini.

## Dependencies

Sebelum menjalankan aplikasi, pastikan untuk mendownload beberapa dependencies berikut:

- **Nodemon**: Tool utk me-restart server node.js stiap ada perubahan code.
- **Hapi**: Framework web yang digunakan untuk backend.
- **Nanoid**: Library yang digunakan untuk menghasilkan ID unik.
- **ESLint** (opsional): Tool untuk memastikan konsistensi dan kualitas kode.

Untuk menginstall dependencies di atas, jalankan perintah berikut:

```bash
npm init --y
```
```bash
npm install nodemon @hapi/hapi nanoid eslint --save-dev
```

## Running
```bash
npm run start
```

Frontend untuk aplikasi Notes App bisa diakses melalui URL berikut:
http://notesapp-v1.dicodingacademy.com/

Namun, utk menghubungkan frontend dengan backend yg berjalan secara lokal, hrus melakukan perubahan pada port dengan cara change URL:  ```localhost:5000```


