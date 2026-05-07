console.log("Hallo saya belajar Javascript");


// variabel

// let bisa diganti, bisa dikosongkan
// penggunaan let

let fullname = "Nama saya Asep"
fullname = "Nama saya Asep Saefulloh"
console.log(fullname);

// walau tidak ada nilai let tidak akan error, tapi undifined
let gatau;
console.log(gatau);

// constant 
// nilainya ga bisa diganti (akan error), nilainya harus diisi ga bisa undifined
// penggunaan const 

const nama = "fahmi";
console.log(nama);

// console.log(typeof var) akan muncul tipe datanya
// Tipe data
// String => mewakili text

let name = "Fahmi Saefulloh"
let MyName = 'nama saya fahmi'
let bio = `hallo nama saya fahmi`
let kerja = "idnetworkers"

console.log("hallo nama saya " + name + "saya bekerja di " + kerja)
console.log(`Hallo nama saya adalah ${name}, Saya sedang bekerja di ${kerja}`)

// Number
// Integer
// walau string  pakai nilai "number" masih bisa dikalikan (*) dengan number tapi akan gagal kalau metode penjumlahan (+)
let umur = "1";
let angka1 = 12.5;
let angka2 = 13.5;

console.log(angka1 * umur )

let makan = true;
// null artinya kosong yang disengaja dibuat, sedangkan undifined ada nilainya tapi belum diberikan
let test = null
console.log(typeof(makan))

// tipe daya object
let biodata = {
    nama : "Asep",
    umur : 30,
    asal : "Jakarta Timur",
    alamat : {
        rt : "005",
        rw : "003",
        kelurahan : "rawamangun",
        kota : "Jakarta Timur"
    }
}

console.log(biodata)

// cara cepat manggil dari biodata
console.log(`hallo nama saya adalah ${biodata.nama}, saya tinggal di ${biodata.alamat.kelurahan} ${biodata.asal}, saya berumur ${biodata.umur} tahun`)

let buah = ['Mangga', "apel", "jeruk", "nanas"];
console.log(buah[0])

// Operator aritmatik
let a = 20
let b = 15
let c = 30

console.log(a + b) // Penjumlahan
console.log(a - b) // Pengurangan
console.log(a * b) // Perkalian
console.log(a / b) // Pembagian
console.log(a % b) // Modulos (sisa bagi)
console.log(a ** b) // Pangkat
console.log(a + b * c) // Penjumlahan lebih dari 2 angka

// Operator penugasan dan penetapan berkelanjutan
let d = 30
d += 60
// console.log(d)
// hasilnya 90
// 30 + 60 = 90

d -= 10
// console.log(d) 
// hasilnya 80
// 90 - 10 = 80

console.log(d)

// Operator Perbandingan
let banding1 = 200
let banding2 = 300
let banding3 = "300"
console.log(banding1 == banding2) // false
console.log(banding3 == banding2) // true karena nilainya sama
console.log(banding1 === banding2) // false
console.log(banding3 === banding2) // false
console.log(banding3 != banding2) // false
console.log(banding1 != banding2) // true
console.log(banding3 !== banding2) //true

console.log(banding1 < banding2) // true
console.log(banding1 >= banding2) // false

// Operator Logika
let gajian = true;
let libur = false;
let healing = false;

// 1. And
// harus keduanya bernilai true = TRUE
console.log(gajian && healing) // false, karena yang true cuma gajian
console.log(libur && healing) // false, apalagi ini

// jika didepan var/nilai ada !(tanda seru) artinya nilainya dibalikan dari True ke False ataupun sebaliknya

// 2. Or
// jika terdapat 1 nilai true maka = TRUE
console.log(gajian && healing) // true
console.log(libur && healing) // false


// Operator Penjelasan
let age = 17 
let ktp = age >= 17 ? console.log('Kamu boleh bikin KTP') : console.log('Kamu belum dapat izin untuk bikin ktp') // true
// jika ada kondisi lanjutan lagi tambahkan ? (tanda tanya)(kondisi terpenuhi) setelah (boleh bikin ktp) bukan : (titik dua) 
// titik dua itu menunjukkan kalau syarat/kondisi tidak terpenuhi

// Operator Konversi
// Number(nilai) : mengubah menjadi tipe number
// String(nilai) : mengubah menjadi tipe string
// Boolean(nilai) : mengubah menjadi tipe boolean


// if, else, elseif kondisi (nilainya bisa samar itukan 60 > 75)
// Ex. Hasil Nilai
// let nilai = prompt("Berapa nilai kamu?");
// if(nilai >= 60 && nilai < 75) { // Kondisi 1
//   alert("Nilai kamu belum memenuhi KKM");
// } else if (nilai >= 75 && nilai <= 84) { // Kondisi 2
//   alert("Nilai kamu Baik")
// } else if (nilai >= 85 && nilai <= 100) { // Kondisi 3
//   alert("Nilai kamu Luar biasa")
// } else if (nilai < 60 || nilai > 100) { // Kondisi 4
//   alert("Nilai kamu salah")
// } else { // Kondisi 5
//   alert("Kamu salah masukin nilai");
// }

// Switch (nilainya yang sudah spesifik)
// let hari = prompt("Masukkan nama hari");
// switch (hari.toLocaleLowerCase()) { // dikonversi jadi kalo user nulis "SENIN" juga bisa karena, hasilnya akan lowercase karena dicodingan case harinya kecil semua
//     case "senin":
//         alert("masih males kerja")
//         break;

//     case "selasa":
//         alert("kerja normal")
//         break;

//     case "rabu":
//     case "kamis":
//         alert("Semangat capai target")
//         break;

//     case "jumat":
//         alert("Semangat karena mau libur")
//         break;

