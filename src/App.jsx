import { AppLayout } from './components/AppLayout';
import { CVPage } from './pages/CVPage';
import { BusinessCard } from './pages/BusinessCard';

export const App = () => {
  // Determine which page to show based on subdomain
  const getPageType = () => {
    const hostname = window.location.hostname;
    
    // For local development
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      // Use query parameter for local testing: ?page=cv or ?page=card
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('page') === 'cv' ? 'cv' : 'card';
    }
    
    // For production - check if we're on cv subdomain
    return hostname.startsWith('cv.') ? 'cv' : 'card';
  };

  const pageType = getPageType();
  const isCV = pageType === 'cv';

  return (
    <AppLayout showPrintButton={isCV} centerContent={!isCV}>
      {isCV ? <CVPage /> : <BusinessCard />}
    </AppLayout>
  );
};
