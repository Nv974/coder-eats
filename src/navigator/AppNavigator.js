//Libraries
import React from 'react';
import { MenuStackNavigator } from './Navigators';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MenuStackNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
