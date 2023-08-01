import axios from 'axios';

const initialState = {
    loading: true,
    articles: []
}

export const requestArticles = async (dispatch) => {
    dispatch({
        type: 'PENDING'
    })
    let result = await axios.get('/api/reddit').then(res => res.data);
    dispatch({
        type: 'REQUEST_ARTICLES', 
        payload: result
    })
}

export default function redditReducer(state = initialState, action) {
    switch(action.type) {
        case 'PENDING':
            return {...state, pending: true}
        
        case 'REQUEST_ARTICLES':
            return { pending: false, articles: action.payload }
        default:
            return state;
    }
}