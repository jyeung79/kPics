import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
/**
 * Suggestion screen should show all the different suggestions for different results or suggestion types
 * Should be a flatlist to display all suggestion items
 */

interface SuggestionType {
    id: number,
    title: string,
    subtitle ?: string,
}

export default function SuggestionScreen() {
    const [suggestions, setSuggestions] = useState<SuggestionType[]>([
        {id: 1, title: 'Twice', subtitle:'The most popular Girl Group in Korea'},
        {id: 2, title: 'Blackpink', subtitle:'The most popular International Girl Group'},
        {id: 3, title: 'BTS', subtitle: 'The most popular International Boy Group'},
        {id: 4, title: 'Izone', subtitle: 'My favorite Girl Group'},
    ]);

    return (
        <View>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    } 
});
