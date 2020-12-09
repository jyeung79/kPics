import React, { useEffect, useState, useRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';


interface SuggestionType {
    id: number,
    title: string,
    subtitle ?: string,
}

function SearchBarSuggestion() {
    const [suggestions, setSuggestions] = useState<SuggestionType[]>([
        {id: 1, title: 'Twice', subtitle:'The most popular Girl Group in Korea'},
        {id: 2, title: 'Blackpink', subtitle:'The most popular International Girl Group'},
        {id: 3, title: 'BTS', subtitle: 'The most popular International Boy Group'},
        {id: 4, title: 'Izone', subtitle: 'My favorite Girl Group'},
    ]);

    return (
        <FlatList
            data={suggestions}
            style={styles.container}
            renderItem={(props: { item: SuggestionType}) => (
                <ListItem key={props.item.id} bottomDivider >
                    <ListItem.Title>{props.item.title}</ListItem.Title>
                    <ListItem.Subtitle>{props.item.subtitle}</ListItem.Subtitle>
                </ListItem>
            )}
            keyExtractor={(item: SuggestionType) => item.id.toString()}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    } 
});

export default SearchBarSuggestion;