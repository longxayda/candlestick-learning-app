import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import LessonElement from '@/components/LessonElement';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { quizzes } from '@/data/quizzes';
import QuizElement from '@/components/QuizElement';

export default function QuizListScreen() {
  const { sectionId } = useLocalSearchParams();
  const section = quizzes[sectionId];
  const quizList = section?.lessons ?? {};
  const router = useRouter();
  return (
    <ImageBackground source={require('@/assets/images/background/Background.png')} style={styles.container}>
      <Stack.Screen
        options={{
          title: section?.title || 'Quizzes',
        }}
      />
      {/* Breadcrumb / Back / Home */}
      <Pressable
        onPress={() => router.push(`/quiz`)}
        style={{
          flexDirection: 'row', alignItems: 'center', marginBottom: 16, padding: 12,
          marginVertical: 6,
          marginHorizontal: 16,
          color: "#fff"
        }}
      >
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text style={{ marginLeft: 6, fontSize: 16, color: '#fff' }}>Quay về</Text>
      </Pressable>
      {Object.entries(quizList).map(([quizId, quiz], index) => (
        <LessonElement
          key={quizId}
          title={quiz.title}
          icon={quiz.uri}
          index={index}
          onPress={() => {
            console.log("Quizz: ", quizId);
            router.push(`/quizzes/${sectionId}/${quizId}`)
          }}
        >
          <Text style={{ fontSize: 16 }}>{quiz.title}</Text>
        </LessonElement>
      ))}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
