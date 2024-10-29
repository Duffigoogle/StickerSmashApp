import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      tabBarInactiveTintColor: 'gray',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarStyle: {
        backgroundColor: '#25292e',
      },
    }}>
      <Tabs.Screen name="index" options={{ 
        title: 'Home',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
        ), 
         }} />
      <Tabs.Screen name="about" options={{ 
        title: 'About',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={size} />
        )
         }} />
    </Tabs>
  );
}