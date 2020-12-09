import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, TextInput, Animated, TouchableOpacity, Platform, FlatList, ListRenderItem} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import { ListItem } from 'react-native-elements';

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

interface SearchType {
    id: number,
    title: string,
    twitterUsers?: Array<String>
    subtitle?: string,
}

/**
 * Decided to have a different screen to show suggestions because it's too inconsistent and hard to have a dropdown menu
 * It should be easier to have a different page to show suggestions
 */

export default function SearchBarComponent() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState<SearchType[]>(DATA);
    const [masterDataSource, setMasterDataSource] = useState<SearchType[]>(DATA);

    const searchFilterFunction = (array: Array<SearchType>, text: string) => {
        if (text) {
            const newArray = array.filter(item => {
                item.title.toLowerCase().includes(text);
            })
            setFilteredDataSource(newArray);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    return (
        <SafeAreaView style={styles.container} >
            <SearchBar
                searchIcon={{ size: 18 }}
                onChangeText={(text: string) => searchFilterFunction(filteredDataSource, text)}
                onClear={() => searchFilterFunction(filteredDataSource, '')}
                containerStyle={styles.searchBar}
                placeholder="Type here..."
                value={search}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 0,
    },
    itemStyle: {
        padding: 10,
    },
    searchBar: {
        backgroundColor: 'black',
        color: 'white'
    }
});