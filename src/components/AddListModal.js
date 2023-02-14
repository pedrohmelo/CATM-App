import React, { useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Modal, TextInput } from 'react-native'

import {AntDesign} from '@expo/vector-icons'

export default function AddListModal() {

    return (
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
                    <TouchableOpacity style={styles.create}>
                        <Text style={{ color: '#fff', fontWeight: '600' }}>Criar</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center'
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
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        backgroundColor: '#24A6D9',
        alignItems: 'center',
        justifyContent: 'center'
    },
})