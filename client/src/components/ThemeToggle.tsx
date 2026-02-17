import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center border border-border"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Moon className="w-4 h-4 icon-ultra-thin" strokeWidth={0.75} />
      ) : (
        <Sun className="w-4 h-4 icon-ultra-thin" strokeWidth={0.75} />
      )}
    </button>
  );
}