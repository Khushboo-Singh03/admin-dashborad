import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import { api } from "../features/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware:(getDefault)=>getDefault().concat(api.middleware)
});
setupListeners(store.dispatch);


export default store;
