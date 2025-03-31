import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import { HeaderProvider, useHeaderTitle } from '../components/HeaderContext';
import CustomDrawerContent from '@/components/CustomDrawerContent';

export default function RootLayout() {
  return (
    <HeaderProvider>
      <MainDrawer />
    </HeaderProvider>
  );
}

function MainDrawer() {
  const { headerTitle } = useHeaderTitle();
  const navigation = useNavigation();

  return (
    <Drawer
      screenOptions={{
        headerTitle: headerTitle,
        headerStyle: { backgroundColor: '#0375F3' },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: { fontSize: 18, fontFamily: 'LexendDeca_400Regular', },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginLeft: 15 }}
          >
            <Image
              source={require('../assets/images/menu.png')}
              style={{ width: 24, height: 24, tintColor: 'white' }}
            />
          </TouchableOpacity>
        ),
        drawerStyle: {
          width: 265,
          backgroundColor: '#f8f9fa',
        },
      }}
      drawerContent={() => <CustomDrawerContent />}
    >
      <Drawer.Screen name="(tabs)" options={{ title: 'Lệnh Sản Xuất' }} />
      <Drawer.Screen name="order" options={{ title: 'Đơn hàng' }} />
      <Drawer.Screen name="diagram" options={{ title: 'Sơ đồ Gantt' }} />
      <Drawer.Screen name="command" options={{ title: 'Lệnh Sản Xuất' }} />
      <Drawer.Screen name="more" options={{ title: 'Xem thêm' }} />
    </Drawer>
  );
}
