import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import { SearchObject, SearchState } from '../types';
import { shallowEqual, useSelector } from 'react-redux';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

const MASTER_DATA = [
    {
        id: 1,
        title: 'TWICE',
        avatarURL: 'https://c-sf.smule.com/rs-s78/arr/41/c6/86b96920-8110-4632-ad31-2330e0872a70.jpg',
        twitterUsers : [],
        subtitle:'South Korean JYP Girl Group',
    },
    {
        id: 2,
        title: 'BlackPink',
        avatarURL:'https://c-sf.smule.com/rs-s80/arr/0d/34/fa6e2c42-62ac-4e8c-949b-2d5875bc64a6.jpg',
        twitterUsers : [],
        subtitle:'South Korean YG Girl Group',
    },
    {
        id: 3,
        title: 'BTS',
        avatarURL:'https://styles.redditmedia.com/t5_9kzpy/styles/profileIcon_bepvkcv7qrq41.jpg?width=256&height=256&crop=256:256,smart&s=15ee83ce0eb0cae7bfe78008475316136f31a867',
        twitterUsers : [],
        subtitle: 'South Korean BigHit Boy Group',
    },
    {
        id: 4,
        title: 'Izone',
        avatarURL:'https://beatsaver.com/cdn/444e/33584cfaa73b9b08c152498cdb7c02c955a2f3ba.jpg',
        twitterUsers : [],
        subtitle: 'My Favorite Girl Group'
    }
];
/**
 * Suggestion screen should show all the different suggestions for different results or suggestion types
 * Should be a flatlist to display all suggestion items
 */
export default function SuggestionScreen() {
    const [suggestions, setSuggestions] = useState<SearchObject[]>(MASTER_DATA);

    const searchInput = useSelector((state : SearchState) => state.textInput);
    console.log(searchInput);

    useEffect(() => {
        searchFilterFunction(MASTER_DATA, searchInput);
    }, [searchInput]);

    function searchFilterFunction(target: Array<SearchObject>, text: string) {
        if (text) {
            const newArray = target.filter((item: SearchObject) => item.title.toLowerCase().includes(text.toLowerCase()));
            setSuggestions(newArray);
        } else {
            setSuggestions(MASTER_DATA);
        }
    };
    
    return (
        <View>
            <FlatList
                data={suggestions}
                extraData={suggestions}
                style={styles.container}
                renderItem={(props: { item: SearchObject}) => (
                    <ListItem key={props.item.id} bottomDivider >
                        <Avatar
                            size={60}
                            rounded
                            title={props.item.title[0]}
                            source={{uri: props.item.avatarURL}}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{props.item.title}</ListItem.Title>
                            <ListItem.Subtitle>{props.item.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                )}
                keyExtractor={(item: SearchObject) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    } 
});