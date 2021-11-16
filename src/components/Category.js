import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Category = props => {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text> {props.item} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Category;
