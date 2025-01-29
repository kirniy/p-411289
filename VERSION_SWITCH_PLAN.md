# Version Switching Implementation Plan

## Overview
This plan outlines the steps to implement robust version switching between two website versions (v1 and v2), ensuring complete isolation and proper functionality of both versions.

## Prerequisites
- Create a backup branch before starting
```bash
git checkout -b version-switch-backup
git add .
git commit -m "Backup before implementing version switching"
```

## 1. File Structure Setup
### 1.1 Create Version Directory Structure
```bash
mkdir -p src/versions/v1/{components,hooks,lib,pages,styles,types,config}
```

### 1.2 Backup Configuration Files
```bash
# Copy all configuration files to v1
cp tsconfig.json tsconfig.app.json tsconfig.node.json src/versions/v1/config/
cp vite.config.ts src/versions/v1/config/
cp tailwind.config.ts src/versions/v1/config/
cp postcss.config.js src/versions/v1/config/
```

### 1.3 Backup Source Files
```bash
# Copy root source files
cp src/index.css src/versions/v1/
cp src/App.css src/versions/v1/
cp src/App.tsx src/versions/v1/
cp src/main.tsx src/versions/v1/
cp src/vite-env.d.ts src/versions/v1/

# Copy directories with content
cp -r src/components/* src/versions/v1/components/
cp -r src/hooks/* src/versions/v1/hooks/
cp -r src/lib/* src/versions/v1/lib/
cp -r src/pages/* src/versions/v1/pages/
cp -r src/styles/* src/versions/v1/styles/
cp -r src/types/* src/versions/v1/types/
```

## 2. Configuration Updates

