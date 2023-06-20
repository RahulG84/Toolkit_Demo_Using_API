import React from 'react';
import {Provider} from 'react-redux';
import Store from './redux/store/Store';
import AppNavigation from './src/navigation/AppNavigation';
export default function App() {
  return (
    <Provider store={Store}>
      <AppNavigation />
    </Provider>
  );
}
