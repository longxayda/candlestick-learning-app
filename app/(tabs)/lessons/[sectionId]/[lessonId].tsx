import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { View, Text, ScrollView, Image, Pressable, Button, StyleSheet } from 'react-native';
import { lessons } from '@/data/lessons';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import ChangeLanguageButton from '@/components/ChangeLanguageButton';
import { lessonsEn } from '@/data/lessons-en';


export default function LessonDetailScreen() {
  const { sectionId, lessonId } = useLocalSearchParams();
  const router = useRouter();
  const {t, i18n} = useTranslation();
  const section = i18n.language === 'vi' ? lessons[sectionId] : lessonsEn[sectionId];
  const lesson = section?.lessons?.[lessonId];
  const nextSection = section.nextSection;

  if (!lesson) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ChangeLanguageButton />
        <Text>{t('lessonDetailScreen.notFound')}</Text>
        <Pressable
          style={{
            marginTop: 24,
            backgroundColor: '#25292e',
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
          onPress={() => router.push('/')}>
          <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
            {t('lessonDetailScreen.home')}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Stack.Screen
        options={{
          title: lesson.title,
        }}
      />
      {/* Breadcrumb / Back / Home */}
      <Pressable
        onPress={() => router.push(`/lessons/${sectionId}`)}
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}
      >
        <Ionicons name="arrow-back" size={20} color="#4B5563" />
        <Text style={{ marginLeft: 6, fontSize: 16, color: '#4B5563' }}>{t('lessonDetailScreen.back')}</Text>
      </Pressable>

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>
        {lesson.title}
      </Text>

      {lesson.content.map((item, index) => {
        if (item.type === 'text') {
          return (
            <Text key={index} style={{ fontSize: 16, marginBottom: 12, lineHeight: 22 }}>
              {item.value}
            </Text>
          );
        }

        if (item.type === 'image') {
          return (
            <Image
              key={index}
              source={{ uri: item.src }}
              alt={item.alt}
              style={{
                width: '100%',
                height: 200,
                resizeMode: 'contain',
                marginBottom: 16,
                borderRadius: 8,
              }}
            />
          );
        }
        return null;
      })}

      {(lesson.previousLesson || lesson.nextLesson) && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12, marginTop: 24 }}>
          {lesson.previousLesson && (
            <Pressable
              onPress={() => {
                console.log("Navigate to", lesson.previousLesson)
                router.push(`/lessons/${sectionId}/${lesson.previousLesson}`)
              }}
              style={styles.buttonPrev}
            >
              <Text style={{ color: '#111', fontSize: 16, textAlign: 'center' }}>
                {t('lessonDetailScreen.prev')}
              </Text>
            </Pressable>
          )}
          {lesson.nextLesson && (
            <Pressable
              onPress={() => router.push(`/lessons/${sectionId}/${lesson.nextLesson}`)}
              style={styles.buttonNext}
            >
              <Text style={{ color: '#111', fontSize: 16, textAlign: 'center' }}>
                {t('lessonDetailScreen.next')}
              </Text>
            </Pressable>
          )}
        </View>
      )}


      {!lesson.nextLesson && nextSection && (
        <Pressable
          onPress={() => {
            console.log(`Navigating to ${nextSection}`);
            router.push(`/lessons/${nextSection}`)
          }}
          style={styles.buttonNextSection}
        >
          <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
            {t('lessonDetailScreen.nextSection')}
          </Text>
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
  title: {
    fontSize: 20,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 32,
  },
  buttonNext: {
    flex: 1,
    backgroundColor: '#rgba(30, 144, 255, 0.5)',
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
  buttonNextSection: {
    marginTop: 16,
    flex: 1,
    backgroundColor: '#6D57FC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  }
});
