import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CreateCollectionForm } from '../components';

export const CreateCollection: FC = () => {
  return (
    <div className="mx-auto h-screen">
      <div className="shadow-[0_2px_4px_rgba(0,0,0,0.075)] px-4 py-2 flex justify-between items-center">
        <div className="flex flex-row space-x-2 p-2 items-center">
          <Link to="/" reloadDocument>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 transform transition-transform duration-300 hover:scale-125"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <p>Create Property Definition Collection</p>
        </div>
      </div>
      <CreateCollectionForm />
    </div>
  );
};
