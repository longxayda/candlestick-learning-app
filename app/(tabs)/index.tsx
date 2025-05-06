import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from "react-native";
const { width } = Dimensions.get("window");

const categories = [
  { title: "Social Media Class", courses: 15, color: "#FFE0E0", icon: require("../../assets/images/icon.png") },
  { title: "3D Illustrations", courses: 10, color: "#E0FFF8", icon: require("../../assets/images/icon.png") },
  { title: "AE Animation", courses: 25, color: "#D6E8FF", icon: require("../../assets/images/icon.png") },
  { title: "AI Design Basic", courses: 35, color: "#FFDCDC", icon: require("../../assets/images/icon.png") },
  { title: "Copywriting", courses: 15, color: "#FFF6D6", icon: require("../../assets/images/icon.png") },
  { title: "Basic Laravel", courses: 8, color: "#EFEAFF", icon: require("../../assets/images/icon.png") },
];

export default function CategoryScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
      {item.icon && <Image source={item.icon} style={styles.icon} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.course}>{item.courses} Course</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>Khám phá</Text>
            <Text style={styles.subtitle}>Hãy chọn phần học.</Text>
          </View>
        <Image source={require("../../assets/images/react-logo.png")} />
      </View>
      <View style={styles.flatlist}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
            contentContainerStyle={{ paddingBottom: 100 }}
            style={styles.list}
          />
      </View>

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
    flexDirection: "row",
    justifyContent: "start",
    gap: 14,
    paddingVertical: 16,
    paddingLeft: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
  flatlist: {
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderColor: "#eee"
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
});
