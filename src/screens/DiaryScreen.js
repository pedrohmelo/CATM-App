import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import BackPage from '../components/BackPage';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Calendar = ({navigation}) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());



  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dayContainer}
      //onPress={() => setSelectedDay(item)}
      onPress={() => navigation.navigate('CalendarNavigator')}
    >
      <Text style={[styles.dayText, item === selectedDay && styles.selected]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <View style={styles.container}>

      <BackPage/>

      <View style={styles.calendarContainer}>
        <Text style={styles.monthText}>
          {months[selectedMonth]} {selectedYear}
        </Text>
        <FlatList
          data={days}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          numColumns={7}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  calendarContainer: {
    alignItems: 'center',
    paddingHorizontal: 10
  },
  monthText: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 15,
  },
  dayContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    marginHorizontal: 3,
    marginBottom: 30,
  },
  dayText: {
    fontSize: 16,
  },
  selected: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Calendar;