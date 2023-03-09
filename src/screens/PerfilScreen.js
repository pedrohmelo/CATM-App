import * as React from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function PerfilScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{marginHorizontal: 20, marginVertical: 20, fontSize: 20, fontWeight: '500'}}>Minha Conta</Text>

      <View style={styles.field}>
        <View style={styles.insideField}>
          <View style={{ marginRight: '5%' }}>
            <AntDesign name="user" size={24} color="black" />
          </View>
          <TextInput
            placeholder={"Pedro Melo"}
            placeholderTextColor={'#6C7278'}
            style={styles.input}
            editable={false}
          />
        </View>
      </View>

      <View style={styles.field}>
        <View style={styles.insideField}>
          <View style={{ marginRight: '5%' }}>
            <Fontisto name="email" size={24} color="black" />
          </View>
          <TextInput
            placeholder={"ra112653@uem.br"}
            placeholderTextColor={'#6C7278'}
            style={styles.input}
            editable={false}
          />
        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: '20%'
  },
  field: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '3%',
    marginHorizontal: '5%',
    paddingVertical: '5%',
    paddingHorizontal: '6%',
    borderColor: '#DCE4E8',
    borderWidth: 1,
    borderRadius: 20,
  },
  insideField: {
    flexDirection: 'row',
  },
  userImage: {
    marginRight: '5%'
  },
  input: {
    width: '75%',
    fontSize: 18,
  },
});
