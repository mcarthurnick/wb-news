import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./reducers/hackerNewsReducer";
import mediumReducer from "./reducers/mediumReducer";
import redditReducer from './reducers/redditReducer';
import pokemonReducer from "./reducers/pokemonReducer";

const store = configureStore({
    reducer: {
        hackerNews: hackerNewsReducer,
        medium: mediumReducer,
        reddit: redditReducer,
        pokemon: pokemonReducer
    }
})

export default store;