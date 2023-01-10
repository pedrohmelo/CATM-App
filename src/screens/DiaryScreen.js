import * as React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function DiaryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')}>Diary Screen</Text>
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