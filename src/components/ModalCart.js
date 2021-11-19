import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Platform,
    FlatList,
    Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';

const ModalCart = props => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.cart);
    const [finalPrice, setFinalPrice] = useState(0);
    const statePrice = useSelector(state => state.cart.price);

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
        if (!cart[0]) {
            props.setShowModal(false);
        }
    }, [cart]);

    const servicesCost = 1.04;

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

    onPressOrderHandler = () => {
        props.setShowModal(false);
        props.navigation.navigate('Order', {
            restaurant: props.restaurant,
        });
    };

    return (
        <View style={styles.container}>
            <Modal animationType='slide' transparent={true} visible={props.showModal}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => props.setShowModal(false)}
                >
                    <View style={styles.back}></View>
                </TouchableOpacity>
                <FlatList
                    style={styles.modal}
                    ListHeaderComponent={() => (
                        <View>
                            <Text style={styles.restaurant}>{props.restaurant.name}</Text>
                        </View>
                    )}
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onLongPress={() => deleteProductHandler(item)}
                        >
                            <View style={styles.product}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.productQuantity}>
                                        <Text>{item.quantity + ' '}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                        {item.extras[0] && (
                                            <View>
                                                {item.extras.map(extra => (
                                                    <Text style={{ color: 'gray' }}>
                                                        {extra.label}
                                                    </Text>
                                                ))}
                                            </View>
                                        )}
                                    </View>
                                </View>

                                <Text style={{ fontSize: 18 }}>
                                    {item.totalPrice + item.extraPrice + ' €'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    ListFooterComponent={() => (
                        <>
                            <View
                                style={{
                                    ...styles.product,
                                    borderBottomWidth: 0,
                                    paddingBottom: 0,
                                }}
                            >
                                <Text>{'Sous-Total : '}</Text>
                                <Text style={{ fontSize: 18 }}>{finalPrice + ' €'}</Text>
                            </View>
                            <View
                                style={{
                                    ...styles.product,
                                    borderBottomWidth: 0,
                                    paddingBottom: 0,
                                }}
                            >
                                <Text>{'Frais de livraisons : '} </Text>
                                <Text style={{ fontSize: 14 }}>
                                    {props.restaurant.deliveryPrice + ' €'}
                                </Text>
                            </View>
                            <View style={{ ...styles.product, borderBottomWidth: 0 }}>
                                <Text>{'Frais de services : '} </Text>
                                <Text style={{ fontSize: 14 }}>
                                    {servicesCost + ' €'}
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.order}
                                onPress={onPressOrderHandler}
                            >
                                <Text style={styles.orderText}>
                                    Commander -{' '}
                                    {Math.round(
                                        (finalPrice +
                                            props.restaurant.deliveryPrice +
                                            servicesCost) *
                                            100,
                                    ) / 100}
                                    {' €'}
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    restaurant: {
        alignSelf: 'center',
        fontSize: 22,
        fontFamily: 'Uber-move-medium',
    },
    modal: {
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        minHeight: 400,
        maxHeight: 650,
    },
    back: {
        height: '100%',
        backgroundColor: 'rgba(100,100,100, 0.3)',
    },
    product: {
        flexDirection: 'row',
        fontSize: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        paddingVertical: 15,
    },
    productQuantity: {
        backgroundColor: '#E2E2E2',
        width: 35,
        height: 35,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    order: {
        marginBottom: Platform.OS === 'ios' ? 80 : 50,
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
});

export default ModalCart;
