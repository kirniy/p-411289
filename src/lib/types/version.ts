export type WebsiteVersion = 'v1' | 'v2';

export interface VersionConfig {
  version: WebsiteVersion;
  label: string;
  description?: string;
}

export const VERSIONS: VersionConfig[] = [
  {
    version: 'v1',
    label: 'v1',
    description: 'The original website design with purple accents'
  },
  {
    version: 'v2',
    label: 'v2',
    description: 'Updated design with blue accents'
  }
];
