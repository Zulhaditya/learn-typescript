interface Point {
  x: number;
  y: number;
}

// partial mengizinkan x dan y menjadi opsional
let pointPart: Partial<Point> = {};
pointPart.x = 10;
console.log(pointPart);

// required: semua property di object menjadi wajib/dibutuhkan
interface Mobil {
  make: string;
  model: string;
  mileage?: number;
}

let mobilSaya: Required<Mobil> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // menjadi wajib diisi
}

console.log(mobilSaya.mileage);

// record
const namaDanUmur: Record<string, number> = {
  'Ackxle': 24,
  'Inayah': 23
}

// omit: menghapus keys dari sebuah object
interface Orang {
  nama: string;
  umur: number;
  lokasi?: string;
}

const apis: Omit<Orang, 'umur' | 'lokasi'> = {
  nama: 'Hapizulhaditya'
}

// pick: menghapus semua key dan pilih satu saja
interface Manusia {
  nama: string;
  umur: number;
  lokasi?: string;
}

const nay: Pick<Manusia, 'nama'> = {
  nama: 'Inayah',
}

// return
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// parameter
type PointPrinter = (p: { x: number; y: number; }) => void;
const pointPrinter: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};


