export type WebsiteVersion = 'current' | 'legacy';

export interface VersionContextType {
  currentVersion: WebsiteVersion;
  setVersion: (version: WebsiteVersion) => void;
}
