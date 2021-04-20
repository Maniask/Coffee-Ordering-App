import React, {useContext, useState, useEffect} from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { AuthContext } from '../navigation/AuthProvider';

import firestore from '@react-native-firebase/firestore'

export default function Profile({navigation}) {

  const [loading, setLoading]= useState(true);
  const [userData, setUserData] = useState(null);

  const { user, logout } = useContext(AuthContext);

  const getUser = async() => {
    await firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  useEffect(() => {
    getUser();
    navigation.addListener("focus", ()=> setLoading(!loading));
  }, [navigation,loading]);

  return (     
    <View style={styles.container}>
      <View>
        <View style={{alignItems:'center'}}>
          <Avatar.Image
              source={{uri:userData ? userData.userImg ||'https://e7.pngegg.com/pngimages/347/200/png-clipart-roblox-avatar-rendering-character-avatar-heroes-fictional-character-thumbnail.png' : 'https://e7.pngegg.com/pngimages/347/200/png-clipart-roblox-avatar-rendering-character-avatar-heroes-fictional-character-thumbnail.png'}}
              size={80}
              marginTop = {30}
          />
          <View>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 10,
            }}>{userData ? userData.fname || user.email : ''} {userData ? userData.lname : user.email}</Text>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => navigation.navigate('UpdateProfileScreen')}
              >
              <Text style={styles.userBtnTxt}>UPDATE PROFILE</Text>
            </TouchableOpacity>
            
          </View>
          
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <FontAwesome name="location-arrow" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{userData ? userData.city || 'Please update your profile' : ''} {userData ? userData.country : ''}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{userData ? userData.phone || 'Please update your profile' : ''}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="envelope" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={styles.row}>
          <Title style={{fontSize:18, marginLeft: 20, marginTop:10 }}>COFFEE ORDERS</Title>
        </View>
        <View style={{marginHorizontal:30}}>
          <View style={styles.row}>
            <FontAwesome name="shopping-bag" color="#777777" size={20} />
            <Text style={{color:"#777777", marginLeft: 20}}>Your Orders</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome name="cutlery" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>Favourite Orders</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <FontAwesome name="comment" color="#C4A484" size={25}/>
            <Text style={styles.menuItemText}>SEND FEEDBACK</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <FontAwesome name="server" color="#C4A484" size={25}/>
            <Text style={styles.menuItemText}>SUPPORT</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <FontAwesome name="sign-out" color="#C4A484" size={25}/>
            <Text style={styles.menuItemText} onPress={() => logout()}>LOG OUT</Text>
          </View>
        </TouchableRipple>
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    height: 120,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 1,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  userBtnTxt: {
    color: '#C4A484',
  },
  userBtn: {
    borderColor: '#C4A484',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginBottom:20
  },
});