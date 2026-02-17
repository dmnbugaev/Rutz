import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Читаем тему из localStorage или из класса на html (установленного скриптом)
  const [theme, setTheme] = useState<Theme>(() => {
    // Сначала проверяем класс на html (установленный скриптом в index.html)
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      if (html.classList.contains('dark')) return 'dark';
      if (html.classList.contains('light')) return 'light';
    }
    
    // Если класса нет, пробуем localStorage
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;
    
    // По умолчанию - тёмная тема
    return 'dark';
  });

  // Синхронизируем класс и localStorage при изменении theme
  useEffect(() => {
    const root = document.documentElement;
    
    // Удаляем оба класса и добавляем нужный
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Сохраняем в localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}