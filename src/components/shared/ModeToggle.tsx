import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/shared/ThemeProvider';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button variant="outline" size="icon">
      <BiSolidSun
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-400"
        onClick={() => setTheme('dark')}
      />
      <BiSolidMoon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        onClick={() => setTheme('light')}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
