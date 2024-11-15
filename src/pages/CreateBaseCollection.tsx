import { Link } from 'react-router-dom';
import { BackArrowIcon, CreateBaseCollectionForm } from '../components';
import { FC } from 'react';

export const CreateBaseCollection: FC = () => {
  return (
    <div className="mx-auto h-screen">
      <div className="shadow-[0_2px_4px_rgba(0,0,0,0.075)] px-4 py-2 flex justify-between items-center">
        <div className="flex flex-row space-x-2 p-2 items-center">
          <Link to="/basecollections" reloadDocument>
            <BackArrowIcon className="size-5 transform transition-transform duration-300 hover:scale-125" />
          </Link>
          <p>Create Base Property Collection</p>
        </div>
      </div>
      <CreateBaseCollectionForm />
    </div>
  );
};
