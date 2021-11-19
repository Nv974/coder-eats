import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

//Redux
import * as cartActions from '../store/actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import Extra from '../components/Extra';

const Product = props => {
    //Vars
    const productProps = props.route.params.product;
    const restaurant = props.route.params.restaurant;
    const dispatch = useDispatch();

    //States
    const [product] = useState(productProps);
    const [totalPrice, setTotalPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [extras, setExtras] = useState([]);
    const [totalExtraPrice, setTotalExtraPrice] = useState(0);

    const cart = useSelector(state => state.cart.cart);
    const cartId = useSelector(state => state.cart.cartId);

    useEffect(() => {
        let price = 0;

        extras.forEach(extra => {
            for (let i = 0; i < extras.length; i++) {
                price += extra.value / extras.length;
            }
        });

        setTotalExtraPrice(price);
    }, [extras]);

    //Handlers
    const addToCartHandler = () => {
        const finalProduct = {
            id: cartId + 1,
            restaurantName: restaurant.name,
            restaurantId: restaurant.id,
            restaurantImage: restaurant.image,
            name: product.name,
            price: product.price,
            description: product.description,
            extras: extras,
            extraPrice: totalExtraPrice * quantity,
            quantity: quantity,
            unityPrice: totalPrice,
            totalPrice: totalPrice * quantity,
        };
        dispatch(cartActions.addProductToCart(finalProduct));
        setShowModal(true);
        props.navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: 110 }}>
                <ImageBackground
                    style={styles.background}
                    source={require('../../assets/img/sushi.jpeg')}
                >
                    <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                        <Ionicons
                            style={styles.goBack}
                            name='arrow-back-circle'
                            size={38}
                            color='white'
                        />
                    </TouchableWithoutFeedback>
                </ImageBackground>
                <View style={styles.main}>
                    <Text style={styles.title}>{product.name} </Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <View style={styles.extraBar}>
                    <Text style={styles.extraBarText}> Supplément </Text>
                </View>
                <View>
                    {product.extra.length === 1 && (
                        <View>
                            <Extra
                                item={product.extra[0]}
                                extras={extras}
                                setExtras={setExtras}
                            />
                        </View>
                    )}
                    {product.extra[1] &&
                        product.extra.map(item => (
                            <View key={item.id}>
                                <Extra
                                    item={item}
                                    extras={extras}
                                    setExtras={setExtras}
                                />
                            </View>
                        ))}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 20,
                    }}
                >
                    <TouchableOpacity
                        style={styles.changeQuantity}
                        activeOpacity={0.8}
                        onPress={() =>
                            setQuantity(quantity < 2 ? quantity : quantity - 1)
                        }
                    >
                        <Text style={{ fontSize: 20 }}> - </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginHorizontal: 15 }}>{quantity}</Text>
                    <TouchableOpacity
                        style={styles.changeQuantity}
                        activeOpacity={0.8}
                        onPress={() => setQuantity(quantity + 1)}
                    >
                        <Text style={{ fontSize: 20 }}> + </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.bottom}
                activeOpacity={0.8}
                onPress={addToCartHandler}
            >
                <View style={styles.addToCart}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'Uber-move-medium',
                        }}
                    >
                        En ajouter {quantity} au panier -{' '}
                        {(totalPrice + totalExtraPrice) * quantity} €
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontFamily: 'Uber-move-medium',
        marginBottom: 10,
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        flexDirection: 'row',
    },
    main: {
        padding: 10,
    },
    description: {
        fontFamily: 'Uber-move',
        color: '#777777',
    },
    extraBar: {
        backgroundColor: '#E2E2E2',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    extraBarText: {
        fontSize: 20,
    },

    goBack: {
        position: 'absolute',
        top: 50,
        left: 10,
    },
    checkBoxText: {
        fontSize: 18,
        marginLeft: 10,
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        alignSelf: 'center',
        borderTopColor: '#E2E2E2',
        borderTopWidth: 3,
        paddingHorizontal: '10%',
    },
    addToCart: {
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
    },
    changeQuantity: {
        backgroundColor: '#E2E2E2',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Product;
