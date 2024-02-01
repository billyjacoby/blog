'use client';
import Link from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { formatDate } from 'pliny/utils/formatDate';
import NewsletterForm from 'pliny/ui/NewsletterForm';
import { Highlight, Paragraph, Heading3 } from '@/components/Typography';
import { HighlightSection } from '@/components/HightlightSection';
import { mainData } from '@/data/mainData';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Typewriter } from '@/components/Typewriter';

const MAX_DISPLAY = 3;

export default function Home({ posts }) {
  return (
    <MainLayout>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mb-5">
          <h1 className="text-2xl sm:text-3xl sm:leading-10 md:text-4xl md:leading-10">
            a <Highlight>collection</Highlight> of <Typewriter />
          </h1>
          <Paragraph>
            hi, I’m billy jacoby – a full time software engineer, tech
            enthusiast, and an avid learner of things
          </Paragraph>
        </div>
        <div className="py-5">
          <Heading3>Who am I?</Heading3>
          <Paragraph>
            I'm a determined full stack developer with strong problem-solving
            skills and a propensity to continue learning new things. With 6+
            years of Javscript experience with a focus on building performant,
            mobile friendly applications.
          </Paragraph>
          <div className="flex flex-col gap-4">
            <HighlightSection />
          </div>
        </div>
        <div className="py-5">
          <Heading3>
            Always looking for new and exciting projects to work on.
          </Heading3>
          <Paragraph>
            Always open to consulting opportunities, with an expertise in React
            and React Native.
          </Paragraph>
          <ul className="ml-6 mt-3 list-disc marker:text-fuchsia-600">
            {mainData.strengths.map((st) => (
              <li key={st}>{st}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Posts
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post;
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {formatDate(date, siteMetadata.locale)}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </MainLayout>
  );
}
