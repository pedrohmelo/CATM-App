import * as React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')}>DETAILS SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
