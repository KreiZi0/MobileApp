import React, { useState } from 'react';
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Button from '../../../components/Button';
import Input from "../../../components/Input";
import Checkbox from '../../../components/Chechbox';
import {styles} from "./styles";
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';


const Signup = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign up"/>
            <Input label="Name" placeholder="Give us your name"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="Give us ur password"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text>
                & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign in" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
    )
}

export default Signup