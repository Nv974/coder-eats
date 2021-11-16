import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Screens
import HomeScreen from '../screens/Home';
import CategoriesScreen from '../screens/Categories';

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Categories') {
                    iconName = focused ? 'search-circle' : 'search-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={'black'} />;
            },
            tabBarActiveTintColor: 'black',
        })}
    >
        <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Acceuil', headerShown: false }}
        />

        <Tab.Screen
            name='Categories'
            component={CategoriesScreen}
            options={{ title: 'Parcourir', headerShown: false }}
        />
    </Tab.Navigator>
);
