import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, TextInput, Animated, TouchableOpacity, Platform, FlatList, ListRenderItem} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SearchObject, SearchState } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import useColorScheme from '../../hooks/useColorScheme';

/**
 * Decided to have a different screen to show suggestions because it's too inconsistent and hard to have a dropdown menu
 * It should be easier to have a different page to show suggestions
 */

export default function SearchBarComponent() {
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();
    const textInput = useSelector((state: SearchState) => state.textInput);
    /**
     * Navigation tool to navigate to different screens
     */
    const navigation = useNavigation();
    
    const textHandler = (text:string) => {
        dispatch({ type: 'UPDATE_SEARCH', payload: text });
    }

    return (
        <SafeAreaView style={styles.container} >
            <SearchBar
                platform={Platform.OS === 'android' ? 'android' : 'ios'}
                containerStyle={styles.container}
                inputContainerStyle={styles.searchTextContainer}
                inputStyle={styles.searchText}
                leftIconContainerStyle={styles.leftIcon}
                rightIconContainerStyle={styles.rightIcon}
                placeholderTextColor={ 'white'}
                
                cancelIcon={{ color: 'white'}}
                clearIcon={{ color: 'white'}}
                searchIcon={{ size: 18, color: 'white' }}
                onChangeText={(text: string) => textHandler(text)}
                onFocus={() => navigation.navigate('SuggestionScreen')}
                onCancel={() => navigation.navigate('LatestScreen')}
                onClear={() => textHandler('')}
                placeholder="Type here..."
                value={textInput}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: 'white',
        paddingTop: 0,
    },
    leftIcon: {
        backgroundColor: '#393E42',
        color: 'white',
    },
    rightIcon: {
        backgroundColor: '#393E42',
        color: 'white',
    },
    searchText: {
        backgroundColor:'#393E42',
        color: 'white',
        paddingTop: 0,
    },
    searchTextContainer: {
        backgroundColor: '#393E42',
        borderRadius: 20,
    }
});