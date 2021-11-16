import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground,
    Dimensions,
} from 'react-native';
import categoryDatas from '../datas/categories';

const Categories = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categoryDatas}
                renderItem={({ item }) => (
                    <View>
                        <ImageBackground source={item.image} style={styles.background}>
                            <View style={styles.categoryName}>
                                <Text style={styles.categoryText}> {item.name} </Text>
                            </View>
                        </ImageBackground>
                    </View>
                )}
                keyExtractor={() => Math.random()}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
});

export default Categories;
