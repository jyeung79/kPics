import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Platform, SafeAreaView, View } from 'react-native';
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
    const { textInput, suggestions} = useSelector((state: SearchState) => state);
    /**
     * Navigation tool to navigate to different screens
     */
    const navigation = useNavigation();
    
    const textHandler = (text:string) => {
        dispatch({ type: 'UPDATE_SEARCH', payload: text });
    }

    const onSubmitHandler = () => {
        if (suggestions === undefined || suggestions.length > 0) {
            dispatch({ type: 'UPDATE_SEARCH', payload: suggestions[0].title});
            dispatch({ type: 'SUBMIT_SEARCH', payload:suggestions[0] });
            navigation.navigate('LatestScreen');
        }
    };

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
                onClear={() => textHandler('')}
                onSubmitEditing={() => onSubmitHandler()}
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