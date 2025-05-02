// ?: boleh tidak dimasukkan valuenya, ditambahkan secara manual diluar
const mobil: { type: string, model: string, year?: number } = {
  type: "Porsche",
  model: "X99",
}
mobil.year = 2009;
console.log(mobil.type);

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "fifty"; // error karena fungsi tersebut menerima number


