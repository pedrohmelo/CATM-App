// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// const Calendar = () => {
//   const [date, setDate] = useState(new Date());

//   const handlePrevMonth = () => {
//     setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
//   };

//   const handleNextMonth = () => {
//     setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
//   };

//   const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   const month = date.getMonth();
//   const year = date.getFullYear();

//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const firstDayOfMonth = new Date(year, month, 1).getDay();
//   const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

//   const daysBeforeMonth = firstDayOfMonth;
//   const daysAfterMonth = 6 - lastDayOfMonth;

//   const days = [];

//   for (let i = daysBeforeMonth; i > 0; i--) {
//     const day = new Date(year, month, 1 - i);
//     days.push({ date: day, isCurrentMonth: false });
//   }

//   for (let i = 1; i <= daysInMonth; i++) {
//     const day = new Date(year, month, i);
//     days.push({ date: day, isCurrentMonth: true });
//   }

//   for (let i = 1; i <= daysAfterMonth; i++) {
//     const day = new Date(year, month, daysInMonth + i);
//     days.push({ date: day, isCurrentMonth: false });
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handlePrevMonth}>
//           <Text style={styles.arrow}>{'<'}</Text>
//         </TouchableOpacity>
//         <Text style={styles.month}>{monthNames[month]} {year}</Text>
//         <TouchableOpacity onPress={handleNextMonth}>
//           <Text style={styles.arrow}>{'>'}</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.daysOfWeek}>
//         {daysOfWeek.map(day => (
//           <Text key={day} style={styles.dayOfWeek}>{day}</Text>
//         ))}
//       </View>
//       <View style={styles.days}>
//         {days.map(({ date, isCurrentMonth }) => (
//           <TouchableOpacity key={date} style={[styles.day, !isCurrentMonth && styles.dayOutsideMonth]}>
//             <Text style={[styles.dayNumber, date.getDate() === new Date().getDate() && styles.today]}>
//               {date.getDate()}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     marginTop: 50
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   arrow: {
//     fontSize: 20,
//     color: '#666',
//   },
//   month: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   daysOfWeek: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//     },
//     dayOfWeek: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//     width: '14%',
//     },
//     days: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     },
//     day: {
//     width: '14%',
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
//     dayOutsideMonth: {
//     opacity: 0.5,
//     },
//     dayNumber: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     },
//     today: {
//     backgroundColor: '#eee',
//     borderRadius: 20,
//     padding: 8,
//     },
//     });


// export default Calendar;


import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BackPage from '../components/BackPage';
import { AntDesign } from '@expo/vector-icons'; 

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [selectedEmoji, setSelectedEmoji] = useState('🌞');

    const handlePrevMonth = () => {
        setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    const month = date.getMonth();
    const year = date.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

    const daysBeforeMonth = firstDayOfMonth;
    const daysAfterMonth = 6 - lastDayOfMonth;

    const days = [];

    for (let i = daysBeforeMonth; i > 0; i--) {
        const day = new Date(year, month, 1 - i);
        days.push({ date: day, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const day = new Date(year, month, i);
        days.push({ date: day, isCurrentMonth: true });
    }

    for (let i = 1; i <= daysAfterMonth; i++) {
        const day = new Date(year, month, daysInMonth + i);
        days.push({ date: day, isCurrentMonth: false });
    }

    const renderDay = ({ date, isCurrentMonth }) => {
        if (date.getDate() === new Date().getDate()) {
            return (
                <TouchableOpacity key={date} style={[styles.day, !isCurrentMonth && styles.dayOutsideMonth]}>
                    <Text style={[styles.today, styles.emoji]}>{selectedEmoji}</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity key={date} style={[styles.day, !isCurrentMonth && styles.dayOutsideMonth]}>
                    <Text style={styles.dayNumber}>{date.getDate()}</Text>
                </TouchableOpacity>
            );
        }
    };

    return (
        <ScrollView style={styles.container}>
            <BackPage/>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePrevMonth}>
                    <AntDesign name="caretleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.month}>{monthNames[month]} {year}</Text>
                <TouchableOpacity onPress={handleNextMonth}>
                    <AntDesign name="caretright" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.daysOfWeek}>
                {daysOfWeek.map(day => (
                    <Text key={day} style={styles.dayOfWeek}>{day}</Text>
                ))}
            </View>
            <View style={styles.days}>
                {days.map(renderDay)}
            </View>
            <View style={styles.pickerContainer}>
                <View style={styles.picker}>
                    <Text style={styles.emoji}>{selectedEmoji}</Text>
                    <Picker
                        selectedValue={selectedEmoji}
                        onValueChange={itemValue => setSelectedEmoji(itemValue)}
                        style={styles.pickerMenu}>
                        <Picker.Item label="Triste" value="😔" />
                        <Picker.Item label="Neutro" value="😐" />
                        <Picker.Item label="Bem" value="🙂" />
                        <Picker.Item label="Feliz" value="😀" />
                    </Picker>
                </View>
            </View>
            <View style={styles.describeText}>
                <Text style={styles.textBoxTitle}>Descreva um pouco sobre seu dia</Text>
                <TextInput
                    style={styles.textBox}
                    placeholder='Escreva aqui'
                    multiline={true}
                //value={text} TEM QUE SALVAR ISSO AQUI NUMA VARIÁVEL DEPOIS
                />
            </View>

            <View style={styles.describeText}>
                <Text style={styles.textBoxTitle}>Consegue pensar em algo pelo qual você foi grato hoje?</Text>
                <TextInput
                    style={styles.textBox}
                    placeholder='Escreva aqui'
                    multiline={true}
                //value={text} TEM QUE SALVAR ISSO AQUI NUMA VARIÁVEL DEPOIS
                />
            </View>

            <View>
                <TouchableOpacity
                    style={styles.saveButton}
                >
                    <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '5%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    month: {
        fontSize: 18,
    },
    daysOfWeek: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    dayOfWeek: {
        fontSize: 12,
        color: '#999',
    },
    days: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    day: {
        width: '12%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 2,
        marginHorizontal: 4 ,
    },
    dayOutsideMonth: {
        opacity: 0.5,
    },
    today: {
        //backgroundColor: '#1e90ff',
        color: '#fff',
    },
    emoji: {
        fontSize: 24,
    },
    dayNumber: {
        fontSize: 16,
        color: '#333',
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    pickerMenu: {
        height: 50,
        width: 150,
    },

    describeText: {
        paddingHorizontal: 10,
        paddingVertical: 10
      },
    textBoxTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        marginHorizontal: 16
    },
    textBox: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 5
    },

    saveButton: {
        marginTop: 20,
        width: '50%',
        //height: '20%',
        //borderWidth: 1,
        //borderColor: '#8eb28e',
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: '#98C6EF'
      },
    saveButtonText: {
        textAlign: 'center',
        fontSize: 20,
    }
});

export default Calendar;