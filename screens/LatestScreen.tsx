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

import { Text, View, FlatList } from '../components/Themed';

const PAGE_SIZE = 5;

interface PhotoType {
  id: number;
  title: string;
  photo?: string;
};

interface TweetData {
  tweetNum: number;
  media?: boolean; // Do you want the media attachments
}

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


const Item = (props : {title: string, id: number, photo?: string }) => (
  <View>
    <Text style={styles.itemTitle}>{props.title}</Text>
    <Text style={styles.itemTitle}>{props.id}</Text>
    <Image 
      style={styles.image}
      source={{
        uri: props.photo,
        cache: 'default'
      }}
    />
  </View>
);

export default function LatestScreen() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('Dahyun');

  useEffect(() => {
    function loadContent(post: TweetData) {
      fetch('"https://api.twitter.com/2/tweets/' + {post} + "?expansions=attachments.media_keys");
    };
    // Create an scoped async function in the hook
    (async function pullTweets() {``
      await loadContent({ tweetNum: 440322224407314432}); 
    })();
  }, []);

  const renderItem = (props: { item: PhotoType }) => (
    <Item title={props.item.title} id={props.item.id} photo={props.item.photo}/>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={ANIME_DATA}
        style={styles.photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 28,
  },
  image: {
    resizeMode: 'contain' ,
    height: 400,
    width: 400,
  }
});