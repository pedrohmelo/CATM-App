import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BackPage from '../components/BackPage';
import { AntDesign } from '@expo/vector-icons'; 

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [selectedEmoji, setSelectedEmoji] = useState('🐱');

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

    const [selectedDate, setSelectedDate] = useState(new Date())

    // const renderDay = ({ date, isCurrentMonth }) => {
    //     if (date.getDate() === new Date().getDate()) {
    //         return (
    //             <TouchableOpacity key={date} style={[styles.day, !isCurrentMonth && styles.dayOutsideMonth]}>
    //                 <Text style={[styles.today, styles.emoji]}>{selectedEmoji}</Text>
    //             </TouchableOpacity>
    //         );
    //     } else {
    //         return (
    //             <TouchableOpacity key={date} style={[styles.day, !isCurrentMonth && styles.dayOutsideMonth]}>
    //                 <Text style={styles.dayNumber}>{date.getDate()}</Text>
    //             </TouchableOpacity>
    //         );
    //     }
    // };

    const renderDay = ({date, isCurrentMonth}) => {
        const selected = selectedDate.getDate() == date.getDate() && isCurrentMonth;
        const style = selected ? [styles.today, styles.emoji] : styles.dayNumber;
        const text = selected ? selectedEmoji : date.getDate()
        
        console.log(date, '\n')
        console.log(selectedDate, '\n')
        console.log(text, '\n')
        console.log(selectedEmoji, '\n')
        console.log(selected, '\n\n', '\n')
        return(
                <TouchableOpacity key={date} style = {[styles.day, !isCurrentMonth && styles.dayOutsideMonth]}
                    onPress={() => {setSelectedDate(date)}}
                >
                    <Text style={style}>{text}</Text>
                </TouchableOpacity>
        )
    }

    function saveData (selectedDate, selectedEmoji)  {
        const selected = selectedDate.getDate() == date.getDate();
        const style = selected ? [styles.today, styles.emoji] : styles.dayNumber;
        return(
            <TouchableOpacity key={selectedDate} style = {[styles.day,  styles.dayOutsideMonth]}  
            >
                <Text style={style}>{selectedEmoji}</Text>
            </TouchableOpacity>
    )
    }

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
            <View>
                <Text style={styles.textBoxTitle}>Como você está hoje?</Text>
            </View>
            <View style={styles.pickerContainer}>
                <View style={styles.picker}>
                    <Text style={styles.emoji}>{selectedEmoji}</Text>
                    <Picker
                        selectedValue={selectedEmoji}
                        onValueChange={itemValue => setSelectedEmoji(itemValue)}
                        style={styles.pickerMenu}>
                        <Picker.Item label="Triste 😿" value="😿" />
                        <Picker.Item label="Neutro 🐱" value="🐱" />
                        <Picker.Item label="Bem 😺" value="😺" />
                        <Picker.Item label="Feliz 😻" value="😻" />
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
                    // onPress={() => console.log(selectedEmoji, '\n' ,selectedDate, '\n', daysInMonth, '\n')}
                    onPress={() => saveData(selectedDate, selectedEmoji)}
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