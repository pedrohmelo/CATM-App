import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";

import InputFields from "../components/InputFields";
import InputEmailField from '../components/InputEmailField'
import InputPasswordFields from "../components/InputPasswordFields";

export default function CreateAccountScreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Criar Conta</Text>
                <Text style={styles.headerMessage}>Crie sua conta para ter acesso ao aplicativo!</Text>
            </View>

            <View style={styles.userData}>
                <InputFields 
                    placeholder='Digite seu nome'
                    content={name}
                    setContent={setName}
                />

                <InputEmailField 
                    placeholder='Digite seu e-mail'
                    content={email}
                    setContent={setEmail}
                />

                <InputPasswordFields
                    placeholder='Digite sua senha'
                    content={password}
                    setContent={setPassword}
                />

                <InputPasswordFields
                    placeholder='Confirme sua senha'
                    content={password}
                    setContent={setPassword}
                />
            </View>
                <TouchableOpacity style={styles.cadastrateButton}>
                    <Text style={styles.cadastrateButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    header: {
        width: '100%',
        paddingTop: '25%',
        paddingBottom: '3%',
        paddingHorizontal: '5%'
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '600',
        color: '#1D1F1D'
    },
    headerMessage: {
        color: '#6D6D6D',
        fontSize: 15
    },
    userData: {
        paddingHorizontal: '5%'
    },
    cadastrateButton: {
        marginTop: 20,
        width: '50%',
        //height: '20%',
        borderWidth: 1,
        borderColor: '#8eb28e',
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: '#b7e5b7'
    },
    cadastrateButtonText: {
        alignSelf: 'center',
        fontSize: 20
    }
})