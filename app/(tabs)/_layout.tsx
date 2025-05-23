import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
  const {t} = useTranslation();
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
        name="home"
        options={{
          title: t('tab.home'),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: t('tab.quiz'),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: t('tab.about'),
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
        name="sections/[topicId]/index"
        options={{
          href: null,
        }} />
    </Tabs>
  );
}

