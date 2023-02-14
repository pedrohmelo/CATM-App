import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";

export default TodoListComp = ({list}) => {
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    
    const [todoList, setTodoList] = useState(list);
    const [modalVisible, setModalVisible] = useState(false);

    const updateTodoList = (updatedList) => {
        setTodoList(updatedList);
    };

    return(
        <View>

            <Modal 
                animationType="slide" 
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View>
                    <Text>List Modal</Text>
                </View>
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
    }
})