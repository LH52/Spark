import { Tabs } from 'expo-router';
import {Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#111',
        tabBarInactiveTintColor: '#111',
        tabBarStyle: {
          height: 70,
          paddingTop: 14,
          paddingBottom: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#d5e2e8',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/AudioTab.png')}
              style={{ width: 28, height: 28 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size + 4} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size + 6} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="connectingCall"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="onCall"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          href: null,
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      />
      
    </Tabs>
    
  );
}