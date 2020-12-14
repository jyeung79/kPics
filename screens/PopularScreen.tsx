/**
 * Documentation for Latest Screen: Follow the instagram-firebase app
 * 
 * Use a Flatlist that loads data with actions at the top and bottom
 * Load More
 * Add Pull-to-refresh
 * 
 * LayoutAnimation API to make layout animation changes look good
 */
import { StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import getTweet from '../utils/twitterAPI';
import { SearchState, TweetMedia, TweetMediaList } from '../types';
import { useSelector } from 'react-redux';

const INTITIAL_IMAGES_NUM = 2;

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

export default function PopularScreen() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<TweetMediaList>();
  const [modalVisible, showModal] = useState(false);

  const flatListRef = useRef<FlatList>(null);

  //Redux State of searchItem object
  const requestedTweets: string[] = useSelector((state: SearchState) => state.searchItem.twitterUsers);
  
  /**
   *  Fetch incoming Tweet data using useEffect
   * https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435
   */
  useEffect(() => {
    (async function incomingTweet() {
      let allTweets : TweetMediaList = [];      
      try {
          const incomingTweets = await getTweet<TweetMediaList>(requestedTweets.join(','));
          //console.log(incomingTweets);
          allTweets = incomingTweets.length > 1 ? [...incomingTweets] : [];
        } catch (err) {
          console.error(err);
        };
      setPhotos(allTweets);
    })();
    scrollToTop();
  }, [requestedTweets]);

  /**
   * Scroll to the top of the flatlist using scrollToOffset
   * scrollToIndex gave a weird error of maximum index: -1 when app is initialized
   * Same functionality as new search term scrolled to top of tweets
   */
  function scrollToTop() {
    if (flatListRef && flatListRef.current) {
        flatListRef.current.scrollToOffset({offset: 0,animated: true});
    }
  };

  const renderItem = (props: { item: TweetMedia }) => (
      <Item 
        photo={props.item.url}
        onPress={() => showModal(!modalVisible)}
      />
  );
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={photos}
        initialNumToRender={INTITIAL_IMAGES_NUM } // Reduce intialization time to load rendered on screen
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