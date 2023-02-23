import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 5
       
    },
    inputContainer: {
        borderWidth: 1,
        bprderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    label: {
        marginVertical: 8,
        color: colors.blue,
        fontWeight: '500'
    },

    eye: {
        width: 27,
        height: 24,
        marginHorizontal: 16
    }
    
})