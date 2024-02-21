import { combineReducers, configureStore  } from "@reduxjs/toolkit"
import musicReducer from "./slicers"


const rootReducer = combineReducers({
    music: musicReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      })
})