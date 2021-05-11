import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert, StyleSheet, TextInput,Button} from 'react-native'

import RNRestart from 'react-native-restart';

const OrderDeliveryScreen=({route,navigation})=>{

    const function1 = () => {
        RNRestart.Restart();
    }

    const function2 = () =>{
        Alert.alert("Order Placed Successfully")
    }

    const combinedFunction = () => {
        this.function1()
        this.function2()
    }

    return(

        <View style={{flex:1}}>
            <View
                style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 30,
                    borderRadius: 8,
                    backgroundColor: 'lightgray',
                    margin: 8,
                    borderColor:'#F0913F'
                }}
            >
                <Text style={{fontSize:18}}>Order Screen</Text>
            </View>
        
            <View style={styles.orderElements}>      
            <Text style={{fontSize:18}}>Total Item : {route.params.itemCount}</Text>
                <Text style={{fontSize:18}}>Total Price: {route.params.sumOrder}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={() =>{ function1(); function2(); }}
                    title="Place Order"
                    color='#F0913F'
                />
            </View>            
        </View>
    );
}
   
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:35,
        justifyContent:'center'
    },
    messageBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4c90d4',
    },
    messageBoxText: {
        fontSize: 18,
        color: '#fff',
    },
    buttonContainer: {
        flex: 1,
        padding: 20,
        marginTop:420,
    },
    orderElements:{
        marginHorizontal:20,

    }
})


export default OrderDeliveryScreen;