import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.userHeader}>
        <Text>Olá,</Text>
        <Text>Pedro</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.functionalities}
      >
        <TouchableOpacity style={styles.buttonAction}>
          <View style={styles.buttonArea}>
            <Image source={require('../assets/images/todolist.png')} style={styles.imageLogo} />
            <Text>teste</Text>
          </View>          
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAction}>
          <View style={styles.buttonArea}>
            <Image source={require('../assets/images/todolist.png')} style={styles.imageLogo} />
            <Text>teste</Text>
          </View>          
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAction}>
          <View style={styles.buttonArea}>
            <Image source={require('../assets/images/todolist.png')} style={styles.imageLogo} />
            <Text>teste</Text>
          </View>          
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userHeader: {
    paddingHorizontal: 15
  },
  functionalities: {
    alignSelf: 'center',
    maxHeight: 120,
    marginBottom: 14,
    marginTop: '5%',
    paddingEnd: 14,
    paddingStart: 14,
  },
  buttonAction: {
    alignItems: 'center',
    marginRight: 15
  },
  buttonArea: {
    backgroundColor: '#ecf0f1',
    height: 110,
    width: 100,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    flex: 1,
    resizeMode: 'contain'
  }
});
