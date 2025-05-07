import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function LessonElement({ title, description, progress, onPress, icon }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
          <View style={styles.iconContainer}>
          {console.log("icon:", icon)}
          <Image source={icon} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#B5B3C1',
    shadowOpacity: 0.11,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
  iconContainer: {
    marginRight: 12,
    backgroundColor: '#fff',
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
  description: {
      fontSize: 14,
      color: '#555',
  },
  image: {
      height: 68,
      width: 68,
      backgroundColor: "#fff"
  },
    progress: {
      fontSize: 12,
      color: '#888',
      marginTop: 4,
    },
});
