import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/providers/AuthProvider';
import { IntlManager } from '@/i18n/configuration/IntlManager';
import { useLocale } from '@/hooks/i18n/useLocal';

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: React.ReactNode;
}

function AppProviders({ children }: Readonly<AppProvidersProps>) {
  const { locale } = useLocale();

  return (
    <IntlManager locale={locale}>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {children}
          </AuthProvider>
      </QueryClientProvider>
    </IntlManager>
  );
}

export default AppProviders;