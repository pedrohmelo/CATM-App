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



// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

// export default function DiaryScreen({navigation}) {
//   function myFunction() {
//     var today = new Date();
//     var month = today.getMonth();
//     return daysInMonth(month + 1, today.getFullYear())
//   }

//   function daysInMonth(month,year) {
//     return new Date(year, month, 0).getDate();
//   }

//   function currentMonth(){
//     var today = new Date();
//     const monthName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho", "Julho", "Agosto", "Setembro", "Outubro","Novembro", "Dezembro"];
//     return monthName[today.getMonth()];
//   }
  
//   let actualMonth = currentMonth();  
//   let daysInCurrentMonth = myFunction();
  
//   return (
//     <View style={styles.month}>

//       <Text style={styles.currentMonth}>{actualMonth}</Text>
//       <Text>{daysInCurrentMonth}</Text>

//       <FlatList/>


//       <View style={styles.week}>
      

//         <View style={styles.day}>
//           <TouchableOpacity 
//             style={styles.circle}
//             onPress={() => navigation.navigate('CalendarNavigator')}
//           />
//           <Text>01</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   month: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: '20%'
//   },
//   currentMonth: {
//     backgroundColor: 'red',
//     width: '100%',
//     textAlign: 'center',
//     fontSize: 20
//   },
//   week: {
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   day: {
//     alignItems: 'center'
//   },
//   circle: {
//     borderWidth: 2,
//     borderColor: 'green',
//     width: 38,
//     height: 38,
//     borderRadius: 19,
//     backgroundColor: 'orange',
//     marginHorizontal: 5,
//   }
// }); 