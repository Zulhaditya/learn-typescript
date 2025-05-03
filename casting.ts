// casting dengan keyword as
// casting tidak sepenuhnya mengubah tipe data dari sebuah variabel
// hanya untuk tipe data sejenis saja
let x: unknown = 'hello';
console.log((x as string).length);

// casting dengan keyword <>
let a: unknown = 'world';
console.log((<string>x).length);
