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
           tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/AudioTab.png') // active image
                  : require('../../assets/images/AudioOut.png')       // inactive image
              }
              style={{ width: 28, height: 28 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'chatbubble' : 'chatbubble-outline'}
              size={size + 4}
              color="#2e4562"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size + 6}
              color="#2e4562"
            />
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
      <Tabs.Screen
        name="viewProfile"
        options={{
          href: null,
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      />
      
    </Tabs>
    
  );
}