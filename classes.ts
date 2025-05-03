// class
// visibilitas member di class ada 3 yaitu:
// 1. public: (default) bisa diakses darimanapun
// 2. private: hanya bisa diakses pada class member saja
// 3. protected: bisa diakses pada class itu sendiri dan juga class inherit-nya
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Ackxle");
console.log(person.getName()); // person.name tidak bisa diakses karena bersifat privat

class Siswa {
  // nama adalah variabel private
  public constructor(private name: string) { }

  // readonly

  public getName(): string {
    return this.name;
  }
}

const siswa = new Siswa("Inayah");
console.log(siswa.getName());

class Mahasiswa {
  private readonly nama: string;

  public constructor(nama: string) {
    this.nama = nama;
  }

  public getName(): string {
    return this.nama;
  }
}

const mahasiswaX = new Mahasiswa("Wulandari");
console.log(mahasiswaX.getName());

// inheritance
interface Shape {
  getArea: () => number;
}

class PersegiPanjang implements Shape { // gunakan keyword implements
  public constructor(protected readonly panjang: number, protected readonly lebar: number) { }

  public getArea(): number {
    return this.panjang * this.lebar;
  }

  public toString(): string {
    return `Persegi panjang [panjang=${this.panjang}, lebar=${this.lebar}]`;
  }
}

class Persegi extends PersegiPanjang {
  public constructor(lebar: number) {
    super(lebar, lebar);
  }

  // override
  public override toString(): string {
    return `Persegi [sisi=${this.lebar}]`;
  }
}

// abstract
abstract class PolygonBuild {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class PersegiPanjangAja extends PolygonBuild {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}


const persegiku = new Persegi(30);
const persegi_panjang = new PersegiPanjang(30, 20);
const persegi_aja = new PersegiPanjangAja(10, 20);
console.log(persegiku.getArea());
console.log(persegi_panjang.getArea());
console.log(persegiku.toString());
console.log(persegi_aja.getArea());

