import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SwipeoutComp from 'react-native-swipeout';

var swipeoutBtns = [
    { text: 'Primary', type: 'primary', onPress: function (data) { alert('button pressed'); console.log("Data:", data); }, },
    { text: 'Secondary', type: 'secondary', },
    { text: 'Delete', type: 'delete', }
]

// const dat(idata,index)=>{
//     var swipeoutBtns = [
//         { text: 'Primary', type: 'primary', onPress: function (inex,data) { alert('button pressed'); console.log("Data:", data); }, },
//         { text: 'Secondary', type: 'secondary', },
//         { text: 'Delete', type: 'delete', }
//     ]
//     return(
//         <SwipeoutComp right={swipeoutBtns} >
//                 <View>
//                     <Text>Swipe me left</Text>
//                 </View>
//             </SwipeoutComp>
//     )
// }

const Swipeout = () => {
    return (
        <View>
            <Text>Hello</Text>
            <SwipeoutComp right={swipeoutBtns} >
                <View>
                    <Text>Swipe me left</Text>
                </View>
            </SwipeoutComp>
        </View>
    )
}

export default Swipeout

const styles = StyleSheet.create({})
