import {GAMES_FETCHED, GAMES_FETCHED_START} from "./actions";


const initialState = {
    isLoading: true,
    categories: [],
    merchants: {},
    games: [],
}

export default function gamesReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GAMES_FETCHED_START:
            state = {
                ...state,
                isLoading: true,
            }
            return state

        case GAMES_FETCHED:
            state = {
                ...state,
                isLoading: false,
                categories: payload.categories,
                merchants: payload.merchants,
                games: payload.games,
            };
            return state;

        default:
            return state;
    }
}
