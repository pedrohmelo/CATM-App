import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function BackPage({props}){
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => props}
        >
            <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 10
    }
})