import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";

import main from "./main.controller";

const store = configureStore({
  // middleware: [thunkMiddleware],
  reducer: {
    main,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootDispatch = typeof store.dispatch;

export default store;
