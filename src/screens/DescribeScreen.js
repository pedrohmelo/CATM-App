import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';

export default function DescribeScreen() {

  const [selectedEmoji, setSelectedEmoji] = useState(null);


  function toogleEmoji(id){
    if(id == selectedEmoji){
      setSelectedEmoji(null)
    } else{
      setSelectedEmoji(id)
    }
  }
  
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Como você está hoje?</Text>

          <View style={styles.emojisBox}>
      
            <TouchableOpacity
              style={selectedEmoji == 0 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(0)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😔</Text>
                <Text>Triste</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 1 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(1)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😐</Text>
                <Text>Neutro</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 2 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(2)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>🙂</Text>
                <Text>Bem</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 3 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(3)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
                <Text>Feliz</Text>
              </View>
            </TouchableOpacity>
          </View>
          
      </View>

      <View style={styles.describeText}>
        <Text style={styles.textBoxTitle}>Descreva um pouco sobre seu dia</Text>
        <TextInput
          style={styles.textBox}
          placeholder='Escreva aqui'
          multiline={true}
          //value={text} TEM QUE SALVAR ISSO AQUI NUMA VARIÁVEL DEPOIS
        />
      </View>

      <View style={styles.describeText}>
        <Text style={styles.textBoxTitle}>Consegue pensar em algo pelo qual você foi grato hoje?</Text>
        <TextInput
          style={styles.textBox}
          placeholder='Escreva aqui'
          multiline={true}
          //value={text} TEM QUE SALVAR ISSO AQUI NUMA VARIÁVEL DEPOIS
        />
      </View>

      <View>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={console.log(selectedEmoji)}
        >
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    paddingTop: '15%'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  emojisBox: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  emojiActionSelected: {
    backgroundColor: '#98C6EF',
    marginRight: 10,
    borderRadius: 20,
    width: 70,
    height: 70
  },
  emojiAction: {
    marginRight: 10,
  },
  buttonArea: {
    //backgroundColor: '#ecf0f1',
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40,
  },
  describeText: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  textBoxTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    marginHorizontal: 16
  },
  textBox: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 5
  },
  saveButton: {
    marginTop: 20,
    width: '50%',
    //height: '20%',
    //borderWidth: 1,
    //borderColor: '#8eb28e',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#98C6EF'
  },
  saveButtonText: {
    textAlign: 'center',
    fontSize: 20,
  }
});