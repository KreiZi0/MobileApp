import React from "react";
import { Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

const GoogleLogin = () => {
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Text style={styles.textBold}>G</Text>
        </TouchableOpacity>
    )
}
export default React.memo(GoogleLogin);