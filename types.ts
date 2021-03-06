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
 * Types for Tweet Media Object
 */
export interface TweetMediaList extends Array<TweetMedia>{};

/**
 * TweetMedia type object that contains all the information about the images
 * preview_image_url ?: Will be used for previewing what the images will look like on the feed
 * url ?: Will be used for the full-size image when pressing on the image for the ImageScreen
 */
export interface TweetMedia {
    height: number,
    media_key: string,
    type: string, 
    url: string,
    preview_image_url : string,
    width: number  
};

/**
 * Typechecking for Redux actions, reducers, objects
 * Might separate these types to other page
 */
export interface SearchObject {
    id: number,
    title: string,
    avatarURL ?: string,
    favoriteTweets ?: string[],
    twitterUsers?: string[],
    subtitle?: string,
};

export interface SearchState {
  textInput: string,
  suggestions: SearchObject[],
  searchItem: SearchObject
}
/** 
 * Actions Types for Search
 * Don't need CLEAR_SEARCH because update search can handle empty strings on texthandler
 */
export const UPDATE_SEARCH = 'UPDATE_SEARCH';

interface UpdateSearchAction {
  type: typeof UPDATE_SEARCH
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

export type SearchActionTypes = UpdateSearchAction | SubmitSearchAction;

