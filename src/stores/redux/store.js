// import { configureStore } from "@reduxjs/toolkit";
// import galleriesReducer from './galleries-slice';

// const store = configureStore({
//     reducer: {
//         galleries: galleriesReducer,
//     }
// });

// export default store

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../../services/api/api-slice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store