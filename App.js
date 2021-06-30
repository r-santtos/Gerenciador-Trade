import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes/stack';

import UpdateListProvider from './src/context/UpdateList';

/** CONVERTER PARA MOEDAS */
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

function App() {
  return (
    <UpdateListProvider>
      <>
        <StatusBar style="light" backgroundColor="#20232a" />
        <Routes/>
      </>
    </UpdateListProvider>
  );
}

export default App;
