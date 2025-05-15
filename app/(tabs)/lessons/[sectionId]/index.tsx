import React from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Pressable, ImageBackground } from "react-native";
const { width } = Dimensions.get("window");
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { lessons } from '@/data/lessons';
import LessonElement from '@/components/LessonElement';
import { SafeAreaView } from "react-native-safe-area-context";

export default function CategoryScreen() {
  const { sectionId } = useLocalSearchParams();
  const section = lessons[sectionId];
  const backgroundImg = section?.backgroundImg;
  const lessonList = section?.lessons ?? {};
  const lessonListLength = Object.keys(lessonList).length;
  const nextSection = section?.nextSection;
  const previousSection = section?.previousSection;
  const router = useRouter();

  const colors = ["rgba(255, 180, 180, 0.5)", "rgba(180, 255, 228, 0.5)", "rgba(30, 144, 255, 0.5)", 'rgba(255, 99, 72, 0.5)', "rgba(255, 238, 180, 0.5)"]
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => router.push(`/home`)}
            style={{
              flexDirection: 'row',
            }}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={{ marginLeft: 6, fontSize: 16, color: '#fff' }}>Quay về</Text>
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerTitle}>{section.title}</Text>
          <Text style={styles.subtitle}>{section.description}</Text>
        </View>
      </View>
      <ScrollView style={styles.backgroundContainer}>
        <ImageBackground source={backgroundImg}>
          <View style={styles.overlay}>
            <View style={styles.tabBar}>
              {previousSection ? (
                <TouchableOpacity onPress={() => router.push(`/lessons/${previousSection}`)}>
                  <Text style={styles.tabActive}><Ionicons name="arrow-back" size={20} /></Text>
                </TouchableOpacity>
              ) : <TouchableOpacity disabled style={{ opacity: 0.3 }}>
                <Text style={styles.tabActive}><Ionicons name="arrow-back" size={20} /></Text>
              </TouchableOpacity>}
              <Text style={styles.tabActive}>{lessonListLength} Bài học</Text>
              {nextSection ? (
                <TouchableOpacity onPress={() => router.push(`/lessons/${nextSection}`)}>
                  <Text style={styles.tabActive}><Ionicons name="arrow-forward" size={20} /></Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity disabled style={{ opacity: 0.3 }}>
                  <Text style={styles.tabActive}><Ionicons name="arrow-forward" size={20} /></Text>
                </TouchableOpacity>
              )}
            </View>
            {Object.entries(lessonList).map(([lessonId, lesson], index) => (
              <LessonElement
                index={index}
                key={lessonId}
                title={lesson.title}
                description={lesson.description}
                icon={lesson.uri}
                color={colors[index]}
                onPress={() => router.push(`/lessons/${sectionId}/${lessonId}`)}
              >
                <Text style={{ fontSize: 16 }}>{lesson.title}</Text>
              </LessonElement>
            ))}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6D57FC" },
  header: {
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  backArrow: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#eee",
    fontSize: 14,
    marginTop: 4,
  },
  buttonContainer: {
  },
  textContainer: {
  },
  backgroundContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,

  },
  tab: {
    fontSize: 16,
    color: "#aaa",
  },
  subtab: {
    fontSize: 14,
    color: "#aaa",
  },
  tabActive: {
    fontSize: 14,
    color: "#fff",
  },
  flatList: {
    // backgroundColor: "#6D57FC",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingTop: 16,
    borderWidth: 1,
  },
  list: {
    marginTop: 10,
  },
  card: {
    width: (width - 48) / 2,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  course: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 6,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#6D57FC"
  },
});
