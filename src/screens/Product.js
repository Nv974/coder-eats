import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import CheckBox from 'react-native-check-box';

const Product = props => {
    const product = props.route.params.product;
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
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
                <Text style={styles.description}>{product.description} </Text>
            </View>
            <View>
                <View style={styles.extraBar}>
                    <Text style={styles.extraBarText}> Supplément </Text>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    {product.extra.length > 1 && (
                        <FlatList
                            data={product.extra}
                            keyExtractor={() => Math.random()}
                            renderItem={({ item }) => (
                                <View
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                >
                                    <CheckBox
                                        onClick={() => {
                                            setIsChecked(!isChecked);
                                        }}
                                        isChecked={isChecked}
                                        style={{ marginVertical: 5 }}
                                        value={'aze'}
                                    />
                                    <Text style={styles.checkBoxText}>
                                        {item.name}
                                        <Text style={{ fontSize: 14 }}>
                                            (+ {item.price} €)
                                        </Text>
                                    </Text>
                                </View>
                            )}
                        />
                    )}
                    {product.extra.length === 1 && (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                onClick={() => {
                                    console.log('check');
                                }}
                                isChecked={true}
                                rightText={product.extra[0].name}
                                rightTextStyle={{
                                    fontFamily: 'Uber-move-medium',
                                    fontSize: 20,
                                }}
                            />
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.addToCart}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontFamily: 'Uber-move-medium',
                        }}
                    >
                        Ajouter au panier - {product.price} €
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
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
        padding: 10,
    },
    checkBoxText: {
        fontSize: 18,
        marginLeft: 10,
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        paddingTop: 20,
        paddingBottom: 60,
        width: '100%',
        alignSelf: 'center',
        borderTopColor: '#E2E2E2',
        borderTopWidth: 3,
        paddingHorizontal: 30,
    },
    addToCart: {
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
    },
});

export default Product;
