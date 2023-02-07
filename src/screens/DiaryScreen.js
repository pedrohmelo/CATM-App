import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function DiaryScreen({navigation}) {
  function myFunction() {
    var today = new Date();
    var month = today.getMonth();
    return daysInMonth(month + 1, today.getFullYear())
  }

  function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
  }

  function currentMonth(){
    var today = new Date();
    const monthName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho", "Julho", "Agosto", "Setembro", "Outubro","Novembro", "Dezembro"];
    return monthName[today.getMonth()];
  }
  
  let actualMonth = currentMonth();  
  let daysInCurrentMonth = myFunction();
  
  return (
    <View style={styles.month}>

      <Text style={styles.currentMonth}>{actualMonth}</Text>
      <Text>{daysInCurrentMonth}</Text>

      <FlatList/>


      <View style={styles.week}>

      

        <View style={styles.day}>
          <TouchableOpacity 
            style={styles.circle}
            onPress={() => navigation.navigate('CalendarNavigator')}
          />
          <Text>01</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  month: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%'
  },
  currentMonth: {
    backgroundColor: 'red',
    width: '100%',
    textAlign: 'center',
    fontSize: 20
  },
  week: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  day: {
    alignItems: 'center'
  },
  circle: {
    borderWidth: 2,
    borderColor: 'green',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'orange',
    marginHorizontal: 5,
  }
}); 