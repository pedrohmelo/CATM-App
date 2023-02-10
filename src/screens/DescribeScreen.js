import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
                <Text style={styles.emoji}>😄</Text>
                <Text>Ótimo</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 1 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(1)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
                <Text>Neutro</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 2 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(2)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
                <Text>Mal</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 3 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(3)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
                <Text>Péssimo</Text>
              </View>
            </TouchableOpacity>
          </View>
          
      </View>
      <View style={styles.describeText}>
        <Text style={styles.textBoxTitle}>Descreva um pouco sobre seu dia</Text>
        <TextInput
          style={styles.textBox}
          placeholder='teste'
          placeholderTextColor='blue'
          multiline={true}
          //value={text} TEM QUE SALVAR ISSO AQUI NUMA VARIÁVEL DEPOIS
        />
      </View>

      <View style={styles.describeText}>
        <Text style={styles.textBoxTitle}>Consegue pensar em três coisas pelas quais você foi grato hoje?</Text>
        <TextInput
          style={styles.textBox}
          placeholder='teste'
          placeholderTextColor='blue'
          multiline={true}
          //value={text} TEM QUE SALVAR ISSO AQUI NUMA VARIÁVEL DEPOIS
        />
      </View>

      <View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  emojiActionSelected: {
    backgroundColor: 'green',
    marginRight: 10
  },
  emojiAction: {
    marginRight: 10
  },
  buttonArea: {
    backgroundColor: '#ecf0f1',
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
    marginHorizontal: 10,
    marginVertical: 10
  },
  textBoxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textAlign: 'left'
  },
  textBox: {
    width: '90%',
    //height: 350,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    //backgroundColor: 'blue'
  },
  saveButton: {
    marginTop: 20,
    width: '50%',
    //height: '20%',
    borderWidth: 1,
    borderColor: '#8eb28e',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#b7e5b7'
  },
  saveButtonText: {
    textAlign: 'center',
    fontSize: 20,
  }
});