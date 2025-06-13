
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: 'Home', path: '/home' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' }
  ];

  const getCurrentTab = () => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    return currentTab ? currentTab.name : 'Home';
  };

  const activeTab = getCurrentTab();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/home" className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Portfolio
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <div className="breadcrumb-nav flex items-center bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg shadow-lg p-1 border border-white/20">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab.name}>
                  <Link
                    to={tab.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`breadcrumb-nav-item relative px-4 py-2 text-sm font-medium transition-all duration-400 rounded-md ${
                      activeTab === tab.name
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                    }`}
                  >
                    {tab.name}
                    {index < tabs.length - 1 && activeTab === tab.name && (
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-0 h-0 border-l-8 border-l-primary border-t-8 border-t-transparent border-b-8 border-b-transparent z-10"></div>
                    )}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost" 
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="backdrop-blur-sm"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                  activeTab === tab.name
                    ? 'text-primary bg-primary/10 border-l-4 border-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
