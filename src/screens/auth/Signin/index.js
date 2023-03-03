import React, { useState } from 'react';
import { View, Text, Pressable } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Button from '../../../components/Button';
import Input from "../../../components/Input";
import Checkbox from '../../../components/Chechbox';
import {styles} from "./styles";
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

import { SafeAreaView } from 'react-native-safe-area-context';

const Signin = ({navigation}) => {
    const [checked, setChecked] = useState(false)

    const onSignupHandler = () => {
        navigation.navigate('Signup')
    }

    const onBackHandler = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBackHandler} title="Sign In"/>
                <Input label="Email" placeholder="example@gmail.com"/>
                <Input isPassword label="Password" placeholder="Give us ur password"/>
                <Button style={styles.button} title="Sign in" />
                <Separator text="Or sign in with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Don't have an account?
                     <Text style={styles.footerLink}> Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Signin