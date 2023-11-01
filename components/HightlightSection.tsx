import clsx from 'clsx';
import { Paragraph } from './Typography';

import { mainData } from '@/data/mainData';

export const HighlightSection = ({
  highlights = mainData.highlights,
}: {
  highlights?: { title: string; content: string }[];
}) => {
  return highlights.map((highlight, index) => {
    const isEven = index % 2 === 0;
    const isThird = index % 3 === 0;

    const headingOrder = isEven ? 'sm:order-1' : 'sm:order-2';
    const contentOrder = isEven ? 'sm:order-2' : 'sm:order-1';

    let color = 'text-green-400';
    if (isThird) {
      color = 'text-blue-400';
    } else if (isEven) {
      color = 'text-fuchsia-500';
    }

    const rotation = isThird ? 'sm:-rotate-6' : 'sm:rotate-6';

    return (
      <div
        className="mt-8 flex flex-col items-center gap-5  sm:flex-row"
        key={highlight.title}
      >
        <span
          className={clsx(
            'flex-1 -rotate-3 text-4xl font-bold hover:animate-ping',
            color,
            headingOrder,
            rotation
          )}
        >
          {highlight.title}
        </span>
        <Paragraph className={clsx('flex-2', contentOrder)}>
          {highlight.content}
        </Paragraph>
      </div>
    );
  });
};
