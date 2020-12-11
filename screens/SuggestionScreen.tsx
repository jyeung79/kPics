import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SearchObject, SearchState } from '../types';
import { shallowEqual, useSelector } from 'react-redux';

const DATA = [
    {
        id: 1,
        title: 'TWICE',
        twitterUsers : [],
        subtitle:'The most popular Girl Group in Korea',
    },
    {
        id: 2,
        title: 'BlackPink',
        twitterUsers : [],
        subtitle:'The most popular International Girl Group',
    },
    {
        id: 3,
        title: 'BTS',
        twitterUsers : [],
        subtitle: 'The most popular International Boy Group',
    },
    {
        id: 4,
        title: 'Izone',
        twitterUsers : [],
        subtitle: 'My favorite Girl Group'
    }
];
/**
 * Suggestion screen should show all the different suggestions for different results or suggestion types
 * Should be a flatlist to display all suggestion items
 */
export default function SuggestionScreen() {
    const [suggestions, setSuggestions] = useState<SearchObject[]>(DATA);

    const searchInput = useSelector((state : SearchState) => state.textInput);
    console.log(searchInput);

    useEffect(() => {
        searchFilterFunction(suggestions, searchInput);
    }, [searchInput]);

    function searchFilterFunction(target: Array<SearchObject>, text: string) {
        if (text) {
            const newArray = target.filter((item: SearchObject) => item.title.toLowerCase().includes(text.toLowerCase()));
            setSuggestions(newArray);
        } else {
            setSuggestions(DATA);
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
                        <ListItem.Title>{props.item.title}</ListItem.Title>
                        <ListItem.Subtitle>{props.item.subtitle}</ListItem.Subtitle>
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