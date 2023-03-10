import React, { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput,
} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ToDo3Screen(){
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const backgroundColors = ['#5CD859', '#24A6D9', '#595BD9', '#CCA5CE', '#D159D8', '#D85963', '#D88559'];
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
            setTasks([...tasks, { name: newTaskName, color }]);
            setNewTaskName('');
            toggleModal();
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.todaysDate}>
                <Text style={styles.headerTitle}>Afazeres</Text>
                <MaterialCommunityIcons name="clipboard-list-outline" size={34} color="black" />
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
                        style={[styles.addTaskCreate, {backgroundColor: color}]}
                        onPress={createTask}
                    >
                        <Text style={styles.addTaskCreateText}>Criar Tarefa</Text>
                    </TouchableOpacity>
                </Modal>
            </View>

            <View style={styles.activitiesBox}>
                <FlatList
                    data={tasks}
                    renderItem={({ item, index }) => (
                        <View style={[styles.renderedActivities, { backgroundColor: item.color }]}>
                            <Text style={{width: '78%'}}>{item.name}</Text>
                            <TouchableOpacity
                                style={styles.renderedActivitiesCheck}
                                onPress={() => {
                                    const newTasks = [...tasks];
                                    newTasks[index].completed = !newTasks[index].completed
                                    setTasks(newTasks)
                                }}
                            >
                                {item.completed && <AntDesign name="check" size={24} color="black" />}
                            </TouchableOpacity>
                            {/* removes a task */}
                            <TouchableOpacity
                                style={styles.renderedActivitiesDelete}
                                onPress={() => {
                                    const newTasks = [...tasks];
                                    newTasks.splice(index, 1);
                                    setTasks(newTasks);
                                }}
                            >
                                <AntDesign name="delete" size={24} color="black" />
                            </TouchableOpacity>
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
        backgroundColor: "#fff"
    },
    todaysDate: {
        paddingHorizontal: 20,
        paddingVertical: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '400'
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
        //borderWidth: 0.5,
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
    activitiesBox: {
        paddingHorizontal: 20,
        height: '70%'
    },
    renderedActivities: {
        width: '100%',
        height: 60,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 0.5,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    renderedActivitiesCheck: {
        width: 30,
        height: 30,
        borderWidth: 0.5,
        borderRadius: 5,
        position: 'absolute',
        left: '95%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    renderedActivitiesDelete: {
        width: 30,
        height: 30,
        borderWidth: 0.5,
        borderRadius: 5,
        position: 'absolute',
        left: '83%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});