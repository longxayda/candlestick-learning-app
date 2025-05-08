import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6D57FC',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#666',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: 'Trắc nghiệm',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Về chúng tôi',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="lessons/[sectionId]/[lessonId]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="lessons/[sectionId]/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="quizzes/[sectionId]/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="quizzes/[sectionId]/[quizId]"
        options={{
          href: null,
        }} />

      <Tabs.Screen
        name="welcome"
        options={{
          href: null,
        }} />
    </Tabs>
  );
}

