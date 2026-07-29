import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import OpportunitiesPage from '@/pages/OpportunitiesPage';
import GujaratGrowthPage from '@/pages/GujaratGrowthPage';
import NriServicesPage from '@/pages/NriServicesPage';
import ResourcesPage from '@/pages/ResourcesPage';
import ContactPage from '@/pages/ContactPage';
import StrategyPage from '@/pages/StrategyPage';
import { Loader } from '@/components/Loader';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomePopup } from '@/components/WelcomePopup';

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
