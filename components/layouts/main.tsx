import 'css/tailwind.css';
import 'pliny/search/algolia.css';

import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import { SearchProvider, SearchConfig } from 'pliny/search';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';
import Footer from '@/components/Footer';
import siteMetadata from '@/data/siteMetadata';
import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  );
}
