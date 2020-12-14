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
 * 
 * Building queries for recent search endpoints https://developer.twitter.com/en/docs/twitter-api/tweets/search/integrate/build-a-rule
 * Exlore users tweets https://developer.twitter.com/en/docs/tutorials/explore-a-users-tweets
 */
export default async function getTweet<T>(
    tweets: string
): Promise<T> {
    console.log('Run Once already');
   let request = 'https://api.twitter.com/2/tweets?ids=' + tweets + '&expansions=attachments.media_keys&media.fields=url,height,width';
    console.log(request);

    try {
        const response = await fetch(request ,{
            headers: myHeaders,
        });
        //console.log(response); //Why did this give an error 'There was a problem sending log messages to your dev environment'

        const body = await response.json();
        return body.includes.media;
    } catch (err) {
        return err;
    }
};

async function getUserTweets<T>(
    userID: string
): Promise<T> {
    let request = 'https://api.twitter.com/2/tweets/search/recent?query=from:' + userID + '?expansions=attachments.media_keys&media.fields=url,height,width';

    const response = await fetch(request, {
        headers: myHeaders
    });
    const body = await response.json();
    return body.data;
}