import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Index from '../app/(tabs)/index';

const Drawer = createDrawerNavigator();

export default function RootLayout() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Index" component={Index} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}