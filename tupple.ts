// tuple: array yang telah didefinisikan panjang dan tipe data setiap indexnya

let ourTuple: [number, boolean, string];
ourTuple = [7, true, 'ackxle']; // benar
// ourTuple = [true, 'inayah', 'ackxle']; // salah karena tidak cocok tipe datanya
console.log(ourTuple);

// readonly di tuple juga direkomendasikan
let mahasiswa: readonly [string, number, boolean];
// mahasiswa1 = ['inayah', 31, true];
// mahasiswa.push('tidak bisa karena tipe datanya readonly');
