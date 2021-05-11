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
        marginVertical: 3,
        fontSize:15,
        fontWeight:'bold',
        color:'#F0913F',
    },
    price:{
        fontSize:15,   
        color:'#F0913F',
        marginRight:120,

    },
    description:{
        fontSize:13,
        marginRight:120,
        color:'gray',
        marginBottom:3
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
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginBottom:10,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    userBtnTxt: {
        color: '#F0913F',
    },
    userBtn: {
        borderColor: '#F0913F',
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        marginBottom:20,
        alignItems:'center'
    },
    
};
export default styles;