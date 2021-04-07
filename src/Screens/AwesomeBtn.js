import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AwesomeButtonRed from 'react-native-really-awesome-button/src/themes/red';

const AwesomeBtn = () => {
    return (
        <View>
            <AwesomeButtonRick progress={true} onPress={next => { next() }} type="primary">Rick's Primary Button</AwesomeButtonRick>
            <AwesomeButtonRed progress={true} onPress={next => { next() }} type="primary">Rick's Primary Button</AwesomeButtonRed>
            <AwesomeButton
                progress
                onPress={next => {
                    /** Do Something **/
                    next();
                }}
            >
                Text
    </AwesomeButton>
        </View>
    )
}

export default AwesomeBtn

const styles = StyleSheet.create({})
