import { SafeAreaView, Text, ScrollView, View, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import QuizElement from '@/components/QuizElement';
import { useRouter } from 'expo-router';



export default function Index() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <Text>Hãng luật Justiva Law chuyên tư vấn tài chính và blockchain xin giới thiệu đến các bạn kiến thức cơ bản vể nến Nhật, mong được đồng hành với các bạn.</Text>
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
