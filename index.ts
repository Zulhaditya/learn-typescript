// cara buat project dan eksekusi file:
// 1. npm install typescript --save-dev
// 2. npx tsc --init (membuat file tsconfig.json)
// 3. ts-node nama-file.ts (jalankan program)

// deklarasi variabel secara eksplisit / kita tentukan terlebih dahulu tipe datanya
let firstName: string = "Ackxle";
firstName = "Lexiria";
console.log(`Your name is ${firstName}`);

// deklarasi variabel secara implisit / kita tidak tentukan tetapi user
let lastName = "Inayah";
console.log(`Your name is ${lastName}`);

// simple function
function greet(name: string): string {
  return `Hello, ${name}! Welcome back to typescript baby.`;
}

console.log(greet("Zulhaditya"))

const json = JSON.parse("55");
console.log(typeof json);

