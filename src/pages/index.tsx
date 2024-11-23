import { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { Home } from './Home';
import { Logout } from './Logout';
import { Layout } from '../components';
import { useAppSelector } from '../hooks';
import { selectGraphQLUrl } from '../redux';
import { Credentials } from './Credentials';
import { AuthCallback } from './AuthCallback';
import { BaseCollections } from './BaseCollections';
import { CreateCollection } from './CreateCollection';
import { CollectionDetail } from './CollectionDetail';
import { UpdateCollection } from './UpdateCollection';
import { CreateDefinition } from './CreateDefinition';
import { UpdateDefinition } from './UpdateDefinition';
import { BaseCollectionDetail } from './BaseCollectionDetail';
import { CreateBaseCollection } from './CreateBaseCollection';
import { UpdateBaseCollection } from './UpdateBaseCollection';
import { UpdateBaseDefinition } from './UpdateBaseDefinition';
import { CreateBaseDefinition } from './CreateBaseDefinition';

export const AppRouter = () => {
  const graphQLUrl = useAppSelector(selectGraphQLUrl);
  const graphQLClient = useMemo(
    () =>
      new ApolloClient({
        uri: graphQLUrl,
        cache: new InMemoryCache()
      }),
    [graphQLUrl]
  );

  return (
    <ApolloProvider client={graphQLClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/basecollections" element={<BaseCollections />} />
            <Route path="/basecollections/:baseCollectionId" element={<BaseCollectionDetail />} />
            <Route path="/create/basecollections" element={<CreateBaseCollection />} />
            <Route path="/basecollections/:baseCollectionId/update" element={<UpdateBaseCollection />} />
            <Route
              element={<UpdateBaseDefinition />}
              path="/basecollections/:baseCollectionId/definitions/:definitionId/update"
            />
            <Route element={<CreateBaseDefinition />} path="/basecollections/:baseCollectionId/createDefinition" />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/oauth/callback" element={<AuthCallback />} />
            <Route path="/create/collections" element={<CreateCollection />} />
            <Route path="/collections/:collectionId" element={<CollectionDetail />} />
            <Route path="/collections/:collectionId/update" element={<UpdateCollection />} />
            <Route path="/collections/:collectionId/createDefinition" element={<CreateDefinition />} />
            <Route path="/collections/:collectionId/definitions/:definitionId/update" element={<UpdateDefinition />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
