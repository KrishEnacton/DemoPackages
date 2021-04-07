import React, { useRef } from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DropdownAlert from 'react-native-dropdownalert';
const AlertDropdown = () => {
    const dropDownAlertRef = useRef(null);
    const showIAlert = () => {
        console.log("Alert:", dropDownAlertRef);
        dropDownAlertRef.current.alertWithType('info', 'Info', 'Start fetch data.');
        //this.dropDownAlertRef.alertWithType('success', 'Success', 'Finish fetch data');
        //this.dropDownAlertRef.alertWithType('error', 'Error', error);
    }
    const showSAlert = () => {
        //this.dropDownAlertRef.alertWithType('info', 'Info', 'Start fetch data.');
        dropDownAlertRef.current.alertWithType('success', 'Success', 'Finish fetch data');
        // this.dropDownAlertRef.alertWithType('error', 'Error', error);
    }
    const showEAlert = () => {
        // this.dropDownAlertRef.alertWithType('info', 'Info', 'Start fetch data.');
        // this.dropDownAlertRef.alertWithType('success', 'Success', 'Finish fetch data');
        dropDownAlertRef.current.alertWithType('error', 'Error', 'Error');
    }

    return (
        <View>
            <TouchableOpacity style={styles.btnStyle}>

                <Text>Hello</Text>
            </TouchableOpacity>
            <View style={{ height: 300 }} ></View>
            <Button style={styles.btnStyle} title="Alert Info" onPress={showIAlert} />
            <Button title="Alert Success" onPress={showSAlert} />
            <Button title="Alert Error" onPress={showEAlert} />
            <DropdownAlert zIndex={0} ref={dropDownAlertRef} />
        </View>
    )
}

export default AlertDropdown

const styles = StyleSheet.create({

    btnStyle: {
        zIndex: 1
    }
})
