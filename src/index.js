import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { AuthLayout } from 'components/AuthLayout/AuthLayout.jsx';
import { store, persistor } from 'redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AuthLayout> */}
          {/* <BrowserRouter basename="/YourPet"> */}
          <BrowserRouter basename="/">
            <App />
          </BrowserRouter>
        {/* </AuthLayout> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
