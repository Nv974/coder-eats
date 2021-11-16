import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Product = props => {
    return (
        <View style={styles.container}>
            <View style={styles.productLeft}>
                <Text style={styles.title}>{props.product.name}</Text>
                <Text>{props.product.price} €</Text>
                <Text style={styles.description}>{props.product.description}</Text>
            </View>
            <Image
                source={require('../../assets/img/sushi.jpeg')}
                style={styles.illustration}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productLeft: {
        width: '60%',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Uber-move-medium',
    },
    description: {
        color: '#777777',
    },
    illustration: {
        width: 100,
        height: 100,
    },
});

export default Product;
