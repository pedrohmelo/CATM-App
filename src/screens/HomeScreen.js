import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import Task from '../components/Task';

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

        <TouchableOpacity style={styles.buttonAction} onPress={() => navigation.navigate('HomeNavigator', { screen: 'ToDo' })}>
          <View style={styles.buttonArea}>
            <Image source={require('../assets/images/discover3.png')} style={styles.imageLogo} />
            <Text style={styles.functionatilieName}>Sei lá</Text>
          </View>          
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAction} onPress={() => navigation.navigate('HomeNavigator', { screen: 'Diary' })}>
          <View style={styles.buttonArea}>
            <Image source={require('../assets/images/relax2.png')} style={styles.imageLogo} />
            <Text style={styles.functionatilieName}>Diary</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.routine}>
        <Text style={styles.routineTitle}>Atividades</Text>

        <View style={styles.metasBox}>
          <Text style={{fontWeight: '400', marginBottom: '2%'}}>Metas Diárias</Text>

          <View style={styles.metasText}>
            <View style={styles.metasAchieved}>
              <Text>3/5</Text>
            </View>
            <Text style={styles.achievedText}>Tarefas Concluídas</Text>
          </View>
          <Text>Você ainda não completou nenhuma tarefa</Text>
        </View>
        
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
    marginHorizontal: 15,
    marginTop: 50
  },
  functionalities: {
    maxHeight: 120,
    marginBottom: 14,
    marginTop: '5%',
    paddingEnd: 14,
    paddingStart: 14,
    //backgroundColor: 'red',
  },
  buttonAction: {
    marginRight: 15,
    marginTop: 10
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
    resizeMode: 'contain',
  },
  functionatilieName: {
    fontWeight: 'bold'
  },
  routine: {
    padding: 2,
  },
  routineTitle: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: '700'
  },
  metasBox: {
    width: '90%',
    borderRadius: 16,
    backgroundColor: '#F2F1F1',
    padding: 10,
    
  },
  metasText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  metasAchieved: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: '2%'
  },
  achievedText: {
    fontSize: 17,
    fontWeight: '600',
    paddingHorizontal: 10,
  }
});
