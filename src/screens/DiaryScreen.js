import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DiaryScreen({navigation}) {
  return (
    <View style={styles.month}>
      <View style={styles.week}>
        <TouchableOpacity style={styles.day}>
          <Text>01</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>02</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>03</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>04</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>05</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>06</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>07</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.week}>
        <TouchableOpacity style={styles.day}>
          <Text>01</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>02</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>03</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>04</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>05</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>06</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>07</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.week}>
        <TouchableOpacity style={styles.day}>
          <Text>01</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>02</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>03</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>04</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>05</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>06</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>07</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.week}>
        <TouchableOpacity style={styles.day}>
          <Text>01</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>02</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>03</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>04</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>05</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>06</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.day}>
          <Text>07</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  month: {},
  week: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  day: {
    borderWidth: 2,
    borderColor: 'green',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'orange',
    marginHorizontal: 5,
    marginVertical: 5
  }
}); 