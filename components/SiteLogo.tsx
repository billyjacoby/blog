import siteMetadata from '@/data/siteMetadata';
import Logo from '@/data/logo.svg';
import Link from 'next/link';

export const SiteLogo = () => {
  return (
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
  );
};
