export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Gallery: undefined;
  Favorites: undefined;
  Profile: undefined;
};

export type GalleryParamList = {
  GalleryScreen: undefined;
}

export type GalleryTabParamList = {
  LatestScreen: undefined;
  PopularScreen: undefined;
  SuggestionScreen: undefined;
}

export type FavoritesParamList = {
  FavoritesScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
};

/**
 * Typechecking for Redux actions, reducers, objects
 * Might separate these types to other page
 */
export interface SearchObject {
    id: number,
    title: string,
    avatarURL ?: string,
    twitterUsers?: String[],
    subtitle?: string,
};

export interface SearchState {
  textInput: string,
  searchItem: SearchObject
}
/** 
 * Actions Types for Search
 * Do I need two actions; can't I just update search ('') when clearing or cancelling search
 */
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

interface UpdateSearchAction {
  type: typeof UPDATE_SEARCH
  payload: string
};

interface ClearSearchAction {
  type: typeof CLEAR_SEARCH
  payload: string
};

/** 
 * Should I just merge all these actions together. It seems like I only need one reducer in the end
 * Actions Types for 
 * Do I need two actions; can't I just update search ('') when clearing or cancelling search
 */
 export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';

 interface SubmitSearchAction {
   type: typeof SUBMIT_SEARCH
   payload: SearchObject
 };

export type SearchActionTypes = UpdateSearchAction | ClearSearchAction | SubmitSearchAction;

