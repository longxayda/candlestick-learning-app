import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Linking, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';
const PRIVACY_POLICY_URL = 'https://www.freeprivacypolicy.com/live/ffbcb318-8259-46dd-a97a-88521e93cf3d';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.example.app'; // Replace with your app's Play Store URL
const FACEBOOK_URL = 'https://facebook.com/yourpage'; // Replace with your Facebook page URL

const SettingsScreen = () => {
    const { t, i18n } = useTranslation()
    // Use array of objects for languages
    const languages = [
        { label: i18n.language === 'vi' ? 'Tiếng Anh' : 'English', code: 'en' },
        { label: i18n.language === 'vi' ? 'Tiếng Việt' : 'Vietnamese', code: 'vi' },
    ];
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);
    const [showLanguageScreen, setShowLanguageScreen] = useState(false);
    const [pendingLanguage, setPendingLanguage] = useState(languages[0].code);
    // Move Confirm button to the same row as the title and Back icon
    const languageFlags: Record<string, string> = {
        en: '🇬🇧',
        vi: '🇻🇳',
    };
    const router = useRouter();

    // Sync pendingLanguage with selectedLanguage when opening language screen
    React.useEffect(() => {
        if (showLanguageScreen) {
            setPendingLanguage(selectedLanguage);
        }
    }, [showLanguageScreen, selectedLanguage]);

    // Set default language 
    React.useEffect(() => {
        const loadLanguage = async () => {
            try {
                // const storedLang = await AsyncStorage.getItem('appLanguage');
                // const langToUse = storedLang || i18n.language;
                const langToUse = i18n.language;
                setSelectedLanguage(langToUse);
                await i18n.changeLanguage(langToUse);
            } catch (e) {
                console.error('Failed to load saved language:', e);
            }
        };
        loadLanguage();
    }, [])

    // Find selected language object
    const selectedLangObj = languages.find(l => l.code === selectedLanguage) || languages[0];
    const handleChangeLanguage = async (selectedLanguage) => {
        try {
            await i18n.changeLanguage(selectedLanguage);
        } catch (e) {
            console.error('Failed to change language:', e);
        }

    }
    if (showLanguageScreen) {
        return (
            <View style={[styles.container, {}]}>
                <View style={styles.header}>
                    {/* Return Icon */}
                    <TouchableOpacity onPress={() => setShowLanguageScreen(false)} style={{}}>
                        <Text>
                            <Ionicons name="arrow-back-outline" size={24} color="black" />
                        </Text>
                    </TouchableOpacity>
                    {/* Title */}
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{t('settingsScreen.language')}</Text>
                    {/* Confirm Button */}
                    <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            backgroundColor: '#6D57FC',
                            borderRadius: 24,
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                        }}
                        onPress={() => {
                            console.log("Pending lang", pendingLanguage)
                            setSelectedLanguage(pendingLanguage);
                            setShowLanguageScreen(false);
                            handleChangeLanguage(pendingLanguage);
                        }}
                    >
                        <Text>
                            <AntDesign name="check" size={24} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Language Cards */}
                <View style={{ gap: 16, padding: 20 }}>
                    {languages.map(lang => (
                        <TouchableOpacity
                            key={lang.code}
                            style={[
                                {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 14,
                                    padding: 16,
                                    marginBottom: 8,
                                    borderWidth: pendingLanguage === lang.code ? 2 : 1,
                                    borderColor: pendingLanguage === lang.code ? '#007AFF' : '#e0e0e0',
                                    shadowColor: '#007AFF',
                                    shadowOpacity: pendingLanguage === lang.code ? 0.12 : 0.04,
                                    shadowRadius: 6,
                                    elevation: pendingLanguage === lang.code ? 2 : 0,
                                }
                            ]}
                            onPress={() => { console.log(lang.code); setPendingLanguage(lang.code) }}
                        >
                            <Text style={{ fontSize: 28, marginRight: 16 }}>{languageFlags[lang.code]}</Text>
                            <Text style={{ fontSize: 16, fontWeight: pendingLanguage === lang.code ? 'bold' : 'normal', color: '#222' }}>{lang.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

            </View>
        );
    }

    return (
        <ScrollView style={[styles.container]}>
            {/* App Settings */}
            <View style={[styles.header, { marginBottom: 16, marginTop: 8 }]}>
                <TouchableOpacity onPress={() => {
                    router.push('/home');
                }}>
                    <Text>
                        <Ionicons name="arrow-back-outline" size={28} color="black" />
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 24, alignSelf: 'center' }}>{t('settingsScreen.title')}</Text>
                <TouchableOpacity disabled={false} style={{ opacity: 0, width: 28 }} ></TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>{t('settingsScreen.appSettings')}</Text>
            <View style={styles.section}>
                <Text style={styles.label}>{t('settingsScreen.language')}</Text>
                <TouchableOpacity onPress={() => setShowLanguageScreen(true)}>
                    <View style={styles.languageRow}>
                        <View
                            style={[
                                {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }
                            ]}
                        >
                            <Text style={{ fontSize: 22, marginRight: 10 }}>{languageFlags[selectedLangObj.code]}</Text>
                            <Text style={{ fontSize: 15, color: '#222' }}>{selectedLangObj.label}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Help and Terms of Use */}
            <Text style={styles.sectionTitle}>{t('settingsScreen.terms')}</Text>
            <View style={styles.section}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }} onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
                    <Text>
                        <Ionicons name="lock-closed-outline" size={24} color="black" />
                    </Text>
                    <Text style={styles.shareText}>{t('settingsScreen.privacy')}</Text>
                </TouchableOpacity>
            </View>

            {/* Share */}
            <Text style={styles.sectionTitle}>{t('settingsScreen.share')}</Text>
            <View style={styles.section}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
                    onPress={() => Linking.openURL(PLAY_STORE_URL)}
                >
                    <Text>
                        <Ionicons name="logo-google-playstore" size={24} color="black" />
                    </Text>
                    <Text style={[styles.shareText, { flex: 1 }]}>{t('settingsScreen.rate')}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <TouchableOpacity style={styles.shareButton} onPress={() => Linking.openURL(FACEBOOK_URL)}>
                    <Text>
                        <FontAwesome6 name="facebook" size={24} color="black" />
                    </Text>
                    <Text style={styles.shareText}>{t('settingsScreen.facebook')}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    sectionTitle: { fontWeight: 'bold', fontSize: 12, textTransform: 'capitalize', marginTop: 24, marginBottom: 18, color: '#333', paddingHorizontal: 20 },
    section: { backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ddd', paddingVertical: 16, paddingHorizontal: 20 },
    label: { fontSize: 14, color: '#555', marginBottom: 8 },
    languageRow: { flexDirection: 'row', gap: 8 },
    languageButton: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 8,
        backgroundColor: '#f5f5f5',
    },
    languageButtonSelected: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    languageText: { color: '#333' },
    languageTextSelected: { color: '#fff' },
    shareButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    shareText: { color: '#111', fontWeight: '500' },
});

export default SettingsScreen;
