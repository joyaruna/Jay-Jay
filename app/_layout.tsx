import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'bold': require("../assets/fonts/Fredoka-Bold.ttf"),
    'light': require("../assets/fonts/Fredoka-Light.ttf"),
    'medium': require("../assets/fonts/Fredoka-Medium.ttf"),
    'regular': require("../assets/fonts/Fredoka-Regular.ttf"),
    'semiBold': require("../assets/fonts/Fredoka-SemiBold.ttf"),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding2" options={{ headerShown: false }}  />
        <Stack.Screen name="onboarding3" options={{ headerShown: false }}  />
        <Stack.Screen name="onboarding4" options={{ headerShown: false }}  />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
