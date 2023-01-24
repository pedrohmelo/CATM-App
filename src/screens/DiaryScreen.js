import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DiaryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Calendário aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 