import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native'

import MapView , {Marker} from 'react-native-maps'

export default function OrderDeliveryScreen(){
    
    function renderMap(){
        return(
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    ></MapView>
            </View>
        )
    }
    
    return(
        <View style={{flex: 1}}>
            {renderMap()}
        </View>
    )
}