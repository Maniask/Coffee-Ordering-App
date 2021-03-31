import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
} from 'react-native';
import FormButton from '../components/FormButton';

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    source={require('../assets/coffee4.jpg')}
                    style = {styles.logo}
                    resizeMode='stretch'
                >
                    <Text style={[styles.ImgText,{transform:[{rotate:"335deg"}]}]}>MAYVIN'S CAFE</Text>
                    <FormButton buttonTitle='Getting Started' style={{marginTop:240,marginLeft:'25%' }} onPress={()=>navigation.navigate('Login')} />
                </ImageBackground>
                
            </View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const height_logo = height *1;
const width_logo = width * 1;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#A57164'
    },
    logo: {
        width: width_logo,
        height: height_logo
    },
    
    ImgText: {
        marginTop: "70%",
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0",
        
    }
})