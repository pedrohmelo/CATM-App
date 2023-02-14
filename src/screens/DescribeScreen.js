// import React, { useState } from 'react';
// import { FlatList, Text, TouchableOpacity, View } from 'react-native';
// import moment from 'moment';

// const data = ['😊', '😃', '😎', '😜'];

// const EmojiList = ({ onEmojiPress }) => {
//   return (
//     <View style={{alignItems: 'center', alignContent: 'center', flexDirection: 'row'}}>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => onEmojiPress(item)}>
//             <Text style={{ fontSize: 30, padding: 20 }}>{item}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };

// const Calendar = ({ selectedEmoji, currentDay }) => {
//   const daysInMonth = moment().daysInMonth();
//   const days = [];
//   for (let i = 1; i <= daysInMonth; i++) {
//     days.push(i);
//   }

//   return (
//     <View>
//       <View style={{ flexDirection: 'row' }}>
//         {days.map((day) => (
//           <View
//             key={day}
//             style={{
//               width: 40,
//               height: 40,
//               borderWidth: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Text style={{ fontSize: 20 }}>{day}</Text>
//             {day === currentDay ? (
//               <Text style={{ fontSize: 30 }}>{selectedEmoji}</Text>
//             ) : null}
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const EmojiApp = () => {
//   const [selectedEmoji, setSelectedEmoji] = useState(null);
//   const currentDay = moment().date();

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <EmojiList onEmojiPress={(emoji) => setSelectedEmoji(emoji)} />
//       <Calendar selectedEmoji={selectedEmoji} currentDay={currentDay} />
//     </View>
//   );
// };

// export default EmojiApp;

import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function DescribeScreen() {

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emotions, setEmotions] = useState();

//   const data = ['😊', '😃', '😎', '😜'];

// const EmojiList = ({onEmojiPress}) => {
//   return(
//     <View>
//       <FlatList
//         data={data}
//         renderItem={({item}) => (
//           <TouchableOpacity style={selectedEmoji == 0 ? styles.emojiActionSelected : styles.emojiAction}>
//             <Text>{item}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//       />
//     </View>
//   )
// }

  const data = [
    {
      id: 0,
      emoji: '😊',
      description: 'Ótimo'
    },
    {
      id: 1,
      emoji: '😊',
      description: 'Neutro'
    },
    {
      id: 2,
      emoji: '😊',
      description: 'Mal'
    },
    {
      id: 3,
      emoji: '😊',
      description: 'Péssimo'
    }
  ]

  function toogleEmoji(id){
    if(id == selectedEmoji){
      setSelectedEmoji(null)
    } else{
      setSelectedEmoji(id)
    }
  }

  function saveData(){
    if(selectedEmoji == null){
      Alert.alert("Aviso", 'Selecione um emoji para poder salvar');
      return;
    }
    let emotionsCopy = emotions;
    emotionsCopy = {
      emoji: selectedEmoji
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
                <Text style={styles.emoji}>{data.emoji}</Text>
                <Text>{data.description}</Text>
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
        <Text style={styles.textBoxTitle}>Consegue pensar em algo pelo qual você foi grato hoje?</Text>
        <TextInput
          style={styles.textBox}
          placeholder='teste'
          placeholderTextColor='blue'
          multiline={true}
          //value={text} TEM QUE SALVAR ISSO AQUI NUMA VARIÁVEL DEPOIS
        />
      </View>

      <View>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => {saveData()}}
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
    backgroundColor: '#e5e5e5'
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
    justifyContent: 'center',
  },
  emojiActionSelected: {
    backgroundColor: 'green',
    marginRight: 10,

  },
  emojiAction: {
    marginRight: 10,
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
    paddingHorizontal: 10,
    paddingVertical: 10
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
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#b7e5b7'
  },
  saveButtonText: {
    textAlign: 'center',
    fontSize: 20,
  }
});