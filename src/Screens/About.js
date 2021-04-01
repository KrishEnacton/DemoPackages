import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const About = ({ navigation }) => {

    useEffect(() => {

        GoogleSignin.configure({});
    }, [])

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // this.setState({ userInfo });
            console.log("UserInfo:", userInfo);
        } catch (error) {
            console.log("Error:", error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    return (
        <View>
            <Text>About Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} ></Button>
            <Button title="GoogleSignin" onPress={() => signIn()} ></Button>

        </View>
    )
}

export default About

const styles = StyleSheet.create({})
