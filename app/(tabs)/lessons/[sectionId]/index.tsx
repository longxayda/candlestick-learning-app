import React from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Pressable, ImageBackground } from "react-native";
const { width } = Dimensions.get("window");
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { lessons } from '@/data/lessons';
import LessonElement from '@/components/LessonElement';

export default function CategoryScreen() {
  const { sectionId } = useLocalSearchParams();
  const section = lessons[sectionId];
  const backgroundImg = section?.backgroundImg;
  const lessonList = section?.lessons ?? {};
  const lessonListLength = Object.keys(lessonList).length;
  const router = useRouter();
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.overlay}>
        <Pressable
          onPress={() => router.push(`/`)}
          style={{
            flexDirection: 'row', marginTop: 16, alignItems: 'center',
            marginHorizontal: 16,
          }}
        >
          <Ionicons name="arrow-back" size={20} color="#fff" />
          <Text style={{ marginLeft: 6, fontSize: 16, color: '#fff' }}>Quay về</Text>
        </Pressable>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>{section.title}</Text>
            <Text style={styles.subtitle}>{section.description}</Text>
          </View>
        </View>
        <View style={styles.tabBar}>
          <Text style={styles.tabActive}>{lessonListLength} Bài học</Text>
          {/* <Text style={styles.subtab}>Yêu thích</Text> */}
        </View>
        {/* Danh sach lesson */}
        <ScrollView style={styles.flatList}>
          {Object.entries(lessonList).map(([lessonId, lesson]) => (
            <LessonElement
              key={lessonId}
              title={lesson.title}
              description={lesson.description}
              icon={lesson.uri}
              onPress={() => router.push(`/lessons/${sectionId}/${lessonId}`)}
            >
              <Text style={{ fontSize: 16 }}>{lesson.title}</Text>
            </LessonElement>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6D57FC" },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
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
  tabBar: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 14,
    paddingVertical: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  flatList: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingTop: 16,
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
    backgroundColor: 'rgba(0,0,0,0.4)', // làm tối overlay để chữ trắng dễ đọc
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
