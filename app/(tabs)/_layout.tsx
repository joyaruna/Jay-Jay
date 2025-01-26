import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { COLORS, icons, FONTS } from "../../constants";
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS !== 'ios',
        tabBarButton: HapticTab,
        tabBarActiveTintColor: COLORS.navyBlue,
        tabBarStyle: {
          backgroundColor: '#F6E6FF',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <Image
                source={focused ? icons.home : icons.homeOutline}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? COLORS.navyBlue : COLORS.gray3,
                }}
              />
            )
          }
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <Image
                source={focused ? icons.cart : icons.cartOutline}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? COLORS.navyBlue : COLORS.gray3,
                }}
              />
            )
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <Image
                source={focused ? icons.settings : icons.settingsOutline}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? COLORS.navyBlue : COLORS.gray3,
                }}
              />
            )
          }
        }}
      />
    </Tabs>
  );
}
