# Gamatechno Component Library using Vue

Gamatechno Component Library adalah sebuah tools berisi kumpulan komponen yang dapat digunakan oleh pengembang aplikasi dari PT Gamatechno Indonesia dalam menyusun layout produk digital yang sedang dikembangkan pada platform web dengan lebih mudah dan cepat.

## Setup Proyek

- Clone repository ini
- Jalankan perintah npm install
- Jalankan perintah npm run serve
- Jalankan perintah npm run storybook

## Membuat komponen baru

- Buat file baru dengan ekstensi .vue pada folder lib-components
- Tambahkan properti name pada section script
- Buat struktur, styling dan behavior komponen
- Import as default komponen pada lib-components/index.js
- Import dan deklarasikan komponen pada dev/serve.vue
- Buat file stories dengan format (Nama Komponen).stories.js di dalam folder stories
- Buat stories untuk komponen yang sedang dibuat
- Buat file untuk unit test case dengan format (Nama Komponen).spec.js di dalam folder test/unit
- Buat unit test case untuk komponen yang sedang dibuat
- Jalankan perintah npm run test:unit

## Mengubah komponen yang sudah ada

- Buat perubahan untuk komponen pada folder lib-components
- Tambahkan test case baru untuk perubahan yang dilakukan pada komponen (jika ada)
- Tambahkan perubahan pada komponen ke dalam file stories komponen

## Mempublikasikan versi terbaru

- Jalankan perintah npm run build
- Ubah versi library pada file package.json
- Melakukan registrasi akun baru pada website [npmjs](https://www.npmjs.com/) jika belum memiliki akun
- Jalankan perintah npm login
- Masukkan username dan password dari akun npm
- Jalankan perintah npm publish
- Masukkan kode OTP jika diperlukan

## Teknologi yang digunakan

Tools ini dibangun dengan menggunakan beberapa framework, library, dan package di bawah ini :

| Nama                      | Versi  |
| ------------------------- | ------ |
| Vue                       | 2.6.14 |
| Bootstrap                 | 5.1.3  |
| @storybook/vue            | 6.4.19 |
| @vue/cli-plugin-unit-jest | 4.5.15 |
| @vue/test-utils           | 1.3.0  |
| vue-sfc-rollup            | 4.1.1  |

## Lisensi

(c) 2022 PT Gamatechno Indonesia, under MIT License.
