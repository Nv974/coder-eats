import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Restaurant = props => {
    return (
        <View style={styles.restaurant}>
            <TouchableOpacity activeOpacity={0.8}>
                <ImageBackground source={props.item.image} style={styles.background} />
                <View style={styles.description}>
                    <View>
                        <Text style={styles.descriptionTitle}> {props.item.name} </Text>

                        <Text style={styles.descriptionInformations}>
                            <Ionicons name='restaurant' size={15} color='#28C167' /> -
                            Frais de livraison : {props.item.deliveryPrice}€ -{' '}
                            {props.item.deliveryTime - 5} - {props.item.deliveryTime + 5}{' '}
                            minutes
                        </Text>
                    </View>
                    <View style={styles.rate}>
                        <Text> {props.item.rate} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    restaurant: {
        marginTop: 12,
        marginBottom: 6,
        backgroundColor: 'white',
    },
    background: {
        marginTop: 16,
        height: 150,
        width: Dimensions.get('screen').width * 0.92,
        alignSelf: 'center',
    },
    description: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    descriptionTitle: {
        fontSize: 22,
        marginBottom: 10,
    },
    descriptionInformations: {
        color: 'gray',
    },
    rate: {
        backgroundColor: '#f1f2f6',
        height: 36,
        width: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Restaurant;
