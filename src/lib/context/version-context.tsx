import { createContext, useContext, useEffect, useState } from 'react';
import { Version, DEFAULT_VERSION } from '@shared/types/version';

const VERSION_STORAGE_KEY = 'app_version';

interface VersionContextType {
  version: Version;
  setVersion: (version: Version) => void;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersion] = useState<Version>(() => {
    const storedVersion = localStorage.getItem(VERSION_STORAGE_KEY);
    return (storedVersion as Version) || DEFAULT_VERSION;
  });

  useEffect(() => {
    localStorage.setItem(VERSION_STORAGE_KEY, version);
  }, [version]);

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
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
