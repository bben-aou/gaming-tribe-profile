import { useState } from 'react';
import { Locale } from '@i18n/configuration/IntlManager';

export  function useLocale() {
  const [locale, setLocale] = useState<Locale>('en');
  return { locale, setLocale };
}