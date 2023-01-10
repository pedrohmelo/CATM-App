import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import {ToDoScreen} from '../screens/ToDoScreen' 

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.userHeader}>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.user}>Pedro</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.functionalities}
      >
        <TouchableOpacity style={styles.buttonAction} onPress={() => navigation.navigate('HomeNavigator', { screen: 'ToDo' })}>
          <View style={styles.buttonArea}>
            <Image source={require('../assets/images/todolist.png')} style={styles.imageLogo} />
            <Text style={styles.functionatilieName}>To do</Text>
          </View>          
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAction}>
          <View style={styles.buttonArea}>
            <Image source={require('../assets/images/discover3.png')} style={styles.imageLogo} />
            <Text style={styles.functionatilieName}>Diary</Text>
          </View>          
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAction}>
          <View style={styles.buttonArea}>
            <Image source={require('../assets/images/relax2.png')} style={styles.imageLogo} />
            <Text style={styles.functionatilieName}>Chill</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.routine}>
        <Text>Minha Rotina</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  user: {
    fontSize: 25
  },
  userHeader: {
    paddingHorizontal: 15,
    paddingTop: 50
  },
  functionalities: {
    maxHeight: 100,
    marginBottom: 14,
    marginTop: '5%',
    paddingEnd: 14,
    paddingStart: 14,
    //backgroundColor: 'red'
  },
  buttonAction: {
    marginRight: 15,
  },
  buttonArea: {
    backgroundColor: '#ecf0f1',
    height: 100,
    width: 100,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    flex: 1,
    resizeMode: 'contain'
  },
  functionatilieName: {
    fontWeight: 'bold'
  },
  routine: {
    backgroundColor: 'orange'
  }
});
