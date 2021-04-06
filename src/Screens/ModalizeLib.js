import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Modalize } from 'react-native-modalize';

const ModalizeLib = () => {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableOpacity onPress={onOpen}>
                <Text>Open the modal</Text>
            </TouchableOpacity>

            <Modalize ref={modalizeRef}>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
                <TextInput />
                <Text>
                    This component has been built with react-native-gesture-handler to address the common issue of scrolling, swiping and handling the keyboard behaviors, you can face with react-native's modal.
                    This component comes with a ScrollView, the default renderer, a FlatList or a SectionList. They are all three built-in and make your life easier, just pass your content and Modalize will handle the rest for you. You can also have the possibility to pass your own custom renderer.
                </Text>
            </Modalize>
        </>
    );
}

export default ModalizeLib

const styles = StyleSheet.create({})
