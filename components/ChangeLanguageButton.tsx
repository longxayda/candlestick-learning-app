import { TouchableOpacity, View, StyleSheet } from 'react-native';
import '../i18n/i18n.config';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';


const ChangeLanguageButton = ({color}) => {
    const {t, i18n} = useTranslation();
    const handleChangeLanguage = () => {
        if (i18n.language === 'vi') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('vi');
        }
    }

    return (
        <View style={styles.changeLanguageContainer}>
            <TouchableOpacity onPress={handleChangeLanguage}><FontAwesome name="language" size={24} color={color ? color : 'black'} /></TouchableOpacity>
        </View>
    )
}

export default ChangeLanguageButton;

const styles = StyleSheet.create({
  changeLanguageContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 18
  },
});