import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { LexendDeca_400Regular, LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';
import ModalCustom from '@/components/ModalCustom';

export default function HomeScreen() {
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

// <ParallaxScrollView
//   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//   headerImage={
//     <Image
//       source={require('@/assets/images/partial-react-logo.png')}
//       style={styles.reactLogo}
//     />
//   }>


{/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <View className="flex-1 justify-center blue items-center"><Text className='text-heading color-primary'>Hellllooooooo</Text></View>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}

// </ParallaxScrollView>

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
