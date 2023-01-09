import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appSurfaceReducer from './reducers/app_surface_reducer';
import authReducer from './reducers/auth_reducer';
import categoryReducer from './reducers/category_page_reducer';
import exploreReducer from './reducers/explore_reducer';
import feedReducer from './reducers/feed_modal_reducer';
import categoryListReducer from './reducers/list_reducer';
import mediaReducer from './reducers/media_reducer';
import messengerReducer from './reducers/messenger_reducer';
import editableProfileReducer from './reducers/profile_reducer';
import signupReducer from './reducers/signup_reducer';
import walletReducer from './reducers/wallet_reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['appSurface', 'auth'],
};

const reducers = combineReducers({
  auth: authReducer,
  media: mediaReducer,
  explore: exploreReducer,
  category: categoryReducer,
  wallet: walletReducer,
  appSurface: appSurfaceReducer,
  list: categoryListReducer,
  signup: signupReducer,
  feed: feedReducer,
  messenger: messengerReducer,
  profile: editableProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export let persistor = persistStore(store);
