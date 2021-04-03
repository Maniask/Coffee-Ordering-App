import React, { Component } from 'react';
import ApiView from '../screens/ApiView';
import axios from 'axios';
import styles from '../components/ApiStyles';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
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
        fetch("https://api.androidhive.info/json/movies.json")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        dataSource: responseJson
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
        axios.get("https://api.androidhive.info/json/movies.json")
            .then(response => {
                console.log('getting data from axios', response.data);
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        axiosData: response.data
                    })
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderItem = (data) => {
        return (
            <TouchableOpacity style={styles.list}>
                <Text style={styles.lightText}>Title: {data.item.title}</Text>
                <Text style={styles.lightText}>Rating: {data.item.rating}</Text>
                <Image source={{uri:data.item.image}} style={{height:180, width:400}}/>
            </TouchableOpacity>
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