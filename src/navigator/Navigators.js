import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

//Screens
import HomeScreen from '../screens/Home';
import CategoriesScreen from '../screens/Categories';
import MenuScreen from '../screens/Menu';
import ProductScreen from '../screens/Product';
import CartScreen from '../screens/Cart';
import OrderScreen from '../screens/Order';

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
                } else if (route.name === 'Cart') {
                    iconName = focused ? 'cart' : 'cart-outline';
                }
                return <Ionicons name={iconName} size={size} color={'black'} />;
            },
            tabBarActiveTintColor: 'black',
        })}
    >
        <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
                title: 'Acceuil',
                headerShown: false,
            }}
        />

        <Tab.Screen
            name='Categories'
            component={CategoriesScreen}
            options={{ title: 'Parcourir', headerShown: false }}
        />
        <Tab.Screen
            name='Cart'
            component={CartScreen}
            options={{ title: 'Panier', headerShown: false }}
        />
    </Tab.Navigator>
);

export const Stack = createNativeStackNavigator();

export const MenuStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeStack'
                component={AppTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Menu'
                component={MenuScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Product'
                component={ProductScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Order'
                component={OrderScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
