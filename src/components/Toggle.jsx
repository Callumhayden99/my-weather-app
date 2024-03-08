import { useState, useEffect } from 'react';
import { CiSun } from 'react-icons/ci';
import { FiMoon } from 'react-icons/fi';

export default function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply the dark or light class to the body of the document
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="flex justify-end mr-10">
        <div className="w-30 h-10 flex items-center bg-gray-700 rounded-full p-3">
          <CiSun
            className={`flex-grow text-4xl cursor-pointer p-1 rounded-full transition-colors duration-300 ${
              !isDarkMode ? 'text-yellow-500 hover:bg-gray-900' : 'text-gray-500'
            }`}
            onClick={toggleMode}
          />
          <FiMoon
            className={`flex-grow text-4xl cursor-pointer p-1 rounded-full transition-colors duration-300 ${
              isDarkMode ? 'text-white hover:bg-gray-900' : 'text-gray-500'
            }`}
            onClick={toggleMode}
          />
        </div>
      </div>
    </div>
  );
}
