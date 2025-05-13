import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function QuizElement({ title, description, onPress, icon }) {
  console.log(icon)
  return (
    <Pressable style={styles.container} onPress={onPress}>
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
    backgroundColor: '#F9F9F9',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
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
    backgroundColor: "#fff"
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
