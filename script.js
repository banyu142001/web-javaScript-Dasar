/** FUNGSI - FUNGSI DASAR PADA JAVASCRIPT
 -  memunculkan popup di halaman  web
    contoh : alert('Halo ! Bayu')
             akan menampilkan popup dengan tulisan Halo ! Bayu 

- console.log() adalah fungsi untuk mencetak atau menampilkan pesan
        atau nilai variabel di konsole (web browser)
        contoh : console.log("Hello World!!");

 - () memunculkan popup yang berisi inputan
        prompt("Masukkan Nama Lengkap : ");
 */

/** VARIABEL PADA JAVASCRIPT
    Variabel merupakan sebuah wadah atau tempat penyimpanan untuk
    menyimpan sebuah nilai atau data.

    var = deklarasi variabel cara lama
    let = deklarasi variabel terbaru (recomendee)
    const = deklarasi variabel dengan nilai tetap (constanta)

    let nama = prompt("Mauskan Nama anda :  ");
    let usia = prompt("Masukan Usia anda :  ");
    let pekerjaan = prompt("Mausukan Pekerjaan anda :  ");

    // via alert
    alert("Nama Saya adalah : " + nama);
    alert("Usia Saya adalah : " + usia);
    alert("Pekerjaan saya adalah : " + pekerjaan);

    // via console
    console.log("DATA DIRI USER \n");
    console.log("Nama Lengkap : " + nama);
    console.log("Usia : " + usia + " Tahun");
    console.log("Pekerjaan  : " + pekerjaan);

 */

/** TIPE DATA PADA JAVASCRIPT
    Tipe data adalah konsep yang menjelaskan jenis nilai apa 
    yang disimpan oleh varibel 

     Ada 5 tipe data dasar (primitf)
     - string / text = menyimpan data text
     - integer / angka = menyimpan data berupa angka bilangan bulat dan desimal
     - boolean / logika = hanya memiliki dua nilai yaitu true(benar) dan false(salah)
     - undifined / belum ditetapkan 
     - null = tidak ada nilai secara sengaja

     let nama = "Bayu Gurium"; // strning / text
    let usia = 24; // intenger / angka
    let benar = true; // booleen true/false
    let tinggiBadan = 169;
    let beratBadan; // tipedat aundifined / belum ditetapkan
    let pacar = null; // tidak ada nilai atau kosong

    beratBadan = 60;

    alert(
    `Nama saya ${nama}, usia saya ${usia} tahun, tinggi badan saya ${tinggiBadan} cm, berat badan ${beratBadan} kg, dan pacar saya ${pacar}`
    );

 */

/** PENGKONDISIAN   
    penkondisian memunginkan kita dapat menjlankan program yang kita
    buat sesuai dengan kondisi yang ditentukan 

  * IF ELSE
    if (nilaiAkhir >= 60) {
    IF mengeksekusi blok kode yang koindisinta benar (true)
    console.log("Anda LULUS");
    } else {
    // else mengeksekusi blok kode yang kondisinya salah (false)
    console.log("TIDAK LULUS");
    }

   * SWITCH CASE

    let hari = "Senin";
    let kegiatan;

    switch (hari) {
    case "Sabtu":
    case "Minggu":
        kegiatan = "Liburan";
        break;
    case "Senin":
        kegiatan = "Rapat";
        break;
    case "Jumat":
        kegiatan = "Santai";
        break;
    default:
        kegiatan = "Bekerja";
    }
    console.log(`Kegiatan hari ini adalah : ${kegiatan}`);

    * APLIKASI CEK SALDO SEDERHANA 

    let saldoAwal = 50,000;
    let saldoTambahan = 80,000;
    let username = "Bayu";
    let password = 12345;
    const saldoAkhir = saldoAwal + saldoTambahan;

    let username2 = prompt("Masukkan Username : ");
    let password2 = prompt("Masukkan Password : ");

    if (username2 == username && password2 == password) {
    alert(
        `Hallo ${username2} , saldo awal saya adalah Rp. ${saldoAwal}, saldo tambahan saya sebesar Rp. ${saldoTambahan}, dan total saldo saya sebesar Rp.${saldoAkhir}`
    );
    } else {
    alert(`Username  & Password  anda tidak valid!!`);
    }

 */

/** ARRAY
    Adalah sebuah tipe data yang digunakan untuk menyimpan kumpulan  item (nilai)
    dalam satu variabel
 
       let namaDosen = ["Sandika", "Dea Afrizal", "Bayu"];
    * push() untuk manambahkan nilai di dalam array
        namaDosen.push("Yunita", "Aldi", "Egan");
    * sift() untuk menghapus data  array index ke 0
        namaDosen.shift();
   *  pop() untuk menghapus data array index terakhir
        namaDosen.pop();
        console.log(namaDosen);
 */

/** LOOPING / PERULANGAN
    
 * 
*/
