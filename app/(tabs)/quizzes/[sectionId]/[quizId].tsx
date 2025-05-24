import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { View, Text, ScrollView, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { quizzes } from '@/data/quizzes';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { quizzesEn } from '@/data/quizzes-en';
import ChangeLanguageButton from '@/components/ChangeLanguageButton';

export default function QuizDetailScreen() {
  const { sectionId, quizId } = useLocalSearchParams();
  const router = useRouter();
  const {t, i18n} = useTranslation();

  const section = i18n.language === 'vi' ? quizzes[sectionId] : quizzesEn[sectionId];
  const quiz = section?.lessons?.[quizId];
  const nextSection = section.nextSection;

  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [quizId]);

  if (!quiz) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Không tìm thấy bài trắc nghiệm.</Text>
        <Pressable
          style={styles.backHomeButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.backHomeText}>Trang chủ</Text>
        </Pressable>
      </View>
    );
  }

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    if (index === quiz.content.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.container}>
      <Stack.Screen options={{ title: quiz.title }} />
      <Pressable
        onPress={() => router.push(`/quizzes/${sectionId}`)}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={20} color="#111" />
        <Text style={styles.backText}>{t('quizDetailScreen.back')}</Text>
      </Pressable>


      <Text style={styles.question}>{quiz.content.question}</Text>
      {quiz.content.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionSelect(index)}
          style={[styles.option, selectedOption === index && styles.optionSelected]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {isCorrect !== null && (
        <Text style={[styles.resultText, { color: isCorrect ? 'green' : 'red' }]}>
          {isCorrect ? (i18n.language === 'vi' ? 'Chính xác!' : 'Correct!') : (i18n.language === 'vi' ? 'Sai rồi! Hãy thử lại.' : 'Try again!')}
        </Text>
      )}

      <View style={styles.buttonContainer}>
        {quiz.previousQuiz && (
          <Pressable
            onPress={() => router.push(`/quizzes/${sectionId}/${quiz.previousQuiz}`)}
            style={styles.buttonPrev}
          >
            <Text style={styles.navButtonText}>{t('quizDetailScreen.prev')}</Text>
          </Pressable>
        )}
        {quiz.nextQuiz && (
          <Pressable
            onPress={() => router.push(`/quizzes/${sectionId}/${quiz.nextQuiz}`)}
            style={styles.buttonNext}
          >
            <Text style={styles.navButtonText}>{t('quizDetailScreen.next')}</Text>
          </Pressable>
        )}
      </View>

      {!quiz.nextQuiz && nextSection && (
        <Pressable
          onPress={() => router.push(`/quizzes/${nextSection}`)}
          style={styles.nextSectionButton}
        >
          <Text style={styles.nextSectionText}>{t('quizDetailScreen.nextSection')}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#111',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
  },
  optionSelected: {
    borderColor: '#25292e',
    backgroundColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 24,
  },
  navButton: {
    flex: 1,
    backgroundColor: '#6D57FC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonPrev: {
    flex: 1,
    backgroundColor: '#rgba(255, 180, 180, 0.5)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonNext: {
    flex: 1,
    backgroundColor: '#rgba(30, 144, 255, 0.5)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  navButtonText: {
    color: '#111',
    fontSize: 16,
    textAlign: 'center',
  },
  nextSectionButton: {
    marginTop: 24,
    backgroundColor: '#6D57FC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  nextSectionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  backHomeButton: {
    marginTop: 24,
    backgroundColor: '#25292e',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backHomeText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
