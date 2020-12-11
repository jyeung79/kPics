import { Constants } from 'expo-constants';
import {
    SearchState,
    SearchActionTypes,
    UPDATE_SEARCH,
    CLEAR_SEARCH,
    SUBMIT_SEARCH,
} from '../types';

/**
 * Does it matter if someone types in the same Search term (Twice) when they already searched for Twice?
 * Does LatestScreen reload these photos?
 */
const INITIAL_STATE: SearchState = {
    textInput: '',
    searchItem: {
        id: 1,
        title: 'TWICE',
        twitterUsers : [],
        subtitle:'The most popular Girl Group in Korea',
    }
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
            return {
                textInput: action.payload,
                searchItem: {...state.searchItem}
            };
        case CLEAR_SEARCH:
            return {
                textInput: action.payload,
                searchItem: {...state.searchItem}
            };
        case SUBMIT_SEARCH:
            return {
                textInput: state.textInput,
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