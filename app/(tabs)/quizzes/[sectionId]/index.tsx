import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import LessonElement from '@/components/LessonElement';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { quizzes } from '@/data/quizzes';

export default function QuizListScreen() {
  const { sectionId } = useLocalSearchParams();
   const section = quizzes[sectionId];
   const quizList = section?.lessons ?? {};
   const router = useRouter();
  return (
    <View style={styles.container}>
        <Stack.Screen
            options={{
              title: section?.title || 'Quizzes',
            }}
          />
       {/* Breadcrumb / Back / Home */}
         <Pressable
           onPress={() => router.push(`/quiz`)}
           style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, padding: 12,
              marginVertical: 6,
              marginHorizontal: 16,
              color: "#fff" }}
         >
           <Ionicons name="arrow-back" size={20} color="#4B5563" />
           <Text style={{ marginLeft: 6, fontSize: 16, color: '#4B5563' }}>Quay về</Text>
         </Pressable>
      {Object.entries(quizList).map(([quizId, quiz]) => (
          <LessonElement
                key={quizId}
                title={quiz.title}
//                 description={lesson.description}
                onPress={() => {
                    console.log("Quizz: ", quizId);
                    router.push(`/quizzes/${sectionId}/${quizId}`)}}
              >
                <Text style={{ fontSize: 16 }}>{quiz.title}</Text>
          </LessonElement>
            ))}
    </View>
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
