import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import React from 'react';
import { LexendDeca_400Regular, LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const Header = () => {
    const [fontsLoaded] = useFonts({
        LexendDeca_400Regular: require('@expo-google-fonts/lexend-deca/LexendDeca_400Regular.ttf'),
        LexendDeca_700Bold: require('@expo-google-fonts/lexend-deca/LexendDeca_700Bold.ttf'),
    });


    return (
        <View className="bg-transparent">
            {/* Cấu hình StatusBar */}
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />

            {/* Header chính */}
            <View className="flex-row justify-between items-center px-4 py-3 bg-primary shadow-md pt-10">
                <TouchableOpacity className="bg-primary">
                    <Image source={require('../assets/images/menu.png')} className="w-8 h-8" resizeMode="contain" style={{ tintColor: 'white' }} />
                </TouchableOpacity>
                <Text className="color-textWhite font-lexend text-heading" style={{ fontFamily: 'LexendDeca_400Regular', fontSize: 18 }}>Lệnh Sản Xuất</Text>
                <View className="w-6 h-6" />
            </View>
        </View>
    );
};

export default Header;
