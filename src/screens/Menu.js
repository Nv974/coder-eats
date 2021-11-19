import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Platform,
    Dimensions,
} from 'react-native';
import Product from '../components/Product';
import { Ionicons } from '@expo/vector-icons';
import ModalCart from '../components/ModalCart';
import { useSelector } from 'react-redux';

const Menu = props => {
    //vars
    const item = props.route.params.item;

    //state
    const [showModal, setShowModal] = useState(false);
    const cart = useSelector(state => state.cart.cart);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <ImageBackground source={item.image} style={styles.headerBackground}>
                        <TouchableWithoutFeedback
                            onPress={() => props.navigation.goBack()}
                        >
                            <Ionicons
                                style={styles.goBack}
                                name='arrow-back-circle'
                                size={38}
                                color='white'
                            />
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                </View>
                <View style={styles.main}>
                    <Text style={styles.title}> {item.name} </Text>
                    {item.menu.map(product => {
                        return (
                            <TouchableOpacity
                                key={Math.random()}
                                onPress={() =>
                                    props.navigation.navigate('Product', {
                                        product: product,
                                        restaurant: item,
                                    })
                                }
                            >
                                <Product product={product} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
            {cart[0] && (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.cartView}
                    onPress={() => setShowModal(true)}
                >
                    <Text style={styles.cartViewText}>
                        Voir le panier {'(' + cart.length + ')'}{' '}
                    </Text>
                </TouchableOpacity>
            )}
            <ModalCart
                restaurant={item}
                showModal={showModal}
                setShowModal={setShowModal}
                navigation={props.navigation}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('screen').height,
        paddingBottom: 90,
    },
    headerBackground: {
        height: 180,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Uber-move-bold',
        marginBottom: 15,
    },
    main: {
        padding: 10,
    },
    goBack: {
        position: 'absolute',
        top: 50,
        left: 10,
    },
    cartView: {
        position: 'absolute',
        bottom: 10,
        width: 350,
        backgroundColor: 'black',
        left: '50%',
        transform: [{ translateX: -175 }],
        padding: 15,
        borderRadius: 5,
    },
    cartViewText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
});

export default Menu;
