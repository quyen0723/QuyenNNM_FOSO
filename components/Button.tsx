import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { LexendDeca_400Regular, LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
interface ButtonProps {
    text: string; // Text to be displayed on the button
    imageSource?: any; // Optional image/icon source
}
// Define the type for Drawer Navigation
type DrawerNavProp = DrawerNavigationProp<any>;

const Button: React.FC<ButtonProps> = ({ text, imageSource }) => {
    const [fontsLoaded] = useFonts({
        LexendDeca_400Regular: require('@expo-google-fonts/lexend-deca/LexendDeca_400Regular.ttf'),
        LexendDeca_700Bold: require('@expo-google-fonts/lexend-deca/LexendDeca_700Bold.ttf'),
    });
    const navigation = useNavigation<DrawerNavProp>();

    if (!fontsLoaded) return null;

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
            {/* Conditionally render image/icon if provided */}
            {imageSource && <Image source={imageSource} style={styles.icon} />}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0375F3', // Light blue background color
        borderWidth: 1, // Border width
        borderColor: '#0375F3', // Border color matches background color
        borderRadius: 8, // Rounded corners
        flexDirection: 'row', // Align text and image horizontally
        alignItems: 'center', // Vertical alignment of content
        justifyContent: 'center', // Horizontal alignment of content
        // paddingHorizontal: 24, // Horizontal padding
        // paddingVertical: 16, // Vertical padding
        gap: 8, // Spacing between image and text
        width: 289, // Fixed width from the style
        height: 56, // Fixed height from the style
    },
    text: {
        color: '#FFFFFF', // White text color
        fontSize: 18, // Font size for the text
        fontWeight: 400, // Bold text
        fontFamily: 'LexendDeca_400Regular',
    },
    icon: {
        width: 24, // Fixed width for the icon
        height: 24, // Fixed height for the icon
        resizeMode: 'contain', // Maintain aspect ratio
    },
});

export default Button;