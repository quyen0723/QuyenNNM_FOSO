import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LexendDeca_400Regular, LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';
import { useHeaderTitle } from '@/components/HeaderContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { setHeaderTitle } = useHeaderTitle();

  const [fontsLoaded] = useFonts({
    LexendDeca_400Regular: require('@expo-google-fonts/lexend-deca/LexendDeca_400Regular.ttf'),
    LexendDeca_700Bold: require('@expo-google-fonts/lexend-deca/LexendDeca_700Bold.ttf'),
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0375F3', // Màu khi tab được focus
        tabBarInactiveTintColor: '#A0A0A0', // Màu khi tab không được focus
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {

            position: 'absolute',
            height: 94,
            paddingBottom: 20,
            paddingTop: 10,
            borderTopLeftRadius: 12,  // Sửa lại đúng thuộc tính
            borderTopRightRadius: 12, // Sửa lại đúng thuộc tính
          },
          android: {
            height: 94,
            paddingBottom: 20,
            paddingTop: 10,
            borderTopLeftRadius: 12,  // Sửa lại đúng thuộc tính
            borderTopRightRadius: 12, // Sửa lại đúng thuộc tính
          },
          default: {},

        }),

      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Tổng quan',
          headerTitle: 'Tổng quan',
          headerShown: false, // Hiển thị tiêu đề để Drawer có thể cập nhật
          tabBarIcon: ({ color, focused }) => (<Image source={require('../../assets/images/tongquan.png')} // Đường dẫn hình ảnh
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? color : '#A0A0A0', // Đổi màu khi focus
            }}
            resizeMode="contain" />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Đặt size 12px
            fontFamily: 'LexendDeca_400Regular',
            fontWeight: '400',
          },
        }}
        listeners={{ focus: () => setHeaderTitle('Tổng quan') }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Đơn hàng',
          tabBarIcon: ({ color, focused }) => (<Image source={require('../../assets/images/order.png')} // Đường dẫn hình ảnh
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? color : '#A0A0A0', // Đổi màu khi focus
            }}
            resizeMode="contain" />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Đặt size 12px
            fontFamily: 'LexendDeca_400Regular',
            fontWeight: '400',
          },
        }}
        listeners={{ focus: () => setHeaderTitle('Đơn hàng') }}
      />
      <Tabs.Screen
        name="diagram"
        options={{
          title: 'Sơ đồ Gantt',
          tabBarIcon: ({ color, focused }) =>
          (
            <Image source={require('../../assets/images/diagram.png')} // Đường dẫn hình ảnh
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? color : '#A0A0A0', // Đổi màu khi focus
              }}
              resizeMode="contain" />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Đặt size 12px
            fontFamily: 'LexendDeca_400Regular',
            fontWeight: '400',
          },
        }}
        listeners={{ focus: () => setHeaderTitle('Sơ đồ Gantt') }}
      />
      <Tabs.Screen
        name="command"
        options={{
          title: 'Lệnh Sản Xuất',
          tabBarIcon: ({ color, focused }) => (<Image source={require('../../assets/images/command.png')} // Đường dẫn hình ảnh
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? color : '#A0A0A0', // Đổi màu khi focus
            }}
            resizeMode="contain" />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Đặt size 12px
            fontFamily: 'LexendDeca_400Regular',
            fontWeight: '400',
          },
        }}
        listeners={{ focus: () => setHeaderTitle('Lệnh SX') }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'Xem thêm',
          tabBarIcon: ({ color, focused }) => (<Image source={require('../../assets/images/more.png')} // Đường dẫn hình ảnh
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? color : '#A0A0A0', // Đổi màu khi focus
            }}
            resizeMode="contain" />
          ),
          tabBarLabelStyle: {
            fontSize: 12, // Đặt size 12px
            fontFamily: 'LexendDeca_400Regular',
            fontWeight: '400',
          },
        }}
        listeners={{ focus: () => setHeaderTitle('Xem thêm') }}
      />

    </Tabs>
  );
}
