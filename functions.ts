// return type
function waktuSekarang(): number {
  return new Date().getTime();
}

// void type: fungsi yang tidak mengembalikan nilai
function printHello(): void {
  console.log('halow!');
}

printHello();

// parameter: sama seperti deklarasi variabel
// jika tidak ada parameter yang ditambahkan otomatis menggunakan any
function perkalian(a: number, b: number) {
  return a * b;
}

// ?: parameter opsional
function penjumlahan(a: number, b: number, c?: number) {
  return (a + b + (c || 0));
}

console.log(penjumlahan(1, 2, 3));

penjumlahan(1, 2);

// parameter yang diberi nama
function pembagian({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

// rest parameter
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(10));
