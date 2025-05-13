import { SafeAreaView, Text, ScrollView, View, StyleSheet, Image } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          // source={require('@/assets/justiva-logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Giới thiệu về Justiva Law</Text>

        <Text style={styles.paragraph}>
          Hãng luật <Text style={styles.highlight}>Justiva Law</Text> chuyên tư vấn tài chính và blockchain,
          xin giới thiệu đến các bạn kiến thức cơ bản về nến Nhật. Mong được đồng hành cùng bạn trên con
          đường tìm hiểu và ứng dụng kiến thức tài chính hiệu quả.
        </Text>

        <Text style={styles.paragraph}>
          🎯 <Text style={styles.bold}>Sứ mệnh:</Text> Mang đến kiến thức pháp lý và tài chính rõ ràng, dễ hiểu cho cộng đồng.
        </Text>

        <Text style={styles.paragraph}>
          🌐 <Text style={styles.bold}>Website:</Text> www.justivalaw.com{'\n'}
          📧 <Text style={styles.bold}>Email:</Text> contact@justivalaw.vn
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  highlight: {
    color: '#4fc3f7',
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
