import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import Product from '../components/Product';
import { Ionicons } from '@expo/vector-icons';

const Menu = props => {
    const item = props.route.params.item;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={item.image} style={styles.headerBackground}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
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
                                props.navigation.navigate('Product', { product: product })
                            }
                        >
                            <Product product={product} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerBackground: {
        height: 130,
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
        padding: 10,
    },
});

export default Menu;
