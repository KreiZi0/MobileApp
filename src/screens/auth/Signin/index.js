import React, { useState } from 'react';
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Button from '../../../components/Button';
import Input from "../../../components/Input";
import Checkbox from '../../../components/Chechbox';
import {styles} from "./styles";
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';


const Signin = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="Give us ur password"/>
            <Button style={styles.button} title="Sign in" />
            <Separator text="Or sign in with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Don't have an account?
                <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
    )
}

export default Signin