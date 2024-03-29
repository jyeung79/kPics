import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LatestScreen from '../screens/LatestScreen';
import PopularScreen from '../screens/PopularScreen';
import SuggestionScreen from '../screens/SuggestionScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchBarComponent from '../components/SearchBar';

import { BottomTabParamList, GalleryParamList, GalleryTabParamList, FavoritesParamList, ProfileParamList } from '../types';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Gallery"
      backBehavior={"history"}
      activeColor={Colors[colorScheme].tint}
    >
      <BottomTab.Screen
        name="Gallery"
        component={GalleryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-images" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-circle" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={25} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const GalleryStack = createStackNavigator<GalleryParamList>();
const GalleryTab = createMaterialTopTabNavigator<GalleryTabParamList>();

function GalleryNavigator() {
  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen
        name="GalleryScreen"
        component={GalleryTabNavigator}
        options={{
          header: () => (
            <SearchBarComponent />
          )
        }}
      />
    </GalleryStack.Navigator>
  );
}

function GalleryTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <GalleryTab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12},
        activeTintColor: 'white',
        inactiveTintColor: '#8e9aaf',
        indicatorStyle: { backgroundColor: Colors[colorScheme].tint },
        allowFontScaling: true,
      }}
    >
      <GalleryTab.Screen
      name="LatestScreen"
      component={LatestScreen}
      options={{ title: 'Latest' }}
    />
    {/* <GalleryTab.Screen
      name="PopularScreen"
      component={PopularScreen}
      options={{ title: 'Popular' }}
    /> */}
    <GalleryTab.Screen
        name="SuggestionScreen"
        component={SuggestionScreen}
        options={{ title: 'Suggestions' }}
    />
  </GalleryTab.Navigator>
  )
}

const FavoritesStack = createStackNavigator<FavoritesParamList>();

function FavoritesNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: 'Favorites' }}
      />
    </FavoritesStack.Navigator>
  );
}


const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}