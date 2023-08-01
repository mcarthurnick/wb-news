import axios from "axios";

let initialState = {
    loading: true, 
    articles: []
}


export const requestArticles = async (dispatch) => {
    dispatch({
        type: 'PENDING'
    })
    let result = await axios.get('/api/hacker-news').then(res => res.data);
    dispatch({
        type: 'REQUEST_ARTICLES', 
        payload: result
    })
}

const hackerNewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PENDING':
            return { ...state, pending: true }

        case 'REQUEST_ARTICLES':
            return { pending: false, articles: action.payload}

        default:
            return state
    }
}

export default hackerNewsReducer;