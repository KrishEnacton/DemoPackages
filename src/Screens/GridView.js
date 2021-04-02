import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import FbGrid from "react-native-fb-image-grid";

const GridView = () => {

    const onPressHandler = (url, index, event) => {
        console.log("Props:", event);
    }

    return (
        <View>
            <Text>GridView</Text>
            <View style={{ height: 100 }} >
                <FbGrid
                    images={[
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png",
                        "https://facebook.github.io/react-native/docs/assets/favicon.png"
                    ]}
                    onPress={onPressHandler}

                />
            </View>
        </View>
    )
}

export default GridView

const styles = StyleSheet.create({})
