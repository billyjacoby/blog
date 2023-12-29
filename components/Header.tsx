'use client';
import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/logo.svg';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import SearchButton from './SearchButton';
import React from 'react';

const Header = () => {
  const [width, setWidth] = React.useState(
    typeof window !== 'undefined' ? window?.innerWidth : 0
  );

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => {
            if (width < 640) return null;
            return (
              <Link
                legacyBehavior
                key={link.title}
                href={link.href}
                className="hidden font-medium text-gray-900 sm:block dark:text-gray-100"
              >
                {link.title}
              </Link>
            );
          })}
        {/*//! Using a regular link here loads the wrong layout */}
        <a
          key={'resume'}
          href={'/resume'}
          className="hidden font-medium text-gray-900 sm:block dark:text-gray-100"
        >
          Resume
        </a>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
