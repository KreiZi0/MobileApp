import React from "react";
import {Text, TouchableOpacity, onPress} from "react-native";
import {styles} from './styles'


const Pressable = ({footerText}) => {
    return(
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
            <Text style={styles.footerText}>{footerText}</Text>
        </TouchableOpacity>
    )
}

export default Pressable