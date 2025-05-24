import ChangeLanguageButton from '@/components/ChangeLanguageButton';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text, ScrollView, View, StyleSheet, Image, Linking } from 'react-native';

export default function Index() {
  const { i18n } = useTranslation();
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../assets/images/about/jlf.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {i18n.language === 'vi' ? (
          <>
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
              🌐 <Text style={styles.bold}>Website:</Text>{' '}
              <Text
                style={[styles.bold, { color: 'gold' }]}
                onPress={() => Linking.openURL('https://justivalaw.com')}
              >
                justivalaw.com
              </Text>{'\n'}
              📧 <Text style={styles.bold}>Email:</Text> info@justivalaw.com
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>Introduction to Justiva Law</Text>

            <Text style={styles.paragraph}>
              <Text style={styles.highlight}>Justiva Law</Text>, a law firm specializing in financial and blockchain consulting,
              is pleased to introduce you to the basics of Japanese candlesticks. We look forward to accompanying you
              on your journey to explore and apply financial knowledge effectively.
            </Text>

            <Text style={styles.paragraph}>
              🎯 <Text style={styles.bold}>Mission:</Text> To provide clear and easy-to-understand legal and financial knowledge for the community.
            </Text>

            <Text style={styles.paragraph}>
              🌐 <Text style={styles.bold}>Website:</Text>{' '}
              <Text
                style={[styles.bold, { color: 'gold' }]}
                onPress={() => Linking.openURL('https://justivalaw.com')}
              >
                justivalaw.com
              </Text>{'\n'}
              📧 <Text style={styles.bold}>Email:</Text> info@justivalaw.com
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#6D57FC',
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
    color: 'gold',
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
