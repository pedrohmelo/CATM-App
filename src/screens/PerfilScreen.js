import * as React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import InputFields from '../components/InputFields';

export default function PerfilScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')}>PERFIL SCREEN</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
