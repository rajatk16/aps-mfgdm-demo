import { FC } from 'react';

import emptyBox from '../assets/emptybox.svg';

interface EmptyMessageProps {
  imageSrc?: string;
  imageAlt?: string;
  emptyMessage: string;
}

export const EmptyMessage: FC<EmptyMessageProps> = ({ emptyMessage, imageAlt, imageSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center h-4/5 space-y-4">
      <img src={imageSrc ?? emptyBox} alt={imageAlt ?? 'Empty Resource'} />
      <p>{emptyMessage}</p>
    </div>
  );
};
