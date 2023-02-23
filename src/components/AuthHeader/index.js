import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import {styles} from "./styles";

const AutHeader = ({title, onBackPress}) => {
    return (
        <View style={styles.container} >
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/icon.png')}/>
            </Pressable>
            <Text style={styles.title}> {title} </Text>
        </View>
    )
}

export default AutHeader