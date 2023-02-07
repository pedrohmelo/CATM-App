import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

import InputFields from '../components/InputFields';
import InputPasswordFields from '../components/InputPasswordFields';

export default function LoginScreen({navigation}) {

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

      <TouchableOpacity
        //onPress={() => navigation.navigate('RecoverStack')}
        style={styles.forgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: (email && password) ? '#CBD7CD' : '#EDF1F3' }]}
        //disabled={!(email && password)}
        //onPress={() => handleLogin()}
        onPress={() => navigation.navigate('TabNavigator', { screen: 'HomeScreen' })}
      >
        <Text style={[styles.loginButtonText, { color: (email && password) ? '#1D1F1D' : '#ACB5BB' }]}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButton}
        //onPress={() => navigation.navigate('SignInStack')}
      >
        <Text style={styles.signInButtonText}>Criar Conta</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%'
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
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    color: '#1D1F1D',
    fontSize: 14
  },
  loginButton: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '15%'
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  signInButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '5%'
  },
  signInButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D1F1D',
  },
});
