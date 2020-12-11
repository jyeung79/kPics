import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SearchObject, SearchState } from '../types';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * Suggestion screen should show all the different suggestions for different results or suggestion types
 * Should be a flatlist to display all suggestion items
 */
export default function SuggestionScreen() {
    const [suggestions, setSuggestions] = useState<SearchObject[]>([
        {id: 1, title: 'Twice', subtitle:'The most popular Girl Group in Korea'},
        {id: 2, title: 'Blackpink', subtitle:'The most popular International Girl Group'},
        {id: 3, title: 'BTS', subtitle: 'The most popular International Boy Group'},
        {id: 4, title: 'Izone', subtitle: 'My favorite Girl Group'},
    ]);

    const searchInput = useSelector((state : SearchState) => state.textInput);
    console.log(searchInput);

    
    return (
        <View>
            <FlatList
                data={suggestions}
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