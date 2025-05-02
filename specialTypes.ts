// any: disable type checking dan semua tipe data bisa digunakan
let v: any = true;
v = "string";
Math.round(v);

// unknown: sama seperti any, tetapi lebih aman
let w: unknown = 1;
w = "string"; // tidak terjadi error
w = {
  runAnExistentMethod: () => {
    console.log("Jalankan sebagai method.");
  }
} as { runAnExistentMethod: () => void }

if (typeof w === 'object' && w !== null) {
  (w as { runAnExistentMethod: Function }).runAnExistentMethod();
}

// never: sangat efektif untuk throw error saat didefinisikan
// let x: never = true;

// undefined: sama fungsinya dengan javascript
let y: undefined = undefined;
let z: null = null;
