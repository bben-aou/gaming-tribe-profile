import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import messages_en from '@i18n/en.json';
import messages_fr from '@i18n/fr.json';

// Define type for locale
export type Locale = 'en' | 'fr';

// Define messages type
const messages: Record<Locale, Record<string, string>> = {
  en: messages_en,
  fr: messages_fr,
};

// Define props type
interface IntlManagerProps {
  children: ReactNode;
  locale: Locale;
}

export function IntlManager({ children, locale }: Readonly<IntlManagerProps>) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}