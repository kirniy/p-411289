import { createContext, useContext, useState, ReactNode } from 'react';
import { WebsiteVersion, VersionContextType } from '../types/version';

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export const VersionProvider = ({ children }: { children: ReactNode }) => {
  const [currentVersion, setCurrentVersion] = useState<WebsiteVersion>('current');

  const setVersion = (version: WebsiteVersion) => {
    setCurrentVersion(version);
    // Save to localStorage for persistence
    localStorage.setItem('website-version', version);
  };

  return (
    <VersionContext.Provider value={{ currentVersion, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
};

export const useVersion = () => {
  const context = useContext(VersionContext);
  if (context === undefined) {
    throw new Error('useVersion must be used within a VersionProvider');
  }
  return context;
};
