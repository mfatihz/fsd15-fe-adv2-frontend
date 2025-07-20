# CHILL App Adv 12

Aplikasi ini dilengkapi dengan [backend](https://github.com/mfatihz/fsd15-fe-adv2-backend)

setting .env:  
    ```
    VITE_API_URL=http://localhost:5000/api
    ```
    
untuk menjalankan aplikasi:  
    ```
    npm run dev
    ```
    
Paradigma desain: [atomic design](https://github.com/mfatihz/fsd15-intermediate-1/blob/main/README.md)  

Stack: (Vite + React + React Router + tailwind) + (axios + zustand) + (RTK Query)


Step 3. Implementasi State management
menyimpan hasil get data dari API ke state management
- [ ] Pasang library Redux Toolkit dan React Redux
	```
	npm install @reduxjs/toolkit react-redux
	```
- [ ] Buat folder store/redux
- [ ] Buat file store.js dalam folder store/redux
- [ ] Buat file reducer. Isi: Initial State (array kosong yang akan diisi dengan data API), Reducer (menangani data API dan menyimpannya ke dalam state global)
- [ ] Daftarkan reducer ke store.js
- [ ] Hubungkan store.js ke root aplikasi menggunakan Provider

Step 4. Mengintegrasikan data APi ke komponen
1. Integrasi Get Data
	- [ ] Gunakan fungsi Get API dari folder services/api
	- [ ] Panggil reducer untuk mendapatkan data
	- [ ] Tampilkan data di component ListView menggunakan useSelector yang digunakan untuk mengambil data dari state Redux
	```
	import {useSelector} from 'react-redux';
	import {getData} from './services/api';
	```

2. Integrasi Edit, Add, dan Delete:
	- [ ] Add: gunakan fungsi Add API dari folder services/api untuk menambahkan data baru
	- [ ] Edit: memperbarui data.
	- [ ] Delte: menghapus data.

Poin Penilaian
- [ ] Mengimplementasikan State Management

# Fitur App
- [x] Masuk
      > implement login (user: admin password: admin) with fake auth
- [x] Daftar
- [x] Beranda
- [x] Daftar Saya
      > ProtectedRoute, user harus login
- [x] Series
- [x] Film
- [x] Popup Series
- [x] Popup Film
- [ ] Tonton
- [ ] Premium
- [ ] Popup Premium
- [ ] Profil
- [ ] Paket
- [ ] Pembayaran
- [ ] Tunggu Pembayaran
