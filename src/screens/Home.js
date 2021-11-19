import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Platform,
} from 'react-native';
import Restaurant from '../components/Restaurant';
import restaurantDatas from '../datas/restaurants';
import Header from '../components/Header';

const Home = props => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.restaurants}>
                <FlatList
                    data={restaurantDatas}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                props.navigation.navigate('Menu', { item: item });
                            }}
                        >
                            <Restaurant item={item} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    restaurants: {
        backgroundColor: '#f1f2f6',
        marginBottom: Platform.OS === 'ios' ? 90 : 130,
    },
});

export default Home;
