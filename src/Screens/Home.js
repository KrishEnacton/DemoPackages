import React from 'react'
import {
    StyleSheet, Text, View,
    Button,
    TextInput
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const Home = ({ navigation }) => {

    let schema = yup.object().shape({
        password: yup.string().required().min(8, "Password Cannt be lessthan 8").max(16, "Cannt greterthan 16").matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
        email: yup.string().required().email(),
    });

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="About" onPress={() => navigation.navigate("About")} ></Button>
            <Button title="GridView" onPress={() => navigation.navigate("GridView")} ></Button>
            <Button title="Bubble" onPress={() => navigation.navigate("Bubble")} ></Button>
            <Button title="ModalizeLib" onPress={() => navigation.navigate("ModalizeLib")} ></Button>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={schema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={{ borderBottomWidth: 1, borderBottomColor: "black", margin: 5 }}
                        />
                        <Text>{errors.email}</Text>
                        <TextInput
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={{ borderBottomWidth: 1, borderBottomColor: "black", margin: 5 }}
                        />
                        <Text>{errors.password}</Text>
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
