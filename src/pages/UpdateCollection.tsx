import { FC } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';

import { BackArrowIcon, UpdateCollectionForm } from '../components';

export const UpdateCollection: FC = () => {
  const location = useLocation();
  const { collection } = location.state;

  if (!collection) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="mx-auto h-screen">
        <div className="shadow-[0_2px_4px_rgba(0,0,0,0.075)] px-4 py-2 flex justify-between items-center">
          <div className="flex flex-row space-x-2 p-2 items-center">
            <Link to="/" reloadDocument>
              <BackArrowIcon className="size-5 transform transition-transform duration-300 hover:scale-125" />
            </Link>
            <p>Update Property Definition Collection</p>
          </div>
        </div>
        <UpdateCollectionForm collection={collection} />
      </div>
    );
  }
};
