'use client';

import { Button } from './ui/button';

export const PrintButton = () => {
  return (
    <div className="flex justify-center">
      <Button
        className="rounded-md border"
        onClick={() => {
          if (typeof window !== 'undefined') window.print();
        }}
      >
        Printer Friendly
      </Button>
    </div>
  );
};
