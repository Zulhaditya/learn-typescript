// enum: class special yang merupakan kumpulan variabel konstant
enum Koordinat {
  Timur = 1, Barat, Selatan, Utara
}

let koordinatSekarang = Koordinat.Timur; // output = 0 sesuai index
console.log(koordinatSekarang);

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

// logs
console.log(StatusCode.NotFound);
console.log(StatusCode.Success);