### 2.1 Update tsconfig.json
Add version-specific path aliases:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@v1/*": ["./src/versions/v1/*"]
    }
  }
}
```

### 2.2 Update vite.config.ts
Add version-specific aliases:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@v1': path.resolve(__dirname, './src/versions/v1')
  }
}
```

## 3. Version Context Setup

### 3.1 Version Types (src/lib/types/version.ts)
```typescript
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
    description: 'The original website design'
  },
  {
    version: 'v2',
    label: 'v2',
    description: 'Updated website design'
  }
];
```

### 3.2 Version Context (src/lib/context/version-context.tsx)
- Ensure version context is in root src only
- Handle version persistence in localStorage
- Implement clean version switching with page reload

## 4. Import Path Updates

### 4.1 V1 Import Updates
Update all imports in v1 files to use @v1 prefix:
- Search for all @/ imports in v1 files
- Replace with @v1/
- Update any relative paths as needed

### 4.2 Path Verification
```bash
# Search for all import statements in v1
grep -r "from '@/" src/versions/v1
grep -r "from \"@/" src/versions/v1
```

## 5. Component Updates

### 5.1 App.tsx Updates
- Implement lazy loading for version-specific components
- Add proper loading states
- Implement error boundaries

### 5.2 Version Switcher
- Add version switcher component
- Style consistently with current design
- Add smooth transition effects

## 6. Testing Steps

### 6.1 Basic Functionality
- [ ] Verify both versions load correctly
- [ ] Test version switching
- [ ] Verify all styles are isolated
- [ ] Check all paths resolve correctly

### 6.2 Edge Cases
- [ ] Test rapid version switching
- [ ] Verify state persistence
- [ ] Check network request handling
- [ ] Test error scenarios

### 6.3 Performance
- [ ] Measure initial load times
- [ ] Check bundle sizes
- [ ] Verify lazy loading works
- [ ] Test memory usage

## 7. Cleanup and Optimization

### 7.1 Code Cleanup
- Remove any unused imports
- Clean up console logs
- Update comments and documentation

### 7.2 Performance Optimization
- Optimize bundle sizes
- Add preloading for inactive version
- Implement caching strategies

## 8. Documentation

### 8.1 Update README
- Document version switching feature
- Add usage instructions
- List known limitations

### 8.2 Code Documentation
- Add JSDoc comments
- Document key functions
- Add inline comments for complex logic

## Additional Critical Items

### 1. Asset Management
```bash
# Create assets directory for v1
mkdir -p src/versions/v1/assets

# Copy all public assets
cp -r public src/versions/v1/
```

### 2. Additional Configuration Files
```bash
# Copy additional config files
cp components.json src/versions/v1/config/
cp eslint.config.js src/versions/v1/config/
```

### 3. Dependencies Management
- Add version-specific package.json for v1
- Ensure all dependencies are properly versioned
- Lock dependency versions to prevent breaking changes

### 4. Build Configuration
Update vite.config.ts to handle:
```typescript
{
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v1: resolve(__dirname, 'src/versions/v1/index.html')
      },
      output: {
        manualChunks: {
          'v1-vendor': [...v1VendorModules],
          'v2-vendor': [...v2VendorModules]
        }
      }
    }
  }
}
```

### 5. Shared Resources
Create a shared directory for common resources:
```bash
mkdir -p src/shared
```

Move shared utilities to prevent duplication:
- Authentication logic
- API clients
- Common types
- Shared hooks

### 6. Error Handling
Add specific error boundaries:
```tsx
class VersionErrorBoundary extends React.Component {
  componentDidCatch(error: Error) {
    // Handle version-specific errors
    // Provide fallback UI
    // Log error with version context
  }
}
```

### 7. State Management
- Ensure proper state isolation between versions
- Handle shared state carefully
- Implement version-specific storage keys

### 8. Route Management
- Update route handling for both versions
- Ensure proper 404 handling
- Handle deep linking between versions

### 9. Build Process
Add build scripts for both versions:
```json
{
  "scripts": {
    "build:v1": "vite build --config src/versions/v1/config/vite.config.ts",
    "build:v2": "vite build",
    "build:all": "npm run build:v1 && npm run build:v2"
  }
}
```

### 10. Testing Updates
Add version-specific test configurations:
```bash
# Create test directories
mkdir -p src/versions/v1/__tests__
cp -r src/__tests__/* src/versions/v1/__tests__/
```

### 11. Type Definitions
Ensure proper type sharing and isolation:
```typescript
// src/shared/types/index.ts
export interface SharedTypes {
  // Common types used across versions
}

// src/versions/v1/types/index.ts
import { SharedTypes } from '@/shared/types';
// Version-specific types
```

### 12. Performance Monitoring
Add version-specific performance monitoring:
```typescript
export const trackVersionPerformance = (version: string) => {
  // Track version-specific metrics
  // Monitor loading times
  // Track version switches
};
```

### 13. Cleanup Scripts
Add cleanup scripts for maintenance:
```bash
# Clean old builds
rm -rf dist/v1/*
rm -rf dist/v2/*

# Clean temporary files
find . -name "*.tmp" -type f -delete
```

### 14. Validation Steps
Before deploying:
- [ ] Test both versions in isolation
- [ ] Verify all assets load correctly
- [ ] Check all API endpoints work
- [ ] Verify proper error handling
- [ ] Test version switching under load
- [ ] Verify proper cache handling
- [ ] Check bundle sizes
- [ ] Test with network throttling
- [ ] Verify SEO meta tags
- [ ] Check analytics tracking

### 15. Rollback Procedures
Detailed rollback steps:
```bash
# Quick rollback to v1
git checkout v1-stable

# Emergency fixes
git checkout -b hotfix/version-switch
# Make fixes
git checkout main
git merge hotfix/version-switch
```

## Project-Specific Critical Items

### 1. Radix UI Components
Ensure proper isolation of Radix UI components:
```bash
# Create version-specific UI components directory
mkdir -p src/versions/v1/components/ui
cp -r src/components/ui/* src/versions/v1/components/ui/

# Update imports in v1 components
find src/versions/v1 -type f -name "*.tsx" -exec sed -i '' 's|@/components/ui|@v1/components/ui|g' {} +
```

### 2. React Query Setup
Handle React Query context properly:
```tsx
// src/versions/v1/lib/query-client.ts
import { QueryClient } from '@tanstack/react-query';

export const v1QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
});
```

### 3. Development Tools Integration
Update vite.config.ts to handle version-specific development tools:
```typescript
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && [
      componentTagger({
        prefix: process.env.VERSION === 'v1' ? 'v1-' : 'v2-'
      }),
    ],
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@v1": path.resolve(__dirname, "./src/versions/v1"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v1: resolve(__dirname, 'src/versions/v1/index.html')
      }
    }
  }
}));
```

### 4. Shadcn Component Handling
Ensure proper shadcn component isolation:
```bash
# Copy components.json for v1
cp components.json src/versions/v1/config/

# Update paths in v1 components.json
sed -i '' 's|"@/components"|"@v1/components"|g' src/versions/v1/config/components.json
```

### 5. CSS and Styling
Handle tailwind and CSS properly:
```bash
# Create version-specific tailwind config
cp tailwind.config.ts src/versions/v1/config/
sed -i '' 's|"./src/\*"|"./src/versions/v1/\*"|g' src/versions/v1/config/tailwind.config.ts

# Ensure proper CSS isolation
mkdir -p src/versions/v1/styles
cp src/index.css src/versions/v1/styles/
cp src/App.css src/versions/v1/styles/
```

### 6. Development Scripts
Add version-specific development scripts:
```json
{
  "scripts": {
    "dev:v1": "VERSION=v1 vite --config src/versions/v1/config/vite.config.ts",
    "dev:v2": "VERSION=v2 vite",
    "build:v1": "VERSION=v1 vite build --config src/versions/v1/config/vite.config.ts",
    "build:v2": "VERSION=v2 vite build",
    "preview:v1": "vite preview --config src/versions/v1/config/vite.config.ts",
    "preview:v2": "vite preview"
  }
}
```

### 7. Environment Variables
Handle environment variables properly:
```bash
# Create version-specific .env files
cp .env src/versions/v1/.env
cp .env.development src/versions/v1/.env.development
cp .env.production src/versions/v1/.env.production

# Add version identifier
echo "VITE_VERSION=v1" >> src/versions/v1/.env
echo "VITE_VERSION=v2" >> .env
```

### 8. Type Safety
Ensure type safety across versions:
```typescript
// src/shared/types/version.ts
export type Version = 'v1' | 'v2';

// Add version-specific type paths to tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@v1/*": ["./src/versions/v1/*"],
      "@shared/*": ["./src/shared/*"],
      "@v1-types/*": ["./src/versions/v1/types/*"]
    }
  }
}
```

### 9. Performance Monitoring
Add version-specific performance monitoring:
```typescript
// src/shared/utils/performance.ts
export const measureVersionPerformance = (version: Version) => {
  performance.mark(`${version}-start`);
  
  return () => {
    performance.mark(`${version}-end`);
    performance.measure(
      `${version}-total`,
      `${version}-start`,
      `${version}-end`
    );
  };
};
```

### 10. Critical Validation Steps
Before deploying:
- [ ] Test all Radix UI components in both versions
- [ ] Verify React Query caching works independently
- [ ] Check all shadcn components render correctly
- [ ] Verify CSS isolation between versions
- [ ] Test development tools in both versions
- [ ] Verify type safety across versions
- [ ] Check bundle sizes for both versions
- [ ] Verify proper code splitting
- [ ] Test HMR in development
- [ ] Verify source maps work correctly

## Rollback Plan
If issues occur:
```bash
git checkout main
git branch -D version-switch-backup # only if everything is working
```

## Notes
- Always test in development first
- Keep both versions in sync when updating shared components
- Monitor bundle sizes
- Consider implementing analytics for version usage
