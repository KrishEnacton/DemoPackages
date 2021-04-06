import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../Screens/Home';
import About from '../Screens/About';
import GridView from '../Screens/GridView';
import Bubble from '../Screens/Bubble';
import ModalizeLib from '../Screens/ModalizeLib';
// import FoldView from '../Screens/FoldView';
import Row from '../Screens/Row';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
                <Stack.Screen
                    name="GridView"
                    component={GridView}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
                <Stack.Screen
                    name="Bubble"
                    component={Bubble}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
                <Stack.Screen
                    name="ModalizeLib"
                    component={ModalizeLib}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
                {/* <Stack.Screen
                    name="FoldView"
                    component={FoldView}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                /> */}
                <Stack.Screen
                    name="Row"
                    component={Row}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;