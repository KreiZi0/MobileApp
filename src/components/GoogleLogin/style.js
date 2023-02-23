import { StyleSheet } from "react-native"
import { colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGray,
        borderRadius: 14,
        width: '45%',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 8,
        marginBottom: 50
    },
    image: {
        width: 30,
        height: 30,
    },
    textBold: {
        textAlign: 'center',
        fontSize: 36,
        fontFamily: 'Product Sans Bold',
        fontWeight: 'bold',
        color: colors.white
    }
})