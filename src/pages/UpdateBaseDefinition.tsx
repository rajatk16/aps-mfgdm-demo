import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BackArrowIcon, UpdateBaseDefinitionForm } from '../components';

export const UpdateBaseDefinition: FC = () => {
  const location = useLocation();
  const { collectionId, definition } = location.state;

  return (
    <div className="mx-auto h-screen">
      <div className="shadow-[0_2px_4px_rgba(0,0,0,0.075)] px-4 py-2 flex justify-between items-center">
        <div className="flex flex-row space-x-2 p-2 items-center">
          <Link to={`/basecollections/${collectionId}`} reloadDocument>
            <BackArrowIcon className="size-5 transform transition-transform duration-300 hover:scale-125" />
          </Link>
          <p>Update Base Property Definition</p>
        </div>
      </div>
      <UpdateBaseDefinitionForm definition={definition} />
    </div>
  );
};
