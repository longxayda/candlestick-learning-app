import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import SectionElement from '@/components/SectionElement';
import { useRouter } from 'expo-router';

const sections = [
  {
    id: "basics",
    title: "Phần 1: Cơ bản về Nến Nhật",
    description: "Giới thiệu cơ bản giúp người học hiểu nền tảng",
    lessons: 5,
    progress: 100,
    image: "https://res.cloudinary.com/dybmh6wnf/image/upload/c_thumb,w_200,g_face/v1745544899/Rising-Three-Methods-large_eeziun.png",
  },
  {
    id: "reversals",
    title: "Phần 2: Mô hình Nến Đảo Chiều",
    description: "Xác định thị trường đảo chiều với mô hình nến quan trọng",
    lessons: 4,
    progress: 75,
    image: "https://res.cloudinary.com/dybmh6wnf/image/upload/c_thumb,w_200,g_face/v1745544899/Rising-Three-Methods-large_eeziun.png",

  },
  {
    id: "continuation",
    title: "Phần 3: Mô hình Nến Tiếp Diễn",
    description: "Xác định các mô hình cho thị trường tiếp diễn",
    lessons: 6,
    progress: 33,
  },
  {
    id: "reversalChart",
    title: "Phần 4: Mô hình Biểu Đồ Đảo Chiều",
    description: "Các cấu trúc giá cho tín hiệu thị trường đảo chiều",
    lessons: 5,
    progress: 0,
  },
  {
    id: "continuationChart",
    title: "Phần 5: Mô hình Biểu Đồ Tiếp Diễn",
    description: "Các cấu trúc giá cho tín hiệu thị trường tiếp diễn",
    lessons: 4,
    progress: 0,
  },
];

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {sections.map((section) => (
          <SectionElement
            key={section.id}
            title={section.title}
            description={section.description}
            progress={section.progress}
            image={section.image}
            onPress={() => router.push(`/lessons/${section.id}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
});
