import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import Button from '@/components/Button';
import { LexendDeca_400Regular, LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';


const command = () => {
    const [fontsLoaded] = useFonts({
        LexendDeca_400Regular: require('@expo-google-fonts/lexend-deca/LexendDeca_400Regular.ttf'),
        LexendDeca_700Bold: require('@expo-google-fonts/lexend-deca/LexendDeca_700Bold.ttf'),
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#f3f4f6' }}>
            {/* <Header /> */}
            {/* Wrap ScrollView inside a flex container */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1, // Ensures ScrollView fills the container
                    }}
                    style={{ flex: 1 }} // Ensures ScrollView occupies the space
                >
                    {/* Center content */}
                    <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                        <Image
                            source={require('../../assets/images/imageBody.png')}
                            style={{
                                width: 211.74, // Fixed width
                                height: 211.74, // Fixed height
                                resizeMode: 'contain', // Maintains aspect ratio
                            }}
                        />
                        <Text
                            style={{ textAlign: 'center', fontFamily: 'LexendDeca_400Regular', fontSize: 18, marginVertical: 24, fontWeight: '400' }}
                            className='color-textDarkBlue'>
                            Chưa có Lệnh sản xuất.
                        </Text>
                        <Button text="Bắt đầu ghim lệnh ngay"
                            imageSource={require('../../assets/images/attach.png')}
                        />
                    </View>
                </ScrollView>
            </View >
        </View >

    );
}

export default command