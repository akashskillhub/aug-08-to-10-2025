import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./apis/todo.api";
import { testApi } from "./apis/test.api";


const reduxStore = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        [testApi.reducerPath]: testApi.reducer
    },
    middleware: defaultMiddlewares => [
        ...defaultMiddlewares(),
        todoApi.middleware,
        testApi.middleware
    ]
})

export default reduxStore