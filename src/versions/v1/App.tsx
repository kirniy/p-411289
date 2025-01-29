import { Toaster } from "@v1/components/ui/toaster";
import { Toaster as Sonner } from "@v1/components/ui/sonner";
import { TooltipProvider } from "@v1/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VersionProvider } from './lib/context/version-context';
import { VersionSwitcher } from './components/VersionSwitcher';
import { useVersion } from './lib/context/version-context';
import React from 'react';

// Import version-specific components
const V1Index = React.lazy(() => import('./versions/v1/pages/Index'));
const V2Index = React.lazy(() => import('./pages/Index'));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function AppContent() {
  const { currentVersion } = useVersion();

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {currentVersion === 'v1' ? <V1Index /> : <V2Index />}
      <VersionSwitcher />
    </React.Suspense>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <VersionProvider>
          <Routes>
            <Route path="/" element={<AppContent />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </VersionProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
