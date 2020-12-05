import * as React from 'react';
import { TWITTER_BEARER_TOKEN } from '@env';

/**
 * Oauth Twitter V2 api using Bearer Tokens
 */
const myHeaders = new Headers({
    'authorization': 'Bearer ' + TWITTER_BEARER_TOKEN
});

/**
 * Returns a list of T items with only the response.include.media
 * Found explanation of media type https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
 * Explanation on how to do typed response data https://www.carlrippon.com/fetch-with-async-await-and-typescript/
 */
export default async function getTweets<T>(
    request: RequestInfo
): Promise<T> {
    const response = await fetch(request ,{
        headers: myHeaders
    });
    const body = await response.json();
    return body.includes.media;
};