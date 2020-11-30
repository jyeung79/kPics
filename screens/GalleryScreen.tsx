import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { Text, View, FlatList } from '../components/Themed';

const MAL_API_LINK = (props: { animeID: string}) => {
  "https://api.myanimelist.net/v2/anime/" + {props}+ "?fields=id,title,main_picture";
};

interface PhotoType {
  id: number;
  title: string;
  photo?: string;
};

const DATA: PhotoType[] = [
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
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{props.title}</Text>
    <Text style={styles.itemTitle}>{props.id}</Text>
    <Image style={styles.image} source={{uri: props.photo}}/>
  </View>
);

export default function GalleryScreen() {
  const renderItem = (props: { item: PhotoType }) => (
    <Item title={props.item.title} id={props.item.id} photo={props.item.photo}/>
  );
  
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        style={styles.photos}
        renderItem={renderItem}
      />
    </View>
  );
}


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
    resizeMode: 'center' ,
    height: 400,
    width: 600,
  }
});
