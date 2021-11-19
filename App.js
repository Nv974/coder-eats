import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import * as Notifications from 'expo-notifications';

import { useFonts } from 'expo-font';
import AppTabNavigator from './src/navigator/AppNavigator';

import reducer from './src/store/reducers/rootReducer';
import { createStore } from 'redux';
const store = createStore(reducer);
import { Provider } from 'react-redux';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function App() {
    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await Notifications.getPermissionsAsync();

            let finalStatus = status;

            if (status !== 'granted') {
                const { requestStatus } = await Notifications.requestPermissionsAsync();
                finalStatus = requestStatus;
            }

            await Notifications.setBadgeCountAsync(0);
        };
        getPermissions();
    }, []);

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
            <StatusBar style='dark' />
            <Provider store={store}>
                <AppTabNavigator />
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
