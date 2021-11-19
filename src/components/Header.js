import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>
                Coder <Text style={styles.logoEat}> Eats </Text>
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logo: {
        fontSize: 24,
        fontFamily: 'Uber-move-medium',
        paddingLeft: 20,
        paddingBottom: 10,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        width: Dimensions.get('screen').width,
        marginTop: Platform.OS === 'android' ? 30 : 15,
    },
    logoEat: {
        color: '#28C167',
        fontFamily: 'Uber-move-medium',
    },
});

export default Header;
