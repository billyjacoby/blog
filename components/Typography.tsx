import clsx from 'clsx';
import React from 'react';

type PropsWithClassName = React.PropsWithChildren & { className?: string };

export const Heading3 = (props: PropsWithClassName) => (
  <h3
    {...props}
    className={
      'text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 ' +
      props.className
    }
  >
    {props.children}
  </h3>
);

export const Paragraph = (props: PropsWithClassName) => (
  <p
    {...props}
    className={
      'mt-3 text-lg text-gray-900 dark:text-gray-100 sm:text-xl md:text-xl ' +
      props.className
    }
  >
    {props.children}
  </p>
);

export const Highlight = (props: PropsWithClassName) => (
  <span {...props} className={'text-green-400'}>
    {props.children}
  </span>
);
