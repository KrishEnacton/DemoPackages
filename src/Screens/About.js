import React, { useEffect, useState } from 'react'
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
    const [info, setInfo] = useState({});

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // this.setState({ userInfo });
            setInfo(userInfo);
            console.log("UserInfo:", userInfo);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <View>
            <Text>About Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} ></Button>
            <Button title="GoogleSignin" onPress={() => signIn()} ></Button>
            <Text>Email : {info?.user?.email}</Text>
            <Text>Name : {info?.user?.name}</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({})
