const nama: string[] = [];
nama.push("Ackxle");
nama.push("Inayah");
nama.push("Zulhaditya");

console.log(nama);

// readonly: mencegah array untuk diubah
const anime: readonly string[] = ["Naruto"];
// anime.push("Halo"); // tidak bisa dilakukan

// type inference: menyesuaikan tipe data
const angka = [1, 2, 3];
angka.push(4); // tidak error karena tipe datanya int
// angka.push("5") // error karena tipe data tidak cocok
let head: number = angka[0];
console.log(head);

