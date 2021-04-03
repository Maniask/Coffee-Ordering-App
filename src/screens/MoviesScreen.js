import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import axios from 'axios'
import styles from '../components/ApiStyles'
import ApiContainer from '../navigation/ApiContainer'

const MoviesScreen = () => {
    return(
        <View>
            <ApiContainer/>
        </View>
    )
}
    

export default MoviesScreen;

