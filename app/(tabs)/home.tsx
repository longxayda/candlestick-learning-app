import React, { useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, ImageBackground } from "react-native";
import Animated, { SlideInDown, useSharedValue, useAnimatedStyle, withSpring, withDelay } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { lessons } from '@/data/lessons';
const { width } = Dimensions.get("window");



const AnimatedCard = ({ children, index }) => {
  const offset = useSharedValue(50);
  const opacity = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      const delay = (index % 2) * 100 + Math.floor(index / 2) * 100;

      offset.value = 50;      // reset trước khi animate
      opacity.value = 0;

      offset.value = withDelay(delay, withSpring(0, { damping: 10 }));
      opacity.value = withDelay(delay, withSpring(1));

      return () => {
        // Optional: reset when unfocus nếu muốn
        offset.value = 50;
        opacity.value = 0;
      };
    }, [])
  );


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
    opacity: opacity.value,
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

// const categories = [
//   { id: 'basics', title: "Cơ bản về Nến Nhật", courses: 15, color: "rgba(255, 180, 180, 0.5)", icon: require("../../assets/images/sections/section1.png") },
//   { id: "reversals", title: "Nến Đảo Chiều", courses: 10, color: "rgba(180, 255, 228, 0.5)", icon: require("../../assets/images/sections/section2.png") },
//   { id: "continuation", title: "Nến Tiếp Diễn", courses: 25, color: "rgba(30, 144, 255, 0.5)", icon: require("../../assets/images/sections/section3.png") },
//   { id: "reversalChart", title: "Biểu Đồ Đảo Chiều", courses: 35, color: 'rgba(255, 99, 72, 0.5)', icon: require("../../assets/images/sections/section4.png") },
//   { id: "continuationChart", title: "Biểu Đồ Tiếp Diễn", courses: 15, color: "rgba(255, 238, 180, 0.5)", icon: require("../../assets/images/sections/section5.png") },
// ];

const colors = ["rgba(255, 180, 180, 0.5)", "rgba(180, 255, 228, 0.5)", "rgba(30, 144, 255, 0.5)", 'rgba(255, 99, 72, 0.5)', "rgba(255, 238, 180, 0.5)"]
const iconsMap = {
  icon1: require("../../assets/images/sections/section1.png"),
  icon2: require("../../assets/images/sections/section2.png"),
  icon3: require("../../assets/images/sections/section3.png"),
  icon4: require("../../assets/images/sections/section4.png"),
  icon5: require("../../assets/images/sections/section5.png")
}
const res = []
Object.entries(lessons).map(([sectionId, section], index) => {
  const color = colors[index]
  const icon = iconsMap[`icon${index + 1}`];
  const courses = Object.keys(section.lessons).length
  let obj = { id: sectionId, title: section.title, courses: courses, color: color, icon: icon }
  res.push(obj)
})

export default function CategoryScreen() {

  const renderItem = ({ item, index }) => (
    <AnimatedCard index={index}>
      <TouchableOpacity onPress={() => router.push(`/lessons/${item.id}`)} style={[styles.card, { backgroundColor: item.color }]}>
        {item.icon && <Image source={item.icon} style={styles.icon} />}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.course}>{item.courses} Bài học</Text>
      </TouchableOpacity>
    </AnimatedCard>
  );
  const router = useRouter();
  return (
    <ImageBackground source={require("../../assets/images/background/Background.png")} style={styles.container}>
      <View style={styles.header}>
        <View>
            <Text style={styles.headerTitle}>Khám phá</Text>
            <Text style={styles.subtitle}>Hãy chọn đề tài.</Text>
        </View>
        <View>
          <Image style={styles.headerImg} source={require("../../assets/images/sections/trangchu6.png")} />
        </View>
      </View>
      <View style={styles.tabBar}>
        <Text>
          Tất cả
        </Text>
        <Text>
          Yêu thích
        </Text>
        <Text>Đề nghị</Text>
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
  container: { flex: 1, width: '100%', height: '100%' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: "#6D57FC",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
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
  },
  tabBar: {
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
    marginBottom: 10,
    resizeMode: "contain",
    borderWidth: 0,
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
});
