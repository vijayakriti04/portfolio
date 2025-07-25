import Navigation from './Navigation';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;