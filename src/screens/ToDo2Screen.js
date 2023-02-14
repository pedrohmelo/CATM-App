import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Modal, Pressable, KeyboardAvoidingView, TextInput } from "react-native";
import {AntDesign} from '@expo/vector-icons'

import tempData from "./TempData";
import TodoListComp from "../components/TodoListComp";


export default function ToDo2Screen({navigation}){

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>

            <Modal 
                animationType="slide"
                //transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <KeyboardAvoidingView>

                    <TouchableOpacity
                        style={{position: 'absolute', top: 30, right: 30}}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <AntDesign name='close' size={24} color={'#2D3436'} />
                    </TouchableOpacity>

                    <View style={{alignSelf: 'stretch', marginHorizontal: 30}}>
                        <Text style={styles.modalListTitle}>Crie uma nova lista</Text>
                        <TextInput style={styles.input} placeholder='Nome da Lista' />
                    </View>
                                       
                </KeyboardAvoidingView>
            </Modal>

            <View style={{flexDirection: 'row'}}>
                <View style={styles.divider}/>
                <Text style={styles.title}>
                    Todo 
                    <Text style={{fontWeight: '300', color: '#24A6D9'}}>
                        List
                    </Text>
                </Text>
                <View style={styles.divider}/>
            </View>

            <View style={{marginVertical: 48}}> 
                <TouchableOpacity style={styles.addList} onPress={() => setModalVisible(!modalVisible)}>
                    <AntDesign name="plus" size={16} color={'#24A6D9'} />
                </TouchableOpacity>

                <Text style={styles.add}>AddList</Text>
            </View>

            <View style={{height: 275, paddingLeft: 32}}>
                <FlatList 
                    data={tempData}
                    keyExtractor={item => item.name}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <TodoListComp list={item}/>
                        
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