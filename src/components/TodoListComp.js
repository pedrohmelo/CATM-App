import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, SafeAreaView, FlatList } from "react-native";
import {AntDesign} from '@expo/vector-icons'

import tempData from "../screens/TempData";

export default TodoListComp = ({list}) => {
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    const taskCount = list.todos.length
    
    const [todoList, setTodoList] = useState(list);
    const [modalVisible, setModalVisible] = useState(false);

    const updateTodoList = (updatedList) => {
        setTodoList(updatedList);
    };

    const [name, setName] = useState();
    const [color, setColor] = useState('');
    const [todos, setTodos] = useState('');

    const renderTodo = (list) => {
        
        return (
            <View>                
                <Text>{list.title}</Text>
            </View>
        )
    }

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

                    <View style={[styles.section, styles.header, {borderBottomColor: list.color}]}>
                        <View>
                            <Text style={styles.title}>{list.name}</Text>
                            <Text style={styles.taskCount}>{completedCount} completed of {taskCount} tasks</Text>
                        </View>
                    </View>

                    <View>
                        <FlatList
                            data={list}
                            renderItem={({item}) => renderTodo(item)}
                            keyExtractor={item => item.todos}
                        />
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
    section: {
        //flex: 1,
        alignSelf: 'stretch'
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3
    },
    editModal: {
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#2D3436'
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: '#A4A4A4',
        fontWeight: '600'
    },
})