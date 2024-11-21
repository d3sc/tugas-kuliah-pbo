class JkwCalculator {
    constructor(jarak, kecepatan, waktu, option) {
      this.jarak = parseFloat(jarak);
      this.kecepatan = parseFloat(kecepatan);
      this.waktu = parseFloat(waktu);
      this.option = option;
    }
  
    calculate() {
      switch (this.option) {
        case "J-K": // Mencari Jarak
          if (this.kecepatan && this.waktu) {
            return { result: this.kecepatan * this.waktu, unit: "km" }; // Jarak = Kecepatan * Waktu
          }
          break;
        case "J-W": // Mencari Waktu
          if (this.jarak && this.kecepatan) {
            return { result: this.jarak / this.kecepatan, unit: "jam" }; // Waktu = Jarak / Kecepatan
          }
          break;
        case "K-W": // Mencari Kecepatan
          if (this.jarak && this.waktu) {
            return { result: this.jarak / this.waktu, unit: "km/jam" }; // Kecepatan = Jarak / Waktu
          }
          break;
        default:
          return { error: "Error: Harap Periksa Inputan Anda" };
      }
    }
  }
  
  export default JkwCalculator;
  