import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';
import AppTabNavigator from './src/navigator/AppNavigator';

export default function App() {
    let [fontLoaded] = useFonts({
        'Uber-move': require('./assets/fonts/Uber-Move.ttf'),
        'Uber-move-bold': require('./assets/fonts/Uber-Move-Bold.ttf'),
        'Uber-move-medium': require('./assets/fonts/Uber-Move-Medium.ttf'),
        'Uber-text-move': require('./assets/fonts/Uber-Move-Text.ttf'),
        'Uber-text-move-bold': require('./assets/fonts/Uber-Move-Text-Bold.ttf'),
    });

    if (!fontLoaded) {
        return <ActivityIndicator style={{ flex: 1 }} size='large' />;
    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <AppTabNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 30 : 50,
        backgroundColor: '#fff',
    },
});
