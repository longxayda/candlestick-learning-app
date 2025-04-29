import { View, ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import LessonElement from '@/components/LessonElement';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { lessons } from '@/data/lessons';

export default function LessonListScreen() {
  const { sectionId } = useLocalSearchParams();
   const section = lessons[sectionId];
   const lessonList = section?.lessons ?? {};
   const router = useRouter();
  return (
    <ScrollView style={styles.container}>
        <Stack.Screen
            options={{
              title: section?.title || 'Lessons',
            }}
          />
       {/* Breadcrumb / Back / Home */}
         <Pressable
           onPress={() => router.push(`/`)}
           style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, padding: 12,
              marginVertical: 6,
              marginHorizontal: 16,
              color: "#fff" }}
         >
           <Ionicons name="arrow-back" size={20} color="#4B5563" />
           <Text style={{ marginLeft: 6, fontSize: 16, color: '#4B5563' }}>Quay về</Text>
         </Pressable>
      {Object.entries(lessonList).map(([lessonId, lesson]) => (
          <LessonElement
                key={lessonId}
                title={lesson.title}
                description={lesson.description}
                onPress={() => router.push(`/lessons/${sectionId}/${lessonId}`)}
//                 style={{
//                   backgroundColor: '#f2f2f2',
//                   padding: 12,
//                   borderRadius: 8,
//                   marginBottom: 12,
//                 }}
              >
                <Text style={{ fontSize: 16 }}>{lesson.title}</Text>
          </LessonElement>
            ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
