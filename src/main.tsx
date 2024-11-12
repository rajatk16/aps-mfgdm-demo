import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './index.css';
import { store } from './redux';
import { Layout } from './components';
import { graphQLClient } from './graphql';
import {
  Home,
  Logout,
  Credentials,
  AuthCallback,
  BaseCollections,
  CollectionDetail,
  CreateCollection,
  BaseCollectionDetail,
  UpdateCollection,
  CreateDefinition,
  UpdateDefinition,
  UpdateBaseDefinition,
  CreateBaseDefinition
} from './pages';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ApolloProvider client={graphQLClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/basecollections" element={<BaseCollections />} />
            <Route path="/basecollections/:baseCollectionId" element={<BaseCollectionDetail />} />
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
  </Provider>
);
