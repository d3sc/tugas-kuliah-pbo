class suhuConverter {
    convert(value, from, to) {
      const conversions = {
        celcius: {
          fahrenheit: (val) => (parseFloat(val) * 9) / 5 + 32,
          kelvin: (val) => parseFloat(val) + 273.15,
          reamur: (val) => (parseFloat(val) * 4) / 5,
        },
        fahrenheit: {
          celcius: (val) => ((parseFloat(val) - 32) * 5) / 9,
          kelvin: (val) => ((parseFloat(val) - 32) * 5) / 9 + 273.15,
          reamur: (val) => ((parseFloat(val) - 32) * 4) / 9,
        },
        kelvin: {
          celcius: (val) => parseFloat(val) - 273.15,
          fahrenheit: (val) => ((parseFloat(val) - 273.15) * 9) / 5 + 32,
          reamur: (val) => ((parseFloat(val) - 273.15) * 4) / 5,
        },
        reamur: {
          celcius: (val) => (parseFloat(val) * 5) / 4,
          fahrenheit: (val) => (parseFloat(val) * 9) / 4 + 32,
          kelvin: (val) => (parseFloat(val) * 5) / 4 + 273.15,
        },
      };
  
      if (from === to) return value;
      return conversions[from][to](value);
    }
  }
  
  export default suhuConverter;
  