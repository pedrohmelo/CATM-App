import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { VictoryPie } from 'victory-native'

import { Picker } from '@react-native-picker/picker';

import { EXPENSES } from "../utils/expenses";
import { MONTHS } from '../utils/months'

export default function ChartScreen({ navigation }) {

    const [month, setMonth] = useState("Janeiro")

    const [data, setData] = useState([]);
    
    //PRO PICKER
    const [selectedEMOJI, setSelectedEMOJI] = useState()

    useEffect(() => {
        setData(EXPENSES[month])
    }, [month])

    return (
        <View style={styles.container}>

            <View>
                <Picker
                    selectedValue={selectedEMOJI}
                    onValueChange={(itemValue, itemIndex) => setSelectedEMOJI(itemValue)}
                >
                    <Picker.Item label="triste" value="triste"/>
                    <Picker.Item label="feliz" value="feliz"/>
                </Picker>
            </View>


            <View style={styles.chart}>
                <VictoryPie
                    data={data}
                    x="label"
                    y="value"
                />
            </View>



            <Text>B</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    chart: {
        marginTop: 100,
        width: '100%',
        alignItems: 'center'
    }
})