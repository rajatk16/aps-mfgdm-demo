import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';
import { FadeLoader } from 'react-spinners';
import { useLazyQuery } from '@apollo/client';

import { graphql } from '../gql';
import { CollectionsList, ErrorMessage } from '../components';
import { useAuth, useAppDispatch, useAppSelector } from '../hooks';
import { selectCollectionsAsArray, selectCursor, selectThreeLOAuth, setCollections, setPagination } from '../redux';

const GET_PROPERTY_DEFINITION_COLLECTIONS = graphql(`
  query GetPropertyDefinitionCollections($cursor: String) {
    application {
      propertyDefinitionCollections(pagination: { cursor: $cursor }) {
        pagination {
          cursor
          pageSize
        }
        results {
          id
          name
          description
        }
      }
    }
  }
`);

export const Home: FC = () => {
  const isAuthorized = useAuth();
  const dispatch = useAppDispatch();

  const cursor = useAppSelector(selectCursor);
  const tokenState = useAppSelector(selectThreeLOAuth);
  const collections = useAppSelector(selectCollectionsAsArray);

  const [getPropertyDefCollections, { data, loading, error, fetchMore }] = useLazyQuery(
    GET_PROPERTY_DEFINITION_COLLECTIONS,
    {
      fetchPolicy: 'network-only',
      context: {
        headers: {
          Authorization: `Bearer ${tokenState.access_token}`
        }
      },
      notifyOnNetworkStatusChange: true
    }
  );

  useEffect(() => {
    if (isAuthorized) getPropertyDefCollections();
  }, [getPropertyDefCollections, isAuthorized]);

  useEffect(() => {
    if (data?.application?.propertyDefinitionCollections?.results) {
      dispatch(setCollections(data.application.propertyDefinitionCollections.results));
    }
    if (data?.application?.propertyDefinitionCollections.pagination) {
      dispatch(setPagination({ cursor: data.application.propertyDefinitionCollections.pagination.cursor }));
    }
  }, [data, dispatch]);

  const handleFetchMore = () => {
    if (cursor) {
      fetchMore({
        variables: { cursor },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          const newCollections = fetchMoreResult.application?.propertyDefinitionCollections.results ?? [];
          const newCursor = fetchMoreResult.application?.propertyDefinitionCollections?.pagination?.cursor;
          dispatch(
            setCollections([...prevResult.application!.propertyDefinitionCollections.results, ...newCollections])
          );
          dispatch(setPagination({ cursor: newCursor }));
          return fetchMoreResult;
        }
      });
    }
  };

  return (
    <div className="mx-auto h-screen">
      <div className="shadow-[0_2px_4px_rgba(0,0,0,0.075)] px-4 py-2 flex justify-between items-center">
        <p>Property Definition Collections</p>
        <div className="flex gap-x-5">
          <Link to="/create/collections" className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600">
            Create Collection
          </Link>
          {cursor && (
            <Button
              disabled={loading}
              onClick={handleFetchMore}
              className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600"
            >
              {!loading ? 'Fetch More' : 'Loading...'}
            </Button>
          )}
        </div>
      </div>
      {error && (
        <div className="h-4/5">
          <ErrorMessage />
        </div>
      )}
      {loading && collections.length === 0 ? (
        <div className="h-4/5 flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : (
        <CollectionsList collections={collections} />
      )}
    </div>
  );
};
