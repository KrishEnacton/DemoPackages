import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Ion from 'react-native-vector-icons/AntDesign';

const AppIntro = () => {

    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: 'Description.\nSay something cool',
            //: require('./assets/1.jpg'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Other cool stuff',
            //image: require('./assets/2.jpg'),
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Rocket guy',
            text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
            // image: require('./assets/3.jpg'),
            backgroundColor: '#22bcb5',
        }
    ];

    const [showRealApp, setShowRealApp] = useState(false);

    const _renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: item.backgroundColor }} level={20}>
                <Text level={15} style={styles.title}>{item.title}</Text>
                {/* <Image source={item.image} /> */}
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    const _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        setShowRealApp(true);
    }

    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ion
                    name="rightcircle"
                    color="rgba(255, 255, 255,0.9)"
                    size={30}
                />
            </View>
        );
    };
    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ion
                    name="checkcircle"
                    color="rgba(255, 255, 255,0.9)"
                    size={30}
                />
            </View>
        );
    };

    const _renderBackButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ion
                    name="leftcircle"
                    color="rgba(255, 255, 255,0.9)"
                    size={30}
                />
            </View>
        );
    };

    if (showRealApp) {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        );
    } else {
        return <AppIntroSlider
            showSkipButton={true}
            showPrevButton={true}
            dotStyle={{ backgroundColor: "green" }}
            style={{ backgroundColor: "black" }}
            renderItem={_renderItem}
            data={slides}
            onDone={_onDone}
            bottomButton={false}
            onSkip={_onDone}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            renderPrevButton={_renderBackButton}
        />;
    }

}

export default AppIntro

const styles = StyleSheet.create({
    buttonCircle: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
