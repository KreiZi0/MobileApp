import React from "react";
import {
    Text,
    View,
    Image
} from "react-native"



import Button from "../../../components/Button";
import {styles} from "./styles";
import Pressable from "../../../components/Pressable";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}></Image>
            
            <View style={styles.titleContainer}>
                <Text style={[styles.title, styles.TextAlign]}>You'll Find</Text> 
                <Text style={[styles.title,styles.TextAlign, styles.innerTitle]}>All you need </Text>
                <Text style={[styles.title, styles.TextAlign]}>Here!</Text>
            </View>
            
            <Button title="Sign Up" />
            <Pressable footerText="Sign In"/>
        </View>
    )
}

export default Splash