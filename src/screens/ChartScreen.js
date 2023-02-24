import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { VictoryPie } from 'victory-native'

import { Picker } from '@react-native-picker/picker';

import { EMOTIONSDATA } from "../utils/emotionsData";
import { MONTHS } from "../utils/months";

export default function ChartScreen({ navigation }) {

    const [month, setMonth] = useState("Janeiro")

    const [data, setData] = useState([]);
    
    //PRO PICKER
    const [selectedEMOJI, setSelectedEMOJI] = useState()

    useEffect(() => {
        setData(EMOTIONSDATA[month])
    }, [month])

    return (
        <View style={styles.container}>

            <View>
                <Picker
                    selectedValue={selectedEMOJI}
                    onValueChange={(itemValue) => setMonth(itemValue)}
                    style={{
                        backgroundColor: '#FFF',
                        height: 50,
                        flex: 1,
                        marginLeft: 50
                      }}
                >
                    {/* <Picker.Item label="Janeiro" value="0"/>
                    <Picker.Item label="Fevereiro" value="1"/>
                    <Picker.Item label="Março" value="2"/> */}
                    {
                        MONTHS.map(item => (
                            <Picker.Item
                                key={item.label}
                                label={item.label}
                                value={item.label}
                            />
                        ))
                    }
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