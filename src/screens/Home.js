import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import Restaurant from '../components/Restaurant';
import restaurantDatas from '../datas/restaurants';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.restaurants}>
                <FlatList
                    ListHeaderComponent={() => (
                        <Text style={styles.logo}>
                            Coder <Text style={styles.logoEat}> Eats </Text>
                        </Text>
                    )}
                    data={restaurantDatas}
                    keyExtractor={() => Math.random()}
                    renderItem={({ item }) => <Restaurant item={item} />}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    logo: {
        fontSize: 20,
        fontFamily: 'Uber-move-medium',
        paddingLeft: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
    },
    logoEat: {
        color: '#28C167',
        fontFamily: 'Uber-move-medium',
    },
    restaurants: {
        backgroundColor: '#f1f2f6',
        marginTop: 30,
    },
});

export default Home;
