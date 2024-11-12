import { FC, useEffect } from 'react';
import { Button } from '@headlessui/react';
import { FadeLoader } from 'react-spinners';
import { useLazyQuery } from '@apollo/client';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { GET_PROPERTY_DEFINITIONS } from '../graphql';
import { useAppDispatch, useAppSelector, useAuth } from '../hooks';
import { BackArrowIcon, DefinitionsList, ErrorMessage } from '../components';
import { selectClientId, selectCollectionById, selectThreeLOAuth, updateCollection } from '../redux';

export const CollectionDetail: FC = () => {
  const navigate = useNavigate();
  const isAuthorized = useAuth();
  const dispatch = useAppDispatch();

  const clientId = useAppSelector(selectClientId);
  const { access_token } = useAppSelector(selectThreeLOAuth);
  const { collectionId } = useParams<{ collectionId: string }>();
  const collection = useAppSelector(selectCollectionById(btoa(`propdefcol~${clientId}~${clientId}~${collectionId}`)));
  const definitions = collection?.definitions || [];

  const [getPropertyDefinitions, { data, loading, error }] = useLazyQuery(GET_PROPERTY_DEFINITIONS);

  useEffect(() => {
    if (collectionId && isAuthorized) {
      getPropertyDefinitions({
        context: {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        },
        variables: {
          filter: {
            id: btoa(`propdefcol~${clientId}~${clientId}~${collectionId}`)
          }
        }
      });
    }
  }, [access_token, clientId, collectionId, getPropertyDefinitions, isAuthorized]);

  useEffect(() => {
    if (data?.application.propertyDefinitionCollections?.results && collectionId) {
      dispatch(
        updateCollection({
          collection: data?.application.propertyDefinitionCollections?.results[0]
        })
      );
    }
  }, [collectionId, data, dispatch, clientId]);

  return (
    <div className="mx-auto h-screen">
      <div className="h-full">
        <div className="shadow-[0_2px_4px_rgba(0,0,0,0.075)] px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex flex-row space-x-2 p-3 items-center">
              <Link to="/" reloadDocument>
                <BackArrowIcon className="size-5 transform transition-transform duration-300 hover:scale-125" />
              </Link>
              <p>{collectionId}</p>
            </div>
            <div className="space-x-2">
              <Button
                type="button"
                disabled={!!error}
                onClick={() =>
                  navigate(`/collections/${collectionId}/update`, {
                    state: {
                      collectionId,
                      collection
                    }
                  })
                }
                className="bg-black text-white p-3 rounded-lg hover:bg-slate-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Edit Collection
              </Button>
              <Button
                type="button"
                onClick={() => navigate(`/collections/${collectionId}/createDefinition`)}
                disabled={!!error}
                className="bg-black text-white p-3 rounded-lg hover:bg-slate-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Add Property Definition
              </Button>
            </div>
          </div>
        </div>
        {error && <ErrorMessage error={error} />}
        {loading && definitions.length === 0 ? (
          <div className="h-screen flex justify-center items-center">
            <FadeLoader />
          </div>
        ) : (
          <DefinitionsList definitions={definitions} />
        )}
      </div>
    </div>
  );
};
