import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, ImageBackground } from "react-native";
import { useRouter } from 'expo-router';
import { lessons } from '@/data/lessons';
import AnimatedCard from "@/components/AnimatedCard";

const { width } = Dimensions.get("window");

const colors = ["rgba(255, 180, 180, 0.5)", "rgba(180, 255, 228, 0.5)", "rgba(30, 144, 255, 0.5)", 'rgba(255, 99, 72, 0.5)', "rgba(255, 238, 180, 0.5)"]
const iconsMap = {
  icon1: require("../../assets/images/sections/section1.png"),
  icon2: require("../../assets/images/sections/section2.png"),
  icon3: require("../../assets/images/sections/section3.png"),
  icon4: require("../../assets/images/sections/section4.png"),
  icon5: require("../../assets/images/sections/section5.png")
}
const res = []

function getRandomHeight(): number {
  const min = 60;
  const max = 120;
  const height = Math.floor(Math.random() * (max - min + 1)) + min;
  return height;
}

Object.entries(lessons).map(([sectionId, section], index) => {
  const color = colors[index]
  const icon = iconsMap[`icon${index + 1}`];
  const courses = Object.keys(section.lessons).length
  let obj = { id: sectionId, title: section.title, courses: courses, color: color, icon: icon, }
  res.push(obj)
})

export default function CategoryScreen() {

  const renderItem = ({ item, index }) => (
    <AnimatedCard index={index}>
      <TouchableOpacity onPress={() => router.push(`/lessons/${item.id}`)} style={[styles.card, { backgroundColor: item.color }]}>
        {item.icon && <Image source={item.icon} style={[styles.icon]} />}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.course}>{item.courses} Bài học</Text>
      </TouchableOpacity>
    </AnimatedCard>
  );
  const router = useRouter();
  return (
    <ImageBackground source={require("../../assets/images/background/Background.png")} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <AnimatedCard index={1}>
            <Text style={styles.headerTitle}>Khám phá</Text>
            <Text style={styles.subtitle}>Chọn một chủ đề để học nào</Text>
          </AnimatedCard>
        </View>
        <AnimatedCard index={1}>
          <Image style={styles.headerImg} source={require("../../assets/images/sections/trangchu7.png")} />
        </AnimatedCard>
      </View>
      <View style={styles.tabBar}>
      </View>
      <FlatList
        data={res}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={styles.flatList}
      />
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, width: '100%', height: '100%' },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    paddingRight: 20,
    justifyContent: 'flex-end',
  },
  animationContainer: {
    flexDirection: 'row',
    backgroundColor: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  backArrow: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#eee",
    fontSize: 14,
    marginTop: 4,
  },
  headerImg: {
    height: 150,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  tabBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    paddingVertical: 18,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderColor: "#eee",
  },
  tab: {
    fontSize: 16,
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
  },
  list: {
    marginTop: 10,
  },
  card: {
    width: (width - 48) / 2,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    borderWidth: 8,
    borderColor: "#F8F7FF",
  },
  icon: {
    width: '100%',
    height: 100,
    alignSelf: "center",
    resizeMode: 'contain',
    marginBottom: 10,
    borderWidth: 0,
  },
  title: {
    fontSize: 14,
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
});
