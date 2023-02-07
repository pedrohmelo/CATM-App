import * as React from 'react-native';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView  style={styles.container}>
      <View>
        <Text>Controle{'\n'}suas emoções</Text>
        <Text>Entre para continuar</Text>
      </View>

      <View>
        
      </View>
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    
  },
});
