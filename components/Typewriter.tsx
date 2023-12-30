'use client';
import { Typewriter as _Typewriter } from 'react-simple-typewriter';

export const Typewriter = () => (
  <_Typewriter
    words={[
      'blog posts.',
      'tech demos.',
      'tutorials.',
      'reviews.',
      'random thoughts.',
    ]}
    loop
    typeSpeed={40}
    deleteSpeed={40}
    cursor
    cursorColor="rgb(74 222 128 / var(--tw-text-opacity))"
  />
);
