import { View, Text, Image, StyleSheet, Animated, ImageBackground, SafeAreaView } from 'react-native';
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'expo-router';
import { TouchableWithoutFeedback } from 'react-native';
import '../i18n/i18n.config';
import { useTranslation } from 'react-i18next';
import mobileAds from 'react-native-google-mobile-ads';


export default function WelcomeScreen() {
  const router = useRouter();
  const { t } = useTranslation()
  let runAnimation;
  const bounceAnim = useRef(new Animated.Value(1)).current;


  mobileAds()
    .initialize()
    .then(adapterStatuses => {
      // Initialization complete!
    });


  useEffect(() => {
    runAnimation?.play();

    // Bắt đầu animation nhún
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1.05,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <ImageBackground source={require('../assets/images/background/Background.png')} style={styles.container}>
        <Animated.View style={[{ transform: [{ scale: bounceAnim }] }]}>
          <Image style={styles.image} source={require('../assets/images/welcome/2.png')} />
        </Animated.View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{t('welcomeScreen.title')}</Text>
          <Text style={styles.subtitle}>{t('welcomeScreen.subtitle')}</Text>
          <TouchableWithoutFeedback
            style={styles.button}
            onPress={() => router.replace('/(tabs)/home')} // replace để không quay lại được welcome
          >
            <Animated.View style={[styles.button, { transform: [{ scale: bounceAnim }] }]}>
              <Text style={styles.buttonText}>{t('welcomeScreen.start')}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' },

  textContainer: {
    alignItems: 'center',
    marginHorizontal: 18,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: { color: '#6D57FC', fontSize: 16, fontWeight: 'bold' },
});
