import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, TextInput, Animated, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';

const DATA = [
    {
        title: 'TWICE',
        twitterUsers : []
    },
    {
        title: 'BlackPink',
        twitterUsers : []
    },
    {
        title: 'BTS',
        twitterUsers : []
    },
    {
        title: 'Izone',
        twitterUsers : []
    }
];

interface SearchType {
    title: string,
    twitterUsers: Array<String>
}


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