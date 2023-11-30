// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux'; // Make sure this import is correct
import Route from './src/route/route';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
