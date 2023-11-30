import {configureStore} from '@reduxjs/toolkit';
import storageReducer from './StroageSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a persistConfig
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Wrap your reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, storageReducer);

// Configure your Redux store
export const store = configureStore({
  reducer: {
    storage: persistedReducer,
  },
});

// Create a persistor
export const persistor = persistStore(store);
