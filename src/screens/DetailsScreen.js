import React from 'react'
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionic from 'react-native-vector-icons/Ionicons'

export default function DetailsScreen({navigation, route}){

    const[menu, setMenu] = React.useState(null);
    const[orderItems, setOrderItems] = React.useState([]);

    function editOrder(action, id, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.id == id)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    id: id,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(id) {
        let orderItem = orderItems.filter(a => a.id == id)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = parseFloat(orderItems.reduce((a, b) => a + (b.total || 0), 0))

        return total.toFixed(2)
    }

    const finalSumOrder = (sumOrder) => {  
        navigation.navigate("OrderDeliveryScreen", {
          sumOrder,
        })  
    } 

    function renderHeader(){
        return(
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style= {{
                        width: 50,
                        paddingLeft: 10,
                        justifyContent:'center'
                    }}
                    onPress={()=> navigation.goBack()}
                >
                    <FontAwesome name="arrow-left" size={30} />
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 30,
                            borderRadius: 8,
                            backgroundColor: 'lightgray',
                            margin: 8,
                        }}
                    >
                        <Text>{route.params.item.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: 20,
                        justifyContent: 'center'
                    }}
                    onPress= {()=>navigation.navigate("OrderDeliveryScreen",{
                            sumOrder: sumOrder(),
                            itemCount: getBasketItemCount()
                    })}
                >
                    <Ionic name="cart" size={30} />
                </TouchableOpacity>
            </View>
        )
    }

    function renderFoodInfo(){
        return(
            <View>
                <View style={{height:400}}>
                    <Image
                        source = {{uri : route.params.item.imgUrl}}
                        resizeMode='stretch'
                        style={{
                            width: '90%',
                            height : '70%',
                            marginLeft: 22,
                            borderRadius:8,
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom:105,
                            marginLeft:20,
                            width: '90%',
                            height: 50,
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 50,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopLeftRadius: 25,
                                borderBottomLeftRadius: 25
                            }}
                            onPress={()=>editOrder("-", route.params.item.id, route.params.item.price) }
                        >
                            <Text style={{fontSize:35, color:'#F0913F'}}>-</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                width: 32,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{fontSize:20, color:'#F0913F'}}>{getOrderQty(route.params.item.id)}</Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                width: 50,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopRightRadius: 25,
                                borderBottomRightRadius: 25
                            }}
                            onPress={()=>editOrder("+", route.params.item.id, route.params.item.price) }
                            
                        >
                            <Text style={{fontSize:20, color:'#F0913F'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 15,
                            paddingHorizontal: 15
                    }}
                    >
                        <Text style={{ fontSize:15, marginVertical:10, textAlign:'center', fontWeight:'bold', color:'#F0913F' }}>{'\u20B9'}{route.params.item.price}</Text>
                        <Text>{route.params.item.description}</Text>
                    </View>
                </View>                
                
            </View>
        )
    }

    function renderOrder(){
        return(
            <View
                style={{
                    backgroundColor: 'white',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderBottomColor: 'lightgray',
                        borderBottomWidth: 1
                    }}
                >
                    
                    <Text style={{fontSize:15, color:'#F0913F' }}>{getBasketItemCount()} Items in Cart</Text>
                    <Text style={{fontSize:15, color:'#F0913F' }}>{'\u20B9'}{sumOrder()}</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="map-marker" size={20} color={'#F0913F'}/>
                        <Text style={{ marginLeft: 10, fontSize:15, color:'#F0913F' }}>Location</Text>
                    </View>
                </View>

                <View
                    style={{
                        padding: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            padding: 10,
                            backgroundColor: '#F0913F',
                            alignItems: 'center',
                            borderRadius: 8,
                        }}
                        onPress= {()=>navigation.navigate("OrderDeliveryScreen",{
                            sumOrder: sumOrder(),
                            itemCount: getBasketItemCount()
                        })}
                    >
                        <Text style={{ color: 'white', fontSize:15}}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
            {renderOrder()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF'
    }
})