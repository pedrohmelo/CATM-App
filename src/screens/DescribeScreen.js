import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DescribeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Como você está hoje?</Text>

          <View style={styles.emojisBox}>
            <TouchableOpacity style={styles.buttonAction}>
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAction}>
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAction}>
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAction}>
              <View style={styles.buttonArea}>
                <Text style={styles.emoji}>😄</Text>
              </View>
            </TouchableOpacity>
          </View>
          
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
    alignItems: 'center'
  },
  buttonAction: {
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
  }
});