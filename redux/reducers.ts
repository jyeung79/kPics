import MASTER_DATA from '../constants/Groups';
import {
    SearchObject,
    SearchState,
    SearchActionTypes,
    UPDATE_SEARCH,
    SUBMIT_SEARCH,
} from '../types';

/**
 * Does it matter if someone types in the same Search term (Twice) when they already searched for Twice?
 * Does LatestScreen reload these photos?
 */
const INITIAL_STATE: SearchState = {
    textInput: '',
    suggestions: MASTER_DATA,
    searchItem: {
        id: 1,
        title: 'TWICE',
        avatarURL: 'https://c-sf.smule.com/rs-s78/arr/41/c6/86b96920-8110-4632-ad31-2330e0872a70.jpg',
        favoriteTweets: [
            '1337742281605046272',
            '1337770959038795777',
            '1337556043572842496',
            '1337614591661051905',
        ],
        twitterUsers : [
            '1337742281605046272',
            '1337770959038795777',
            '1337556043572842496',
            '1337614591661051905',
        ],
        subtitle:'South Korean JYP Girl Group',
    },
};
/**
 * Redux does a shallow-compare the result object vs the result object
 * If the rewrite redux store fields has same values, it would not trigger re-render
 * 
 * https://stackoverflow.com/questions/40386128/how-does-a-redux-connected-component-know-when-to-re-render
 * 
 */
const searchReducer = (state = INITIAL_STATE, action: SearchActionTypes) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            // Add filtering of suggestions here
            const filteredSuggestions = MASTER_DATA.filter((item: SearchObject) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
            return {
                textInput: action.payload,
                suggestions: filteredSuggestions,
                searchItem: {...state.searchItem}
            };
        case SUBMIT_SEARCH:
            return {
                textInput: state.textInput,
                suggestions: [action.payload],
                searchItem: action.payload
            }
        default:
            return state;
    }
};

/**
 * Connect function generates a wrapper that subscribes to the store
 */

export default searchReducer;