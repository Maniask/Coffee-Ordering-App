import React, { Component } from 'react';
import { Dimensions } from 'react-native';

const { deviceWidth, deviceHeight } = Dimensions.get('window')

const styles = {
    parentContainer: {
        height: deviceHeight,
        justifyContent: 'center',
    },
    textStyle:{
        fontSize:18,
        textAlign:'center',
        paddingTop:32
    },
    container: {
        backgroundColor: "#fff",
    },
    loader: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        flex:1,
        flexDirection:'row',
        paddingVertical: 6,
        paddingHorizontal:10,
        margin:7,
        
    },
    title:{
        marginHorizontal: 5,
        marginVertical: 3,
        fontSize:15,
        fontWeight:'bold',
    },
    price:{
        fontSize:15,
        marginHorizontal:7,    
        color:'gray'

    },
    addButton:{
        marginHorizontal:40,
        marginTop: 15,
        marginBottom: 15,
        width: 4,
        height: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    wrapper:{
        marginBottom:100,
    }
    
};
export default styles;