import React, {useState} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'

export default function AddListModal(){

    return(
        <KeyboardAvoidingView style={styles.container}>
            
            <Text>MODAL!!!!!!!!</Text>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center'
    }
})