# Gamatechno Component Library using Vue

Gamatechno Component Library adalah sebuah tools berisi kumpulan komponen yang dapat digunakan oleh pengembang aplikasi dari PT Gamatechno Indonesia dalam menyusun layout produk digital yang sedang dikembangkan pada platform web dengan lebih mudah dan cepat.

# Project Setup

- Clone repository ini
- Jalankan npm install
- Jalankan npm run serve
- Jalankan npm run storybook

# How to Create a New Component

- Buat file baru dengan ekstensi .vue pada folder lib-components
- Tambahkan properti name pada section script lalu isi dengan nama komponen yang akan dibuat
- Buat struktur, styling dan behavior komponen di dalamnya
- Import as default komponen pada lib-components/index.js
- Import dan deklarasikan komponen pada dev/serve.vue untuk melihat hasilnya di local environment
- Buat file stories dengan format (Nama Komponen).stories.js di dalam folder stories
- Buat stories untuk komponen yang nantinya akan ditampilkan pada dokumentasi storybook
- Buat file untuk unit test case dengan format (Nama Komponen).spec.js di dalam folder test/unit
- Buat unit test case di dalam file (Nama Komponen).spec.js
- Jalankan perintah npm run test:unit untuk melakukan proses unit testing pada seluruh komponen

# How to Publish New Version

- Jalankan perintah npm run build
- Ubah versi library pada file package.json
- Melakukan registrasi akun baru pada website [npmjs](https://www.npmjs.com/) jika belum memiliki akun
- Jalankan perintah npm login
- Masukkan username dan password dari akun yang sudah dibuat sebelumnya
- Jalankan perintah npm publish
- Masukkan kode OTP jika diperlukan

# Technologies

Tools ini dibangun dengan menggunakan beberapa framework, library, dan package di bawah ini :

| Nama                      | Versi  |
| ------------------------- | ------ |
| Vue                       | 2.6.14 |
| Bootstrap                 | 5.1.3  |
| @storybook/vue            | 6.4.19 |
| @vue/cli-plugin-unit-jest | 4.5.15 |
| @vue/test-utils           | 1.3.0  |
| vue-sfc-rollup            | 4.1.1  |

# License

(c) 2022 PT Gamatechno Indonesia, under MIT License.
