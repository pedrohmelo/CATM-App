import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';

import InputFields from '../components/InputFields';
import InputPasswordFields from '../components/InputPasswordFields';

export default function LoginScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView  style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={require('../assets/images/LoginImage.png')} />
      </View>

      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Controle{'\n'}suas emoções</Text>
        <Text style={styles.loginText}>Entre para continuar</Text>
      </View>

        <View style={styles.fields}>
          <InputFields
            placeholder='Digite seu e-mail'
            content={email}
            setContent={setEmail}
          />

          <InputPasswordFields
            placeholder='Digite sua senha'
            content={password}
            setContent={setPassword}
          />
        </View>
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    
  },
  logoBox: {
    alignItems: 'center',
    marginTop: '15%',
  },
  logo: {
    width: 200,
    height: 200,
  },
  welcome: {
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D1F1D',
    textAlign: 'center',
  },
  loginText: {
    marginTop: 2,
    color: '#6D6D6D',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
