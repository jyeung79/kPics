import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PopularScreen() {
  return (
    <View style={styles.container}>
      <Text style={{
        color: '#fff',
        fontSize: 30,
      }}>To Be Coming Soon!</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
