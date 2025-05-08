import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import QuizElement from '@/components/QuizElement';
import { useRouter } from 'expo-router';


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

export default function Index() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      {sections.map((section) => (
        <QuizElement
          key={section.id}
          title={section.title}
          description={section.description}
          onPress={() => {
            console.log(`Navigating to ${section.id}`);
            router.push(`/quizzes/${section.id}`);
          }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
    justifyContent: 'center',
  },
  footerContainer: {
  },
});
