/**
 * Documentation for Latest Screen: Follow the instagram-firebase app
 * 
 * Use a Flatlist that loads data with actions at the top and bottom
 * 
 * Load More
 * 
 * Add Pull-to-refresh
 * 
 * LayoutAnimation API to make layout animation changes look good
 */
import { StyleSheet, Image, LayoutAnimation, RefreshControl, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import getTweets from '../utils/twitterAPI';

import { Text, View, FlatList } from '../components/Themed';

const PAGE_SIZE = 5;

interface PhotoType {
  id: number;
  title: string;
  photo?: string;
};

const ANIME_DATA: PhotoType[] = [
  {
    id: 20,
    title:'Naruto',
    photo: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
  },
  {
    id: 269,
    title:'Bleach',
    photo: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
  },
  {
    id: 21,
    title:'One Piece',
    photo: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
  },
  {
    id:38000,
    title:'KNY'
  },
  {
    id: 16498,
    title:'Shingeki No Kyojin'
  },
  {
    id: 40052,
    title:'The Great Pretender'
  },
  {
    id: 7,
    title:'Inuyasha'
  },
  {
    id: 8,
    title:'Fullmetal Alchemist Brotherhood'
  },
];

let tweets: String[] = ['1124708249188483072', '1333815755465314306', '1333815691665756162', '1330149509465333762', '1328696475195375617']

const Item = (props : {photo: string }) => (
  <View>
    <Image 
      style={styles.image}
      source={{
        uri: props.photo,
        cache: 'default'
      }}
    />
  </View>
);

interface TweetMediaList extends Array<TweetMedia>{};

interface TweetMedia {
    height: number,
    media_key: string,
    type: string,
    url: string,
    width: number  
};

export default function LatestScreen() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<TweetMediaList>();
  const [search, setSearch] = useState('Dahyun');

  /**
   * 
   */
  useEffect(() => {
    (async function incomingTweet() {
      let allTweets : TweetMediaList = [];
      for (const item of tweets) {
        const incomingTweets = await getTweets<TweetMediaList>("https://api.twitter.com/2/tweets/" + item + "?expansions=attachments.media_keys&media.fields=url,height,width");
        //console.log(incomingTweets);
        allTweets.push(...incomingTweets);
      }
      console.log(allTweets);
      setPhotos(allTweets);
    })();
  }, []);

  const renderItem = (props: { item: TweetMedia }) => (
      <Item photo={props.item.url}/>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        style={styles.photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.media_key.slice(2).toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color:"#e5989b"
  },
  photos: {
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c3ff',
    marginVertical: 2,
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 28,
  },
  image: {
    resizeMode: 'contain' ,
    height: 550,
    width: 400,
  }
});