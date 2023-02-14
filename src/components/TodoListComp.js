import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, SafeAreaView } from "react-native";
import {AntDesign} from '@expo/vector-icons'

import TempData from "../screens/TempData";

export default TodoListComp = ({list}) => {
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    
    const [todoList, setTodoList] = useState(list);
    const [modalVisible, setModalVisible] = useState(false);

    const updateTodoList = (updatedList) => {
        setTodoList(updatedList);
    };

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [todos, setTodos] = useState('');

    return(
        <View>

            <Modal 
                animationType="slide" 
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <SafeAreaView style={styles.editModal}>
                    <TouchableOpacity 
                        style={{position: 'absolute', top: 64, right: 32, zIndex: 10}}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <AntDesign name='close' size={24} color={'#2D3436'} />
                    </TouchableOpacity>

                    <View>
                        <View>
                            <Text>{list.name}</Text>
                            <Text>{completedCount}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>

            <TouchableOpacity 
                style={[styles.listContainer, {backgroundColor: list.color}]}
                onPress={() => setModalVisible(!modalVisible)}
            >
                
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>

            <View style={{alignItems: 'center'}}>
                <Text style={styles.count}>{remainingCount}</Text>
                <Text style={styles.subtitle}>Remaining</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style={styles.count}>{completedCount}</Text>
                <Text style={styles.subtitle}>Completed</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 18
    },
    count: {
        fontSize: 48,
        fontWeight: '200',
        color: '#fff'
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#fff'
    },
    //=========MODAL TO EDIT THE LIST===========
    editModal: {
        alignItems: 'center'
    }
})