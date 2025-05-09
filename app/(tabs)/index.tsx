import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from "react-native";
const { width } = Dimensions.get("window");
import { useRouter } from 'expo-router';

const categories = [
  { id: 'basics', title: "Cơ bản về Nến Nhật", courses: 15, color: "rgba(255, 180, 180, 0.5)", icon: require("../../assets/images/sections/section1.png") },
  { id: "reversals", title: "Nến Đảo Chiều", courses: 10, color: "rgba(180, 255, 228, 0.5)", icon: require("../../assets/images/sections/section2.png") },
  { id: "continuation", title: "Nến Tiếp Diễn", courses: 25, color: "rgba(30, 144, 255, 0.5)", icon: require("../../assets/images/sections/section3.png") },
  { id: "reversalChart", title: "Biểu Đồ Đảo Chiều", courses: 35, color: 'rgba(255, 99, 72, 0.5)', icon: require("../../assets/images/sections/section4.png") },
  { id: "continuationChart", title: "Biểu Đồ Tiếp Diễn", courses: 15, color: "rgba(255, 238, 180, 0.5)", icon: require("../../assets/images/sections/section5.png") },
];

export default function CategoryScreen() {

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => router.push(`/lessons/${item.id}`)} style={[styles.card, { backgroundColor: item.color }]}>
      {item.icon && <Image source={item.icon} style={styles.icon} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.course}>{item.courses} Course</Text>
    </TouchableOpacity>
  );
  const router = useRouter();
  return (
    <View style={styles.container}>
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
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6D57FC" },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#6D57FC",
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
    fontSize: 28,
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
