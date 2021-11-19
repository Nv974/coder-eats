import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Platform, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import * as cartActions from '../store/actions/cart';

const Cart = props => {
    const cart = useSelector(state => state.cart.cart);
    const price = useSelector(state => state.cart.price);
    const [finalPrice, setFinalPrice] = useState(0);
    const servicesCost = 1.04;

    useEffect(() => {
        let newPrice = 0;
        if (cart.length === 1) {
            newPrice += cart[0].totalPrice + cart[0].extraPrice;
        } else if (cart.length > 1) {
            cart.forEach(product => {
                newPrice += product.totalPrice + product.extraPrice;
            });
        }
        setFinalPrice(newPrice);
        dispatch(cartActions.setFinalPrice(newPrice));
    }, [cart]);

    const dispatch = useDispatch();

    cart.sort(function (a, b) {
        return a.restaurantId - b.restaurantId;
    });

    //handlers
    const deleteProductHandler = item => {
        Alert.alert(
            //title
            item.name,
            //body
            'Voulez-vous supprimer cet article ?',
            [
                {
                    text: 'Annuler',
                    onPress: () => console.log('No Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Oui',
                    onPress: () => dispatch(cartActions.deleteProductToCart(item.id)),
                    style: 'destructive',
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <View style={styles.container}>
            <Header />
            {!cart[0] && (
                <Text style={{ alignSelf: 'center', marginTop: '50%' }}>
                    Vous n'avez aucun produit dans votre panier
                </Text>
            )}
            {cart[0] && (
                <FlatList
                    style={{ marginBottom: Platform.OS === 'ios' ? 120 : 90 }}
                    data={cart}
                    keyExtractor={() => Math.random()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onLongPress={() => deleteProductHandler(item)}
                        >
                            <View style={styles.product}>
                                <View>
                                    <Text style={{ fontSize: 17 }}>
                                        <Text> {item.quantity} </Text> {item.name}
                                    </Text>
                                    {item.extras.map(extra => (
                                        <Text style={{ color: 'gray' }} key={extra.id}>
                                            {extra.label}
                                        </Text>
                                    ))}
                                </View>

                                <Text> {item.extraPrice + item.totalPrice + ' €'}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    ListFooterComponent={() => (
                        <>
                            <View style={styles.prices}>
                                <Text style={{ fontSize: 20 }}> Sous-Total : </Text>
                                <Text
                                    style={{
                                        fontSize: 20,
                                    }}
                                >
                                    {price}
                                    {' €'}
                                </Text>
                            </View>
                            <View style={styles.prices}>
                                <Text style={{ fontSize: 14 }}>
                                    {' '}
                                    Frais de livraison :{' '}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                    }}
                                >
                                    1{' €'}
                                </Text>
                            </View>
                            <View style={styles.prices}>
                                <Text style={{ fontSize: 14 }}>
                                    {' '}
                                    Frais de services :{' '}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                    }}
                                >
                                    {servicesCost}
                                    {' €'}
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.order}
                                onPress={() => props.navigation.navigate('Order')}
                            >
                                <Text style={styles.orderText}>
                                    Commander -{' '}
                                    {Math.round((price + 1 + servicesCost) * 100) / 100}
                                    {' €'}
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 3,
        paddingVertical: 30,
        marginHorizontal: 20,
    },
    order: {
        marginTop: 30,
        width: 300,
        backgroundColor: 'black',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 5,
    },
    orderText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    prices: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingTop: 30,
        justifyContent: 'space-between',
    },
});

export default Cart;
