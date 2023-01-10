import * as React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function ToDoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')}>ToDo Screen</Text>
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