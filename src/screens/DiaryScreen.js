import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DiaryScreen({navigation}) {
  return (
    <View style={styles.month}>
      <View style={styles.week}>
        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>01</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>02</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>03</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>04</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>05</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>06</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>07</Text>
        </View>
      </View>

      <View style={styles.week}>
        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>08</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>09</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>10</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>11</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>12</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>13</Text>
        </View>

        <View style={styles.day}>
          <TouchableOpacity style={styles.circle} />
          <Text>14</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  month: {
    alignItems: 'center'
  },
  week: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  day: {
    alignItems: 'center'
  },
  circle: {
    borderWidth: 2,
    borderColor: 'green',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'orange',
    marginHorizontal: 5,
  }
}); 