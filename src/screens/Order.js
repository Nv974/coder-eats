import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Animated } from 'react-native';

import { useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';

const Order = props => {
    const [imageFade] = useState(new Animated.Value(1));

    const dispatch = useDispatch();

    const fadeOut = () => {
        Animated.timing(imageFade, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
        }).start(() => fadeIn());
    };

    const fadeIn = () => {
        Animated.timing(imageFade, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start(() => fadeOut());
    };

    useEffect(() => {
        dispatch(cartActions.resetCart());
        fadeIn();
        setTimeout(redirect, 7000);
        function redirect() {
            props.navigation.navigate('Home');
        }
    }, []);

    const animation = {
        opacity: imageFade,
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.box, animation]}>
                <Image
                    source={require('../../assets/cooking.png')}
                    style={{ width: 200, height: 200 }}
                />
            </Animated.View>

            <Text style={{ marginTop: 35, fontSize: 15 }}>
                Votre commande est en cours de préparation
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default Order;
