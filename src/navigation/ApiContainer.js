import React, { Component } from 'react';
import {Button} from 'react-native'
import ApiView from '../screens/ApiView';
import axios from 'axios';
import styles from '../components/ApiStyles';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FormButton from '../components/FormButton'
import AddButton from '../components/AddButton'

class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fromFetch: false,
            fromAxios: false,
            dataSource: [],
            axiosData: null
        };
    }
    goForFetch = () => {
        this.setState({
            fromFetch: true,
            loading: true,

        })
        fetch("https://whispering-eyrie-76050.herokuapp.com/coffee_menus")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        dataSource: responseJson.data
                    })
                }, 2000)

            })
            .catch(error => console.log(error))
    }
    goForAxios = () => {
        this.setState({
            fromFetch: false,
            loading: true,

        })
        axios.get("https://whispering-eyrie-76050.herokuapp.com/coffee_menus")
            .then(response => {
                console.log('getting data from axios', response.data);
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        axiosData: response.data.data
                    })
                }, 2000)
                
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderItem = (data) => {
        return (
            <View style={styles.list}>
                <Image source={{uri:data.item.imgUrl}} style={{height:100, width:90, borderRadius:12, margin:8}}/>
                <View>
                    <View>
                        <Text style={styles.title}> {data.item.name}</Text>
                        <Text style={styles.price}>{'\u20B9'}{data.item.price}{" "}</Text>
                    </View>
                    <AddButton style={{marginLeft:35}} buttonTitle='Add'/>
                </View>
            </View>
        )

    }


    render() {
        const { dataSource, fromFetch, fromAxios, loading, axiosData } = this.state
        return (
            <ApiView
                goForFetch={this.goForFetch}
                goForAxios={this.goForAxios}
                dataSource={dataSource}
                loading={loading}
                fromFetch={fromFetch}
                fromAxios={fromAxios}
                axiosData={axiosData}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ApiContainer;