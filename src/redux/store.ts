import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

//Slices import
import taskSlice from "./slices/taskSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const rootReducer = combineReducers({
  task: taskSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
