import Link from './Link';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size={6}
          />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-6 flex flex-wrap items-center space-x-2 text-center text-sm text-gray-500 sm:flex-nowrap dark:text-gray-400">
          <div className="0 flex flex-1 flex-row justify-center gap-2">
            <div className="whitespace-nowrap">{siteMetadata.author}</div>
            <div>{` | `}</div>
            <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
          </div>
          <div className="flex gap-2">
            <div className="hidden sm:flex">{` | `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
