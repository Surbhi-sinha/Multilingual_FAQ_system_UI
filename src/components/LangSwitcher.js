import React, { useContext } from 'react';
import { LanguageContext } from '../context/LangContext';


const LanguageSwitcher = () => {

  const { setLanguage }= useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className='container mt-5'>
      <select onChange={handleLanguageChange} className='form-select w-100'>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
