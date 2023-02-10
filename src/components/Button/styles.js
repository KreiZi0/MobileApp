import { StyleSheet } from "react-native"

import {colors} from '../../utils/colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 20,
        borderRadius: 10,
        margin: 30,
        width: '100%'
        
        
    },
    title: {
        color: colors.cyan,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})