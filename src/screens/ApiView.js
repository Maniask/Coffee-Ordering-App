import React, { Component } from 'react'
import {TouchableOpacity, View, Text, Button, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import styles from '../components/ApiStyles'
;
const ApiView = (props) => {
    const { goForFetch, goForAxios, fromFetch, fromAxios, axiosData, renderItem, FlatListItemSeparator, dataSource, loading } = props
    return (
        <View style={styles.parentContainer}>
            <View style={{ marginTop: 10 }}>

                <TouchableOpacity
                style={styles.userBtn}
                onPress={goForAxios}
                >
                    <Text style={styles.userBtnTxt}>Show Menu</Text>
                </TouchableOpacity>
            </View>


            {fromFetch ?
                <FlatList
                    style={styles.wrapper}
                    data={dataSource}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={(item) => item.id}
                /> : <FlatList
                    style={styles.wrapper}
                    data={axiosData}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={(item) =>  item.id}
                />
            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }
        </View>
    )
}
export default ApiView;