//     case "sabtu":
//     case "minggu":
//         alert("Saatnya libur!!")
//         break;

//     default:
//         alert("Input yang kamu masukkan salah.")
//         break;
//     }


// Operasi Perulangan (loop)
// 1. for loop

// break = menghentikan paksa nilai perulangan
// continue = melewati angka

for (let i = 0; i <= 10; i++) { // i = 0 artinya start dari 0, i <= 10 artinya pengulangan sampai kurang dari atau sama dengan 10, i++ artinya 1+1+1
    
    if( i === 3) {
        break // operasi break 
    }

    console.log("Saya suka belajar JavaScript, ini materi yang ke-" + i) 
}

// Hitung Mundur
for (let i = 10; i >= 0; i--) {

    if( i % 2 === 0) { // operasi continue
        continue;
    }

    console.log("count down ...", i)
}

let mobil = ["avanza", "mazda", "ertiga", "Honda Jezz"];

for(let i = 0; i < mobil.length; i++ ) {
    console.log("Saya punya mobil", mobil[i]);
}

// 2. while Loop
// contoh Login Password
// let password = "hallojs"
// let input = prompt("Masukkan Password");

// while(password != input) {
//     input = prompt("Password salah, Masukkan kembali!");
// }
// alert("Password Benar.");


// percobaan login jika masukkan password dibatas mencoba 3x user akan diblokir
// let password = ""
// const batas = 3;
// let percobaan = 0;

// while(percobaan <= batas){
//     password = prompt("Masukkkan Password Anda");
//     percobaan++ //saat sekali mencoba, nanti kesempatan percobaan nambah 1

//     // kondisi password yang benar
//     if(password === "belajarjs"){
//         alert("Password benar");
//         break;
//     }

//     if(percobaan === batas) {
//         alert("Kamu sudah nyoba 3 kali, kamu diblokir")
//         break;
    
//     } else {
//         alert("Password salah, Coba lagi sebanyak " + Number(batas - percobaan) +" kali lagi,")
//     }
// }

// Function
// Dengan function, ketika kita merefresh halaman atau sudah berhasil login tidak akan muncul pop-up lagi prompt lagi
// Jangan lupa masukkan nama var function di button login
function login_saya() {
    let password = ""
    const batas = 3;
    let percobaan = 0;

    while(percobaan <= batas){
        password = prompt("Masukkkan Password Anda");
        percobaan++ //saat sekali mencoba, nanti kesempatan percobaan nambah 1

        // kondisi password yang benar
        if(password === "belajarjs"){
            alert("Password benar");
            break;
        }

        if(percobaan === batas) {
            alert("Kamu sudah nyoba 3 kali, kamu diblokir")
            break;
        
        } else {
            alert("Password salah, Coba lagi sebanyak " + Number(batas - percobaan) +" kali lagi,")
        }
    }

}

// Jenis function
// 1. function Biasa
// Yang bagian atas dinamakan parameter
function hallo(param, param2, param3) {
    console.log(`Hallo, selamat ${param}, mas/mba ${param2}, semoga ${param3} selalu`)
}

// Yang bawah ini dinamakan Argumen/isi jwb
hallo("pagi", "asep", "sehat")

// 2. function Expression

const hello = function(nama) {
    //isi function
    return "Hallo selamat pagi, mas/mba " + nama
}

console.log(hello(`asep`))

// 3. Arrow function (cocok untuk yang simpel saja)

const sapa = (nama) => "Hallo selamat malam, mas/mba " + nama;
console.log(sapa(`asep`))


// Perhitungan dengan bangun datar (pakai function)
// Persegi => function biasa
// Segitiga => function expression
// Jajargenjang => arrow function

// Ini yang Persegi pakai function biasa
function persegi(sisi) {
    return sisi * sisi
}
// ini yang buat di button html
function showPersegi() {
    // penggunaan Number untuk konversi dari string jadi number, soalnya prompt itu otomatis string
    let inputSisi = Number(prompt("Masukkan Sisi ... "))
    alert("Luas Persegi adalah = " + persegi(inputSisi))
}

// Ini yang Segitiga pakai function expression
const segitiga = function (alas, tinggi){  //asumsi const kan tidak diubah disini karena "rumus"
return alas * tinggi / 2;
}

function showSegitiga() {
    let inputAlas = Number(prompt("Masukkan Alas ...")) // let kan bisa diubah untuk dimasukkan number
    let inputTinggi = Number(prompt("Masukkan Tinggi ..."))
    alert("Luas Segitiga adalah = " + segitiga(inputAlas, inputTinggi))
}

// Ini yang JajarGenjang pakai arrow function
const jajargenjang = (alas, tinggi) => alas * tinggi
function showJajargenjang() {
    let inputAlas = Number(prompt("Masukkan Alas ..."))
    let inputTinggi = Number(prompt("Masukkan Tinggi ..."))
    alert("Luas Jajargenjang adalah = " + jajargenjang(inputAlas, inputTinggi))
}

// Belajar asyncronus ambil data dari sebuah variabel array

const produk = [
    { id : 1, nama : "sepatu", harga : 250000},
    { id : 2, nama : "sendal", harga : 100000},
    { id : 3, nama : "tas", harga : 300000},
    { id : 4, nama : "sabuk", harga : 50000},
    { id : 5, nama : "topi", harga : 75000},
]

// hanya mengambil data
async function allproduct() {
    await new Promise(resolve => setTimeout(resolve, 3000)) // #1 Jika ingin ada Loading, 3000 itu detik soalnya mdetik
    return produk 
}

// Untuk menampilkan data
async function show() {

    console.log("Sedang menampilkan data ...") // #2 lanjutan untuk loading
    const allData = await allproduct();
    console.log('Berikut data produk', allData)
}
