import { SearchObject, UPDATE_SEARCH, SUBMIT_SEARCH, SearchActionTypes } from '../types';

// Typescript infers that this function is returning UpdateSearchAction
export function updateSearch(text: string) : SearchActionTypes {
    return {
        type: UPDATE_SEARCH,
        payload: text,
    }
};

export function submitSearch(search: SearchObject) : SearchActionTypes {
    return {
        type: SUBMIT_SEARCH,
        payload: search,
    }
};