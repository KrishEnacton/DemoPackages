import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Hero from 'react-native-hero';
import { BlurView, VibrancyView } from "@react-native-community/blur";

const HeroExmaple = () => {
    return (
        <View style={{ flex: 1 }} >

            <Hero
                source={{ uri: 'https://i.pinimg.com/736x/8e/f6/30/8ef6306bf7c3749768dbc8df038c414c.jpg' }}
                renderOverlay={() => (
                    <View>
                        {/* <BlurView blurType="dark" blurAmount={20} >
                            <Text >La Catalana</Text>
                            <Text >La Catalana</Text>
                            <Text >La Catalana</Text>
                            <Text >La Catalana</Text>

                        </BlurView> */}
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                    </View>
                    // <BlurView blurType="dark" blurAmount={1} >
                    //     <Text >La Catalana</Text>
                    //     <Text >tapas, spanish, wine_bars</Text>
                    //     <Text >0.74 Miles</Text>
                    //     <Text >San Jose, CA</Text>
                    //     <Text>React Native Hero!</Text>
                    //     <Text>Is super duper, cool!</Text>
                    // </BlurView>

                )} />
        </View>
    )
}

export default HeroExmaple

const styles = StyleSheet.create({})
