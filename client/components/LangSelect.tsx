import React, { useState } from 'react'

const LangSelect = () => {
    const [langSelect, setLangSelect] = useState(false); // Dropdown kontrolü
    const [language, setLanguage] = useState('TR'); // Seçili dil
    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setLangSelect(false);
      };

  return (
    <div className="relative text-black z-50">
      {/* Buton: Aktif olan dili gösterir */}
      <button onClick={() => setLangSelect(!langSelect)} className="items-center gap-x-2 flex bg-[#eae4dd] w-[65px] px-2 py-1 rounded-xl hover:rounded-xl">
        <img className="w-5" src={language === 'TR' ? "/images/flags/turkey-flag.png" : "/images/flags/USA-flag.png"} alt={language} /><span className='text-xs font-semibold'>{language}</span>
        
      </button>
      
      {/* Dropdown: Dillerin listesi */}
      {langSelect && (
        <div className="absolute top-full mt-2 bg-[#eae4dd] shadow-md flex flex-col w-[65px] rounded-xl">
          <button
            onClick={() => handleLanguageChange('TR')}
            className={`items-center gap-x-2 flex px-2 py-1 ${language == 'TR' && 'bg-cyan-700 text-white'}`}
          >
            <img className="w-5" src="/images/flags/turkey-flag.png" alt="TR" />
            <span className='text-xs font-semibold'>TR</span>
          </button>
          <button
            onClick={() => handleLanguageChange('EN')}
            className={`items-center gap-x-2 flex px-2 py-1 rounded-b-xl ${language == 'EN' && 'bg-cyan-700 text-white'}`}
          >
            <img className="w-5" src="/images/flags/USA-flag.png" alt="EN" />
            <span className='text-xs font-semibold'>EN</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default LangSelect
