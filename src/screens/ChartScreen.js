import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { VictoryPie, VictoryLine, VictoryChart } from 'victory-native'

import { Picker } from '@react-native-picker/picker';

import { DAILYEMOTIONS, EMOTIONSDATA } from "../utils/emotionsData";
import { MONTHS } from "../utils/months";

export default function ChartScreen({ navigation }) {

    const [month, setMonth] = useState("Janeiro")

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(EMOTIONSDATA[month])
    }, [month])

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        setDailyData(DAILYEMOTIONS[month])
    }, [month])

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Período</Text>
                <Picker
                    selectedValue={month}
                    onValueChange={(itemValue) => setMonth(itemValue)}
                    style={{
                        backgroundColor: '#FFF',
                        height: 50,
                        width: 150,
                        marginLeft: 50,
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
                    colorScale={data.map(EMOTIONSDATA => EMOTIONSDATA.color)}
                    animate={{duration: 1500}}
                    innerRadius={50}
                    style={{
                        labels: {
                            fontSize: 12
                        }
                    }}
                    height={300}
                    padAngle={3}                    
                />
            </View>

            {/* <Text style={{}}>{data.map(EMOTIONSDATA => EMOTIONSDATA.value)}</Text> */}
            {data.length > 0 && (
                <View style={{paddingHorizontal: 10}}>
                    <Text style={{fontSize: 17, fontWeight: '500', paddingBottom: 5}}>Durante o mês de {month} você teve:</Text>
                    <Text style={{fontSize: 15, fontWeight: '400'}}> - {data[0].value} dias tristes</Text>
                    <Text style={{fontSize: 15, fontWeight: '400'}}> - {data[1].value} dias neutros</Text>
                    <Text style={{fontSize: 15, fontWeight: '400'}}> - {data[2].value} dias bons</Text>
                    <Text style={{fontSize: 15, fontWeight: '400'}}> - {data[3].value} dias felizes</Text>
                    
                    {data[0].value > data[1].value && (
                        <Text style={{width: '95%', textAlign: 'justify', paddingVertical: 5, color: '#A9A9A9'}}>
                            Talvez este não tenha sido um bom mês pra você,
                            pode ser uma ideia interessante rever os hábitos 
                            que você anotou e tentar descobrir se eles contribuíram
                            para o seu mal estar!
                        </Text>
                    )}                    
                </View>
            )}

            <View>
                <VictoryChart>
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={dailyData}
                    />
                </VictoryChart>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '500'
    },
    chart: {
        paddingTop: 10,
        width: '100%',
    }
})