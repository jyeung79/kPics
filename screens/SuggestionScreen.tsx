import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import { SearchObject, SearchState } from '../types';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MASTER_DATA from '../constants/Groups';
/**
 * Suggestion screen should show all the different suggestions for different results or suggestion types
 * Should be a flatlist to display all suggestion items
 */
export default function SuggestionScreen() {
    const [suggestions, setSuggestions] = useState<SearchObject[]>(MASTER_DATA);

    const searchInput = useSelector((state : SearchState) => state.textInput);
    const suggestionList = useSelector((state: SearchState) => state.suggestions);
    const dispatch = useDispatch();
    console.log(searchInput);

    const navigation = useNavigation();

    function onPressHandler(props: {item: SearchObject}) {
        dispatch({ type: 'UPDATE_SEARCH', payload: props.item.title});
        dispatch({ type: 'SUBMIT_SEARCH', payload: props.item});
        navigation.navigate('LatestScreen');
    }
    
    return (
        <View>
            <FlatList
                data={suggestionList}
                extraData={suggestionList}
                style={styles.container}
                renderItem={(props: { item: SearchObject}) => (
                    <ListItem 
                        key={props.item.id} 
                        bottomDivider
                        onPress={() => onPressHandler({...props})} 
                    >
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