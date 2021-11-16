import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import restaurantDatas from '../datas/restaurants';
import Category from '../components/Category';

const Categories = () => {
    restaurantDatas.map(element => console.log(element));
    return (
        <View style={styles.container}>
            <FlatList
                data={restaurantDatas}
                renderItem={({ item }) => <Category />}
                keyExtractor={() => Math.random()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Categories;
