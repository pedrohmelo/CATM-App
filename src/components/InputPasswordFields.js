import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function InputPasswordFields(props) {
  const [passwordVisibility, handlePasswordVisibility] = useState(true)
  
  return (
    <View style={styles.field}>
      <View style={styles.insideField}>
        <View style={{marginRight: '5%'}}>
            <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
        </View>
        
        <TextInput
          secureTextEntry={passwordVisibility}
          placeholder={props.placeholder}
          placeholderTextColor={'#6C7278'} style={styles.input}
          value={props.content}
          onChange={(e) => props.setContent(e.nativeEvent.text)}
          keyboardType='default'
          returnKeyType="done"
          blurOnSubmit={true}
          onSubmitEditing={() => { Keyboard.dismiss() }}
        />
      </View>
      <TouchableOpacity onPress={() => { handlePasswordVisibility(!passwordVisibility) }}>
        
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: '3%',

    paddingVertical: '5%',
    paddingHorizontal: '6%',

    borderColor: '#DCE4E8',
    borderWidth: 1,
    borderRadius: 20,
  },

  insideField: {
    flexDirection: 'row'
  },

  userImage: {
    marginRight: '5%'
  },

  input: {
    width: '75%',
    fontSize: 18,
  },
})