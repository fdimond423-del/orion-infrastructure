import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomePopup } from '@/components/WelcomePopup';
import { Loader } from '@/components/Loader';

// Lazy load pages for faster initial loading
const Home = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const OpportunitiesPage = lazy(() => import('@/pages/OpportunitiesPage'));
const GujaratGrowthPage = lazy(() => import('@/pages/GujaratGrowthPage'));
const NriServicesPage = lazy(() => import('@/pages/NriServicesPage'));
const ResourcesPage = lazy(() => import('@/pages/ResourcesPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const StrategyPage = lazy(() => import('@/pages/StrategyPage'));
const NotFound = lazy(() => import('@/pages/not-found'));

const queryClient = new QueryClient();

function NavigationHandler({ onNavigate }: { onNavigate: () => void }) {
  const [location] = useLocation();

  useEffect(() => {
    onNavigate();
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  const handleNavigation = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  };

  return (
    <WouterRouter base={import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : ''}>
      <WelcomePopup />
      <NavigationHandler onNavigate={handleNavigation} />
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      <div className="bg-[#0A1128] min-h-screen text-slate-900 selection:bg-blue-500/30">
        <Suspense fallback={null}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/strategy" component={StrategyPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/opportunities" component={OpportunitiesPage} />
            <Route path="/gujarat-growth" component={GujaratGrowthPage} />
            <Route path="/gujarat" component={GujaratGrowthPage} />
            <Route path="/nri-services" component={NriServicesPage} />
            <Route path="/services" component={NriServicesPage} />
            <Route path="/resources" component={ResourcesPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
