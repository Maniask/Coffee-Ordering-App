import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Alert, Platform } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import Loading from '../components/Loading'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, googleLogin } = useContext(AuthContext);
  
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>      
      <View style={styles.header}>
      <ImageBackground
        source={require('../assets/coffee13.jpg')}
        style = {styles.logo}
        resizeMode='stretch'
        blurRadius={0.8}
      >
        <Text style={styles.text_header}>Welcome!</Text>
      </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}> Email  <FontAwesome name="user-o" size={20} /></Text>
        <FormInput
          value={email}
          placeholderText='Email'
          onChangeText={userEmail => setEmail(userEmail)}
          autoCapitalize='none'
          keyboardType='email-address'
          autoCorrect={false}
        />
        <Text style={styles.text_footer}> Password  <FontAwesome name="lock" size={20} /></Text>
        <FormInput
          value={password}
          placeholderText='Password'
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
        />
        <FormButton buttonTitle='Login' style={{marginLeft:35}} onPress={() => login(email, password)} />
        
        <View>
          <SocialButton
            buttonTitle="Login with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
        
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.navButtonText}>New user? Join here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const height_logo = height *0.35;
const width_logo = width * 1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CD853F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navButton: {
    marginTop: 15
  },
  navButtonText: {
    fontSize: 20,
    color: '#6646ee',
    marginLeft:45,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop:25
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 110,
    paddingVertical: 20
  },
  text_header: {
    color: '#fff',
    marginTop:200,
    fontWeight: 'bold',
    fontSize: 40
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    paddingLeft:1,
  },
  logo: {
    width: width_logo,
    height: height_logo
  },
});