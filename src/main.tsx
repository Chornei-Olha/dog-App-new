import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './services/store';

import App from './App';
import './index.css';
import { DogAppThemeProvider } from './theme';
import { Main, Breeds, Favorite, Upload, Details } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'breeds',
        element: <Breeds />
      },
      {
        path: 'breeds/:breed_id',
        element: <Details />
      },

      {
        path: 'vote',
        element: <h2>Vote</h2>
      },
      {
        path: 'history',
        element: <h2>history</h2>
      },
      {
        path: 'favorite',
        element: <Favorite />
      },
      {
        path: 'your-uploads',
        element: <Upload />
      },
      {
        path: '*',
        element: <div>Error 404</div>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DogAppThemeProvider>
        <RouterProvider router={router} />
      </DogAppThemeProvider>
    </Provider>
  </React.StrictMode>
);
