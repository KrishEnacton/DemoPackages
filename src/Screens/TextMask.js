import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextInputMask from 'react-native-text-input-mask';

const TextMask = () => {
    return (
        <View>
            <Text>Hello</Text>
            <TextInputMask
                onChangeText={(formatted, extracted) => {
                    console.log(formatted) // +1 (123) 456-78-90
                    console.log(extracted) // 1234567890
                }}
                mask={"+91 [0000]-[0000000]"}
                placeholder="+91 5498-789531"
            />
        </View>
    )
}

export default TextMask

const styles = StyleSheet.create({})
