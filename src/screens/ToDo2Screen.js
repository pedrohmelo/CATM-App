import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Modal, Pressable, KeyboardAvoidingView, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'

import tempData from "./TempData";
import TodoListComp from "../components/TodoListComp";

export default function ToDo2Screen({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const [tempDataDinamic, setTempDataDinamic] = useState(false);
    
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

    function createTodo(name,color){
        setTempDataDinamic([...tempDataDinamic, {name: name, color: color, todos:[]}]); //qq essa linha faz
        // essa linha faz o hook da tempDataDinamic fazer um dataDinamic.append, mas quando usa hook n tem append
        // ...tempDataDInamic pega tudo q ja existe, ai meio q crio um novo array com [oq tem, novo]
        setModalVisible(false);
        setColor(backgroundColors[5]); // aq n existe bgColor, pq n t dentro do map
        onChangeText("");
    }
    if (tempDataDinamic == false){
        setTempDataDinamic(tempData);
        return
    }
    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                //transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View>

                    <TouchableOpacity
                        style={{ position: 'absolute', top: 30, right: 30 }}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <AntDesign name='close' size={24} color={'#2D3436'} />
                    </TouchableOpacity>

                    <View style={{ alignSelf: 'stretch', marginHorizontal: 30 }}>
                        <Text style={styles.modalListTitle}>Crie uma nova lista</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nome da Lista'
                            value={value}
                            onChangeText={text => onChangeText(text)}
                        />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
                            {renderColors()}
                        </View>

                        <TouchableOpacity 
                            style={[styles.create, {backgroundColor: color}]}
                            onPress={() => {createTodo(value,color)}}
                        >
                            <Text style={{color: '#fff', fontWeight: '600'}}>Criar</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>
            </Modal>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.divider} />
                <Text style={styles.title}>
                    Lista de
                    <Text style={{ fontWeight: '300', color: '#24A6D9' }}>Afazeres</Text>
                </Text>
                <View style={styles.divider} />
            </View>

            <View style={{ marginVertical: 48 }}>
                <TouchableOpacity style={styles.addList} onPress={() => setModalVisible(!modalVisible)}>
                    <AntDesign name="plus" size={16} color={'#24A6D9'} />
                </TouchableOpacity>

                <Text style={styles.add}>AddList</Text>
            </View>

            <View style={{ height: 275, paddingLeft: 32 }}>
                <FlatList
                    data={tempDataDinamic}
                    keyExtractor={item => item.name}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TodoListComp list={item} />

                        // <View>
                        //     <Text>{item.name}</Text>
                        // </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // ======== MODAL =========
    modalListTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: '#2D3436',
        alignSelf: 'center',
        marginTop: '20%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#2D3436',
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 16
    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // ===========================
    //==========COLOR SELECTION========
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    },
    //
    divider: {
        backgroundColor: '#A7C8D9',
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: '2D3436',
        paddingHorizontal: 60
    },
    addList: {
        borderWidth: 2,
        borderColor: '#A7CBD9',
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    add: {
        color: '#24A6D9',
        fontWeight: '600',
        fontSize: 14,
        marginTop: 8
    }
})