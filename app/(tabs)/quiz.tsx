import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import QuizElement from '@/components/QuizElement';
import { useRouter } from 'expo-router';
import { quizzes } from '@/data/quizzes';

const sections = [
  {
    id: "basics",
    title: "Phần 1: Cơ bản về Nến Nhật",
    description: "Giới thiệu cơ bản giúp người học hiểu nền tảng",
    lessons: 5,
  },
  {
    id: "reversals",
    title: "Phần 2: Mô hình Nến Đảo Chiều",
    description: "Xác định thị trường đảo chiều với mô hình nến quan trọng",
    lessons: 4,
  },
  {
    id: "continuation",
    title: "Phần 3: Mô hình Nến Tiếp Diễn",
    description: "Xác định các mô hình cho thị trường tiếp diễn",
    lessons: 6,
  },
  {
    id: "reversalChart",
    title: "Phần 4: Mô hình Biểu Đồ Đảo Chiều",
    description: "Các cấu trúc giá cho tín hiệu thị trường đảo chiều",
    lessons: 5,
  },
  {
    id: "continuationChart",
    title: "Phần 5: Mô hình Biểu Đồ Tiếp Diễn",
    description: "Các cấu trúc giá cho tín hiệu thị trường tiếp diễn",
    lessons: 4,
  },
]


const colors = ["rgba(255, 180, 180, 0.5)", "rgba(180, 255, 228, 0.5)", "rgba(30, 144, 255, 0.5)", 'rgba(255, 99, 72, 0.5)', "rgba(255, 238, 180, 0.5)"]
const iconsMap = {
  icon1: require("../../assets/images/sections/section1.png"),
  icon2: require("../../assets/images/sections/section2.png"),
  icon3: require("../../assets/images/sections/section3.png"),
  icon4: require("../../assets/images/sections/section4.png"),
  icon5: require("../../assets/images/sections/section5.png")
}
const res = []
Object.entries(quizzes).map(([sectionId, section], index) => {
  const icon = iconsMap[`icon${index + 1}`];
  const description = section.description;
  let obj = { id: sectionId, title: section.title, description, icon: icon }
  res.push(obj)
})

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground source={require("../../assets/images/background/Background.png")} style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Trắc nghiệm</Text>
          <Text style={styles.subtitle}>Hãy chọn đề tài.</Text>
        </View>
        <View>
          <Image style={styles.headerImg} source={require("../../assets/images/sections/trangchu4.png")} />
        </View>
      </View>
      <ScrollView style={styles.container}>
        {res.map((section) => (
          <QuizElement
            key={section.id}
            title={section.title}
            description={section.description}
            icon={section.icon}
            onPress={() => {
              console.log(`Navigating to ${section.id}`);
              router.push(`/quizzes/${section.id}`);
            }}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%', height: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
    justifyContent: 'center',
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
});
