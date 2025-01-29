import React from 'react';
import { useVersion } from '../lib/context/version-context';
import { VERSIONS } from '../lib/types/version';

export function VersionSwitcher() {
  const { currentVersion, setVersion } = useVersion();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <select
        value={currentVersion}
        onChange={(e) => setVersion(e.target.value as any)}
        className="bg-[#1A1A1A]/90 text-white px-4 py-2 rounded-xl border border-white/10 
                 backdrop-blur-xl shadow-lg hover:border-white/20 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
      >
        {VERSIONS.map((version) => (
          <option key={version.version} value={version.version}>
            {version.label}
          </option>
        ))}
      </select>
    </div>
  );
}
