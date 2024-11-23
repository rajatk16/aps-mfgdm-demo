import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import './index.css';
import { store } from './redux';
import { AppRouter } from './pages';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
