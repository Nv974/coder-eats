import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Restaurant from '../components/Restaurant';

import categoryDatas from '../datas/categories';
import restaurantDatas from '../datas/restaurants';

const Categories = props => {
    const [categoryFilter, setCategoryFilter] = useState('none');

    const restaurantFilter = restaurantDatas.filter(
        restaurant => restaurant.category == categoryFilter,
    );

    return (
        <View style={styles.container}>
            {categoryFilter === 'none' && (
                <View style={styles.category}>
                    <FlatList
                        data={categoryDatas}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setCategoryFilter(item.name)}
                            >
                                <ImageBackground
                                    source={item.image}
                                    style={styles.background}
                                >
                                    <View style={styles.categoryName}>
                                        <Text style={styles.categoryText}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        )}
                        keyExtractor={() => Math.random()}
                        numColumns={2}
                    />
                </View>
            )}

            {categoryFilter !== 'none' && (
                <View style={styles.restaurants}>
                    <FlatList
                        ListHeaderComponent={() => (
                            <View style={styles.header}>
                                <Text style={styles.title}> {categoryFilter} </Text>
                                <TouchableWithoutFeedback
                                    onPress={() => setCategoryFilter('none')}
                                >
                                    <Ionicons name='arrow-back-outline' size={26} />
                                </TouchableWithoutFeedback>
                            </View>
                        )}
                        data={restaurantFilter}
                        keyExtractor={() => Math.random()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() =>
                                    props.navigation.navigate('Menu', {
                                        item,
                                    })
                                }
                            >
                                <Restaurant item={item} />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Uber-move-medium',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    category: {
        paddingTop: 100,
    },
    background: {
        width: 180,
        height: 150,
        margin: 5,
    },
    categoryName: {
        backgroundColor: 'rgba(0, 0, 0,0.4)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Uber-move',
    },
    restaurants: {
        backgroundColor: '#f1f2f6',
        marginTop: 30,
        width: Dimensions.get('screen').width,
    },
});

export default Categories;
