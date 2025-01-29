import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { VersionProvider } from '@/lib/context/version-context';
import { useVersion } from '@/lib/context/version-context';
import { queryClient } from '@/lib/query-client';
import { VersionSwitcher } from '@/components/VersionSwitcher';

// Lazy load version-specific pages instead of entire apps
const V1Index = lazy(() => import('@v1/pages/Index'));
const V2Index = lazy(() => import('@/pages/Index'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function AppContent() {
  const { version } = useVersion();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense 
          fallback={
            <div className="flex h-screen w-screen items-center justify-center">
              <div className="text-lg">Loading...</div>
            </div>
          }
        >
          <Routes>
            <Route 
              path="/" 
              element={version === 'v1' ? <V1Index /> : <V2Index />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <VersionSwitcher />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <VersionProvider>
        <AppContent />
      </VersionProvider>
    </BrowserRouter>
  );
}
