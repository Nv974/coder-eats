import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Extra = ({ item, extras, setExtras }) => {
    const [isChecked, setIsChecked] = useState(false);
    const currentItem = item;

    //handlers
    const addExtraHandler = () => {
        setIsChecked(!isChecked);
        setExtras([...extras, currentItem]);
    };

    const deleteExtraHandler = () => {
        setIsChecked(!isChecked);
        setExtras(extras.filter(extra => extra !== currentItem));
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={!isChecked ? addExtraHandler : deleteExtraHandler}
            >
                <Ionicons name={isChecked ? 'checkbox' : 'square-outline'} size={23} />
            </TouchableWithoutFeedback>
            <Text style={styles.text}>{item.label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        textTransform: 'uppercase',
        marginLeft: 10,
        fontSize: 18,
    },
});

export default Extra;
