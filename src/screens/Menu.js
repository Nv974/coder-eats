import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
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
                    return <Product key={Math.random()} product={product} />;
                })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerBackground: {
        height: 130,
        flexDirection: 'row',
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
        alignSelf: 'center',
        paddingLeft: 10,
    },
});

export default Menu;
