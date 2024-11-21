class DiskonCalculator {
    constructor(harga, diskon) {
      this.harga = harga;
      this.diskon = diskon;
    }
  
    ubahHarga() {
      return parseInt(this.harga.replace(/\./g, ""), 10);
    }
  
    hitungJumlahDiskon() {
      const hargaConvert = this.ubahHarga();
      return (hargaConvert * this.diskon) / 100;
    }
  
    hitungHargaAkhir() {
      const diskonAmount = this.hitungJumlahDiskon();
      return this.ubahHarga() - diskonAmount;
    }
  
    getHasil() {
      const finalharga = this.hitungHargaAkhir();
      return `Harga setelah diskon ${this.diskon}% menjadi Rp.${finalharga.toLocaleString("id-ID")}`;
    }
  }
  
  export default DiskonCalculator;
  