import {useRef} from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, Text, Image, Platform } from 'react-native';
import QuizElement from '@/components/QuizElement';
import { useRouter } from 'expo-router';
import { quizzes } from '@/data/quizzes';
import { quizzesEn } from '@/data/quizzes-en';
import AnimatedCard from '@/components/AnimatedCard';
import { useTranslation } from 'react-i18next';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const colors = ["rgba(255, 180, 180, 0.5)", "rgba(180, 255, 228, 0.5)", "rgba(30, 144, 255, 0.5)", 'rgba(255, 99, 72, 0.5)', "rgba(255, 238, 180, 0.5)"]
const iconsMap = {
  icon1: require("../../assets/images/sections/section1.png"),
  icon2: require("../../assets/images/sections/section2.png"),
  icon3: require("../../assets/images/sections/section3.png"),
  icon4: require("../../assets/images/sections/section4.png"),
  icon5: require("../../assets/images/sections/section5.png")
}

export default function Index() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const bannerRef = useRef < BannerAd > null;
  
    useForeground(() => {
      Platform.OS === 'ios' && bannerRef.current?.load();
    });

  const res = []
  Object.entries(i18n.language === 'vi' ? quizzes : quizzesEn).map(([sectionId, section], index) => {
    const icon = iconsMap[`icon${index + 1}`];
    const color = colors[index];
    const description = section.description;
    let obj = { id: sectionId, title: section.title, description, icon: icon, color: color }
    res.push(obj)
  })

  return (
    <>
      <ImageBackground source={require("../../assets/images/background/Background.png")} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <AnimatedCard index={1}>
              <Text style={styles.headerTitle}>{t('quizScreen.title')}</Text>
              <Text style={styles.subtitle}>{t('quizScreen.subtitle')}</Text>
            </AnimatedCard>
          </View>
          <View style={styles.imageContainer}>
            <AnimatedCard index={1}>
              <Image style={styles.headerImg} source={require("../../assets/images/sections/trangchu4.png")} />
            </AnimatedCard>
          </View>
        </View>
        <View style={styles.tabBar}>
        </View>
        <ScrollView style={styles.container}>
          {res.map((section, index) => (
            <AnimatedCard key={section.id} index={index}>
              <QuizElement
                key={section.id}
                title={section.title}
                description={section.description}
                icon={section.icon}
                color={section.color}
                onPress={() => {
                  console.log(`Navigating to ${section.id}`);
                  router.push(`/quizzes/${section.id}`);
                }}
              />
            </AnimatedCard>
          ))}
        </ScrollView>
      </ImageBackground>
      <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />

    </>
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
    alignItems: 'flex-end',
    paddingBottom: 30,
    paddingHorizontal: 20,
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
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  textContainer: {
    flex: 1,
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
});
