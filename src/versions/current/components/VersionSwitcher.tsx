import { useVersion } from '../lib/context/version-context';
import { WebsiteVersion } from '../lib/types/version';

export const VersionSwitcher = () => {
  const { currentVersion, setVersion } = useVersion();

  const toggleVersion = () => {
    const newVersion: WebsiteVersion = currentVersion === 'current' ? 'legacy' : 'current';
    setVersion(newVersion);
  };

  return (
    <button
      onClick={toggleVersion}
      className="fixed bottom-4 right-4 z-50 glass-button-enhanced px-4 py-2 text-sm"
      aria-label={`Switch to ${currentVersion === 'current' ? 'legacy' : 'current'} version`}
    >
      {currentVersion === 'current' ? 'Switch to Legacy' : 'Switch to Current'}
    </button>
  );
};
