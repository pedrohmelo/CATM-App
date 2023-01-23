import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import * as React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function CalendarComponent() {
  return (
    <View style={styles.container}>
      <Text>CALENDAR</Text>
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