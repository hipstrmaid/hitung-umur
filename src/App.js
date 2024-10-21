import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [yearInput, setYearInput] = useState('');
  const [age, setAge] = useState(null);

  useEffect(() => {
    const calculateAge = () => {
      const currentYear = new Date().getFullYear();
      let birthYear = parseInt(yearInput);

      if (isNaN(birthYear) || yearInput.length !== 2) {
        setAge(null);  // Reset age if input is invalid
        return;
      }

      // Pengecualian untuk angka 00-09 dianggap tahun 2000-2009
      if (birthYear >= 0 && birthYear <= 9) {
        birthYear += 2000;
      } else if (birthYear >= 10 && birthYear <= 99) {
        birthYear += 1900;
      }

      const calculatedAge = currentYear - birthYear;
      setAge(calculatedAge);
    };

    calculateAge();
  }, [yearInput]); // useEffect akan berjalan setiap yearInput berubah

  return (
    <div className="App">
      <div className="age-calculator-container">
        <h1>Hitung Umur Online</h1>
        <input
          className="age-input"
          type="text"
          placeholder="Masukkan 2 digit tahun"
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)}
          maxLength="2"
        />
        {age !== null && (
          <p className="age-result">{age} Tahun</p>
        )}
      </div>
    </div>
  );
}

export default App;
