# CHILL App Adv 2

Aplikasi ini dilengkapi dengan [backend](https://github.com/mfatihz/fsd15-fe-adv2-backend)

- Setting .env:  
    ```
    VITE_API_URL=http://localhost:5000/api
    ```
    
- Untuk menjalankan aplikasi:  
    ```
	npm run dev
	```  

Paradigma desain: [atomic design](https://github.com/mfatihz/fsd15-intermediate-1/blob/main/README.md)  

Stack: (Vite + React + React Router + tailwind) + (axios + zustand) + (React Redux + RTK Query)


Step 3. Implementasi State management
menyimpan hasil get data dari API ke state management
- [x] Pasang library Redux Toolkit dan React Redux
	```
	npm install @reduxjs/toolkit react-redux
	```
- [x] Buat folder store/redux
- [x] Buat file store.js dalam folder store/redux
- [ ] Buat file reducer. Isi: Initial State (array kosong yang akan diisi dengan data API), Reducer (menangani data API dan menyimpannya ke dalam state global)
- [ ] Daftarkan reducer ke store.js
- [x] Hubungkan store.js ke root aplikasi menggunakan Provider
	> Done: use React Redux + RTK Query  

Step 4. Mengintegrasikan data API ke komponen
1. Integrasi Get Data
	- [x] Gunakan fungsi Get API dari folder services/api
	- [ ] Panggil reducer untuk mendapatkan data
	- [ ] Tampilkan data di component ListView menggunakan useSelector yang digunakan untuk mengambil data dari state Redux
	```
	import {useSelector} from 'react-redux';
	import {getData} from './services/api';
	```
	> Done: use RTK Query
2. Integrasi Edit, Add, dan Delete:
	- [ ] Add: gunakan fungsi Add API dari folder services/api untuk menambahkan data baru
	- [ ] Edit: memperbarui data.
	- [ ] Delte: menghapus data.  
	> Done: use GET untuk mendapatkan data galleries dan PUT untuk membuat/mengubah "Data Saya"

Poin Penilaian
- [x] Mengimplementasikan State Management
	> Done: use various methods: React Redux + RTK Query + Zustand + custom Hook

# Fitur App
- [x] Masuk  
	> Update: implement Login with fake auth (user: admin password: admin)  
	> User harus Login agar dapat mengakses "Daftar Saya", menggunakan tombol "Check" pada Hover Card dan "Add" pada Popup Card.
- [x] Daftar
- [x] Beranda
- [x] Daftar Saya  
- [x] Series  
- [x] Film  
- [x] Popup Series  
- [x] Popup Film  
- [ ] Tonton
- [ ] Premium  
    > on progress
- [ ] Popup Premium
- [ ] Profil
- [ ] Paket
- [ ] Pembayaran
- [ ] Tunggu Pembayaran
