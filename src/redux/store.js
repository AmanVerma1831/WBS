import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice"

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
    }
})

export default store;