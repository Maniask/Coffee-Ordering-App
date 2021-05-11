import React, { Component } from 'react';
 
import { ActivityIndicator,TouchableOpacity, Alert, FlatList, Text, StyleSheet, View, TextInput } from 'react-native';
 
export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
            this.state = {
            isLoading: true,
            text: '',
            data: []
        }
        this.arrayholder = [];
    }
 
    componentDidMount() {
 
    return fetch('https://whispering-eyrie-76050.herokuapp.com/coffee_menus')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                data: responseJson.data,
            }, () => {
            // In this block you can do something with new state.
            this.arrayholder = responseJson.data;
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }
 
    GetFlatListItem(name) {
        Alert.alert(name);
    }

    getListViewItem = (item) => {  
        this.props.navigation.navigate("DetailsScreen", {
          item,
        })  
    }  
 
    searchData(text) {
        const newData = this.arrayholder.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        this.setState({
            data: newData,
            text: text
        })
    }
 
    itemSeparator = () => {
        return (
            <View
                style={{
                    height: .7,
                    width: "100%",
                    backgroundColor: "#F0913F",
                }}
            />
        );
    }
 
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
   
            <View style={styles.MainContainer}>
    
                <TextInput 
                    style={styles.textInput}
                    onChangeText={(text) => this.searchData(text)}
                    value={this.state.text}
                    underlineColorAndroid='transparent'
                    placeholder="Search Here" 
                    placeholderTextColor="#F0913F"
                />
    
                <FlatList
                    data={this.state.data}
                    keyExtractor={ (item, index) => index.toString() }
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({ item }) =><Text style={styles.row}
                    onPress={this.getListViewItem.bind(this, item)} >{item.name}</Text>}
                    style={{ marginTop: 10 }}                    
                />
    
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
 
  },
 
  row: {
    fontSize: 18,
    padding: 12
  },
 
  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#F0913F',
    borderRadius: 8,
    backgroundColor: "#FFFF",
    color:'#F0913F',
  }
});