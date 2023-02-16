import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput
} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


export default function ToDo3Screen(){
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const backgroundColors = ['#5CD859', '#24A6D9', '#595BD9', '#8022D9', '#D159D8', '#D85963', '#D88559'];
    const [color, setColor] = useState(backgroundColors[5]);

    function renderColors() {
        return backgroundColors.map((bgColor) => (
            <TouchableOpacity
                key={bgColor}
                style={[styles.colorSelect, { backgroundColor: bgColor }]}
                onPress={() => setColor(bgColor)}
            />
        ))
    }

    const [tasks, setTasks] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');

    function createTask() {
        if (newTaskName.trim()) {
            setTasks([...tasks, newTaskName]);
            setNewTaskName('');
            toggleModal();
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.todaysDate}>
                <Text>DIAAAAAAA</Text>
            </View>

            <View style={styles.addButtonBox}>
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={toggleModal}
                >
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
                
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={toggleModal}
                    style={styles.activityModal}
                >
                    <Text style={styles.addTaskTitle}>Cadastrar Nova Tarefa</Text>
                    <TouchableOpacity 
                        onPress={toggleModal}
                        style={{position: 'absolute', top: 20, right: 20}}
                    >
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.addTaskInput}
                        placeholder="Insira o nome da tarefa"
                        value={newTaskName}
                        onChangeText={setNewTaskName}
                    />

                    <View style={styles.addTaskColor}>
                        {renderColors()}
                    </View>

                    <TouchableOpacity 
                        style={styles.addTaskCreate}
                        onPress={createTask}
                    >
                        <Text style={styles.addTaskCreateText}>Criar Tarefa</Text>
                    </TouchableOpacity>
                </Modal>
            </View>

            <View >
                <FlatList
                    data={tasks}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    todaysDate: {
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    addButtonBox: {
        position: 'absolute',
        top: '90%',
        left: '80%'
    },
    addButton: {
        backgroundColor: '#D85963',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    activityModal: {
        
    },
    addTaskTitle: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 20,
        fontWeight: '500'
    },
    addTaskInput: {
        height: 40,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    addTaskCreate: {
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#2D3436'
    },
    addTaskCreateText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400'
    },
    addTaskColor: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    },
});