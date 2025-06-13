
import React from 'react';
import { Home, GraduationCap, FolderOpen, Award, Briefcase, FileText, Phone } from 'lucide-react';

interface VerticalNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Home', icon: Home },
    { name: 'Education', icon: GraduationCap },
    { name: 'Projects', icon: FolderOpen },
    { name: 'Skills', icon: Award },
    { name: 'Experience', icon: Briefcase },
    { name: 'Certificates', icon: FileText },
    { name: 'Contact', icon: Phone }
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-background/80 backdrop-blur-lg border border-border/50 rounded-2xl p-4 shadow-xl">
        <div className="flex flex-col space-y-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`group relative p-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.name
                    ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 hover:scale-105'
                }`}
                title={tab.name}
              >
                <IconComponent className="h-6 w-6" />
                
                {/* Tooltip */}
                <div className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-background border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${
                  activeTab === tab.name ? 'opacity-100' : ''
                }`}>
                  <span className="text-sm font-medium">{tab.name}</span>
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-border"></div>
                </div>
                
                {/* Active indicator */}
                {activeTab === tab.name && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VerticalNavigation;
