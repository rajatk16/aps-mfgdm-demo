import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FadeLoader } from 'react-spinners';
import { PropertyDefCollection } from '@adsk/pim-propertydef-manager';

import { BackArrowIcon, BaseCollectionsList, ErrorMessage } from '../components';
import { useAppSelector, usePropertyDefManager, useApplicationAccess } from '../hooks';
import { setBaseCollections, clearBaseCollections, selectBaseCollectionsAsArray } from '../redux';

export const BaseCollections: FC = () => {
  const dispatch = useDispatch();
  const manager = usePropertyDefManager();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const collections = useAppSelector(selectBaseCollectionsAsArray);

  const { hasAccess, accessLevel } = useApplicationAccess();

  useEffect(() => {
    const getCollections = async () => {
      setLoading(true);
      setError(null);
      try {
        const collections = await manager.getPropertyDefCollections({
          accountId: 'QmFzZVByb3BlcnRpZXNTdGFnaW5n',
          groupId: 'QmFzZVByb3BlcnRpZXNHcm91cFN0YWdpbmc'
        });
        dispatch(clearBaseCollections());
        dispatch(setBaseCollections(collections.results as PropertyDefCollection[]));
      } catch (error) {
        console.error('Error fetching collections:', error);
        setError('Failed to load collections.');
      } finally {
        setLoading(false);
      }
    };

    getCollections();
  }, [dispatch, manager]);
  return (
    <div className="mx-auto h-screen">
      <div className="shadow-[0_2px_4px_rgba(0,0,0,0.075)] px-4 py-2 flex justify-between items-center">
        <div className="flex flex-row space-x-2 p-2 items-center">
          <Link to="/" reloadDocument>
            <BackArrowIcon className="size-5 transform transition-transform duration-300 hover:scale-125" />
          </Link>
          <p>Base Property Definition Collections</p>
        </div>
        {hasAccess && accessLevel === 'OWNER' && (
          <Link to="/create/baseCollections" className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600">
            Create Base Collection
          </Link>
        )}
      </div>
      {loading ? (
        <div className="h-4/5 flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : error ? (
        <ErrorMessage />
      ) : (
        <BaseCollectionsList collections={collections} />
      )}
    </div>
  );
};
