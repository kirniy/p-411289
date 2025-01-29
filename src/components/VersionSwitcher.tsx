import React from 'react';
import { useVersion } from '@/lib/context/version-context';
import { Version } from '@shared/types/version';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function VersionSwitcher() {
  const { version, setVersion } = useVersion();

  const handleVersionChange = (newVersion: Version) => {
    setVersion(newVersion);
    // Force reload to ensure all components are properly updated
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-background/80 p-2 backdrop-blur-sm rounded-lg border shadow-lg">
      <Button
        variant={version === 'v1' ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleVersionChange('v1')}
        className={cn(
          'transition-all duration-200',
          version === 'v1' && 'bg-primary text-primary-foreground shadow-sm'
        )}
      >
        Version 1
      </Button>
      <Button
        variant={version === 'v2' ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleVersionChange('v2')}
        className={cn(
          'transition-all duration-200',
          version === 'v2' && 'bg-primary text-primary-foreground shadow-sm'
        )}
      >
        Version 2
      </Button>
    </div>
  );
}
