import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <LottieView
        source={require("../assets/animations/mascot.json")} // file .json từ lottiefiles
        autoPlay
        loop
        style={{ width: 250, height: 250 }}
      />  */}
      <Text style={styles.title}>Chào mừng bạn đến với</Text>
      <Text style={styles.subtitle}>Ứng dụng học Mô hình Nến</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("/index")}>
        <Text style={styles.buttonText}>Bắt đầu!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginTop: 20 },
  subtitle: { fontSize: 18, color: "#666", marginBottom: 40 },
  button: { backgroundColor: "#f90", padding: 12, borderRadius: 25, paddingHorizontal: 30 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
