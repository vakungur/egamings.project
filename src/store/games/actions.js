import axios from 'axios';

export const GAMES_FETCHED_START = 'GAMES_FETCHED_START';
export const GAMES_FETCHED = 'GAMES_FETCHED';

export const fetchGamesStart = () => ({
    type: GAMES_FETCHED_START,
})

export const fetchGames = () => dispatch => {
    dispatch(fetchGamesStart())
    return axios.get('https://www.rost.bet/api/v1/games?lang=en')
        .then(response => {
            dispatch({
                type: GAMES_FETCHED,
                payload: response.data.data
            })
        })
};


