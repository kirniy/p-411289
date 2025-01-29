import React, { createContext, useContext, useState, useEffect } from 'react';
import { WebsiteVersion } from '../types/version';

interface VersionContextType {
  currentVersion: WebsiteVersion;
  setVersion: (version: WebsiteVersion) => void;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

const VERSION_KEY = 'website_version';

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [currentVersion, setCurrentVersion] = useState<WebsiteVersion>(() => {
    const savedVersion = localStorage.getItem(VERSION_KEY);
    return (savedVersion as WebsiteVersion) || 'v1';
  });

  useEffect(() => {
    localStorage.setItem(VERSION_KEY, currentVersion);
  }, [currentVersion]);

  const setVersion = (version: WebsiteVersion) => {
    setCurrentVersion(version);
    // Force reload to ensure all components are properly updated
    window.location.reload();
  };

  return (
    <VersionContext.Provider value={{ currentVersion, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (context === undefined) {
    throw new Error('useVersion must be used within a VersionProvider');
  }
  return context;
}
