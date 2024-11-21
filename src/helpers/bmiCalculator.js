class BMICalculator {
    constructor(berat, tinggi) {
      this.berat = berat;
      this.tinggi = tinggi;
    }
  
    hitungBMI() {
      const ubahTinggi = this.tinggi / 100;
      const bmi = this.berat / (ubahTinggi * ubahTinggi);
      return bmi;
    }
  
    getKategori(bmi) {
      const kategori = [
        { min: 0, max: 18.4, label: "Kurus (Underberat)" },
        { min: 18.5, max: 24.9, label: "Normal (Healthy berat)" },
        { min: 25, max: 29.9, label: "Gemuk (Overberat)" },
        { min: 30, max: Infinity, label: "Obesitas (Obesity)" },
      ];
      return kategori.find(
        (category) => bmi >= category.min && bmi <= category.max
      );
    }
  
    getHasil() {
      if (this.tinggi > 0 && this.berat > 0) {
        const bmi = this.hitungBMI();
        const category = this.getKategori(bmi);
        return `BMI Anda adalah ${bmi.toFixed(2)} (${category.label})`;
      } else {
        return "Masukkan tinggi dan berat badan yang valid.";
      }
    }
  }
  
  export default BMICalculator;
  