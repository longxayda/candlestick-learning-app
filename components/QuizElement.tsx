import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';


export default function QuizElement({ title, description, onPress, icon, color }) {
  console.log(icon)
  return (
    <Pressable style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff', // đảm bảo có màu nền để đổ bóng nhìn thấy được

    borderWidth: 8,
    borderColor: "#F8F7FF",
  },
  iconContainer: {
    marginRight: 12,
    padding: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    marginBottom: 2,
  },
  textContainer: {
    flex: 1,
  },
  image: {
    height: 68,
    width: 68,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  progress: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
