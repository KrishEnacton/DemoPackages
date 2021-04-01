import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const About = ({ navigation }) => {
    return (
        <View>
            <Text>About Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} ></Button>

        </View>
    )
}

export default About

const styles = StyleSheet.create({})
