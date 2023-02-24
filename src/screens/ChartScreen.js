import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { VictoryPie, VictoryLine, VictoryChart } from 'victory-native'

import { Picker } from '@react-native-picker/picker';

import { EMOTIONSDATA } from "../utils/emotionsData";
import { MONTHS } from "../utils/months";

export default function ChartScreen({ navigation }) {

    const [month, setMonth] = useState("Janeiro")

    const [data, setData] = useState([]);


    useEffect(() => {
        setData(EMOTIONSDATA[month])
    }, [month])

    return (
        <ScrollView style={styles.container}>

            <View>
                <Picker
                    selectedValue={month}
                    onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}
                    style={{
                        backgroundColor: '#FFF',
                        height: 50,
                        flex: 1,
                        marginLeft: 50
                      }}
                >
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

            <VictoryChart
                
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
            </VictoryChart>



            <Text>B</Text>
        </ScrollView>
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