//Libraries
import React from 'react';
import { ModalMenuNavigator } from './Navigators';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <ModalMenuNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
