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
      <View>
        <Text>Como você está hoje?</Text>

          <View style={styles.emojisBox}>
            <TouchableOpacity 
              style={selectedEmoji == 0 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(0)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 1 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(1)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 2 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(2)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={selectedEmoji == 3 ? styles.emojiActionSelected : styles.emojiAction}
              onPress={() => {toogleEmoji(3)}}
            >
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
              </View>
            </TouchableOpacity>
          </View>
          
      </View>
      <View>
        <Text style={styles.textBoxTitle}>AAAA</Text>
        <TextInput
          style={styles.textBox}
          placeholder='teste'
          placeholderTextColor='blue'
          //value={text} TEM QUE SALVAR ISSO AQUI NUMA VARIÁVEL DEPOIS
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  emojisBox: {
    backgroundColor: 'red',
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
    height: 80,
    width: 80,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40
  },
  textBoxTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textBox: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5
  }
});