import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LatestScreen from '../screens/LatestScreen';
import PopularScreen from '../screens/PopularScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomTabParamList, GalleryParamList, GalleryTabParamList, FavoritesParamList, ProfileParamList } from '../types';
import Navigation from '.';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Gallery"
      activeColor={Colors[colorScheme].tint}
      inactiveColor="#b1aeb7"
    >
      <BottomTab.Screen
        name="Gallery"
        component={GalleryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-photos" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-contact" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
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
        options={{ headerTitle: 'Gallery Tab'}}
      />
    </GalleryStack.Navigator>
  );
}

function GalleryTabNavigator() {
  return (
    <GalleryTab.Navigator>
      <GalleryTab.Screen
      name="LatestTab"
      component={LatestScreen}
      options={{ title: 'Latest' }}
    />
    <GalleryTab.Screen
      name="PopularTab"
      component={PopularScreen}
      options={{ title: 'Popular' }}
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