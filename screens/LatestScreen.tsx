/**
 * Documentation for Latest Screen: Follow the instagram-firebase app
 * 
 * Use a Flatlist that loads data with actions at the top and bottom
 * Load More
 * Add Pull-to-refresh
 * 
 * LayoutAnimation API to make layout animation changes look good
 */
import { StyleSheet, Image, Animated, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import getTweets from '../utils/twitterAPI';
import { Text, View, FlatList } from '../components/Themed';
import { SearchState } from '../types';
import { useSelector } from 'react-redux';

const PAGE_SIZE = 5;

const Item = (props : {photo: string, onPress(): void}) => (
  <TouchableOpacity 
    style={styles.imageContainer}
    activeOpacity={0.8}
    delayPressIn={80}
    accessibilityRole='imagebutton'
    onPress={props.onPress}
  >
    <Image 
      style={styles.image}
      source={{
        uri: props.photo,
        cache: 'default'
      }}
      resizeMode='cover'
    />
  </TouchableOpacity>
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
  const [modalVisible, showModal] = useState(false);

  /**
   * Redux State of searchItem object
   */
  const requestedTweets: String[] = useSelector((state: SearchState) => state.searchItem.twitterUsers);
  console.log(requestedTweets);

  /**
   *  Fetch incoming Tweet data using useEffect
   * https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435
   */
  useEffect(() => {
    // Fetch the new tweets when requestedTweets changes
    (async function incomingTweet() {
      let allTweets : TweetMediaList = [];
      for (const item of requestedTweets) {
        const incomingTweets = await getTweets<TweetMediaList>("https://api.twitter.com/2/tweets/" + item + "?expansions=attachments.media_keys&media.fields=url,height,width");
        allTweets.push(...incomingTweets);
      }
      setPhotos(allTweets);
    })();
  }, [requestedTweets]);

  const renderItem = (props: { item: TweetMedia }) => (
      <Item 
        photo={props.item.url}
        onPress={() => showModal(!modalVisible)}
      />
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
  },
  imageContainer: {
    height: 517,
    width: 361,
    marginVertical: 2,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,

    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 28,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  }
});