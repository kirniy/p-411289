export type Version = 'v1' | 'v2';

export interface VersionContextType {
  version: Version;
  setVersion: (version: Version) => void;
}

export const DEFAULT_VERSION: Version = 'v2';
