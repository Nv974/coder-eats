//Libraries
import React from 'react';
import { AppTabNavigator } from './Navigators';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppTabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
