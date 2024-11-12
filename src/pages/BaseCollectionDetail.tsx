import { FadeLoader } from 'react-spinners';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { selectBaseCollectionById, selectClientId, setBasePropertyDefinitions } from '../redux';
import { useAppDispatch, useAppSelector, usePropertyDefManager } from '../hooks';
import { BackArrowIcon, ErrorMessage, BaseDefinitionsList } from '../components';
import { Button } from '@headlessui/react';

export const BaseCollectionDetail: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const manager = usePropertyDefManager();
  const clientId = useAppSelector(selectClientId);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { baseCollectionId } = useParams<{ baseCollectionId: string }>();
  const baseCollection = useAppSelector(selectBaseCollectionById(baseCollectionId!));

  useEffect(() => {
    const getDefinitions = async () => {
      setLoading(true);
      setError(null);
      try {
        const definitions = await manager.getPropertyDefinitions({
          accountId: 'QmFzZVByb3BlcnRpZXNTdGFnaW5n',
          groupId: 'QmFzZVByb3BlcnRpZXNHcm91cFN0YWdpbmc',
          collectionId: baseCollectionId!
        });
        dispatch(setBasePropertyDefinitions({ definitions: definitions.results, collectionId: baseCollectionId! }));
      } catch (error) {
        console.error('Error fetching definitions', error);
        setError('Failed to load definitions.');
      } finally {
        setLoading(false);
      }
    };
    getDefinitions();
  }, [baseCollectionId, dispatch, manager]);

  return (
    <div className="mx-auto h-screen">
      <div className="shadow-[0_2px_4px_rgba(0,0,0,0.075)] px-4 py-2 h-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-row space-x-2 p-2 items-center">
            <Link to="/basecollections" reloadDocument>
              <BackArrowIcon className="size-5 transform transition-transform duration-300 hover:scale-125" />
            </Link>
            <p>{atob(baseCollectionId!)}</p>
          </div>
          <div>
            <Button
              type="button"
              onClick={() => navigate(`/basecollections/${baseCollectionId}/createDefinition`)}
              className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600"
            >
              Create Base Property Definition
            </Button>
          </div>
        </div>
        {loading ? (
          <div className="h-4/5 flex justify-center items-center">
            <FadeLoader />
          </div>
        ) : error ? (
          <ErrorMessage />
        ) : (
          <BaseDefinitionsList
            definitions={baseCollection.definitions ?? []}
            allowAccess={clientId === baseCollection.createdBy}
          />
        )}
      </div>
    </div>
  );
};
