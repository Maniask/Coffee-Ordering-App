import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, ActivityIndicator, FlatList, Text, View, TouchableOpacity, Alert } from 'react-native';
import Axios from 'axios';
import styles from '../components/ApiStyles';
import AddButton from '../components/AddButton'
import Swiper from 'react-native-swiper'
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';

export default function HomeScreen({navigation}){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://whispering-eyrie-76050.herokuapp.com/coffee_menus')
      .then(({ data }) => {
        console.log("defaultApp -> data", data.data)
        setData(data.data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  const getListViewItem = (item) => {  
        navigation.navigate("DetailsScreen", {
          item,
        })  
  }  

  return (
    <View style={{ flex: 1}}>
      <View style={styles.sliderContainer}>
        <Swiper autoplay horizontal={false} height={200} activeDotColor="#C4A484">
          <View style={styles.slide}>
            <Image
              source={require('../assets/coffee15.png')}
              resizeMode='cover'
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/coffee14.png')}
              resizeMode='cover'
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/coffee9.png')}
              resizeMode='cover'
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/coffee8.png')}
              resizeMode='cover'
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {
            console.log("item", item)
            return (              
              <TouchableOpacity style={styles.list} onPress={()=> getListViewItem(item)}>
                <Image source={{uri:item.imgUrl}} style={{height:100, width:90, borderRadius:12, margin:8}}/>
                  <View>
                      <View>
                          <Text style={styles.title}> {item.name}</Text>
                          <View><Text style={styles.description} numberOfLines={2} ellipsizeMode='tail' > {item.description}</Text></View>
                          <Text style={styles.price}>{'\u20B9'}{item.price}{" "}</Text>
                      </View>
                      <TouchableOpacity
                        style={[styles.userBtn,{marginTop:80, width:90,position:'absolute',marginLeft:170}]}
                        onPress={() => Alert.alert('Item Added')}
                        >
                        <Text style={styles.userBtnTxt}>Add</Text>
                      </TouchableOpacity>
                  </View>
              </TouchableOpacity>
            )
          }}
        />
      )}
    </View>
  );
};


