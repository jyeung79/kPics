import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Gallery: {
            screens: {
              GalleryScreen: 'one',
            },
          },
          Favorites: {
            screens: {
              FavoritesScreen: 'two',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
