import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import {Text} from '@radix-ui/themes'
import { Switch } from '@radix-ui/themes';
export function ManualThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize based on system preference or saved preference
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false; // Default to light on server
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div>
         <Text>{isDarkMode ? <MoonIcon /> : <SunIcon />}</Text>
         <div className='mt-2'></div>
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
    </div>
     
  
  );
}

export default ManualThemeSwitcher
