import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import React, { useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withDelay } from 'react-native-reanimated';


const AnimatedCard = ({ children, index }) => {
  const offset = useSharedValue(50);
  const opacity = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      const delay = (index % 2) * 100 + Math.floor(index / 2) * 100;

      offset.value = 50;      // reset trước khi animate
      opacity.value = 0;

      offset.value = withDelay(delay, withSpring(0, { damping: 10 }));
      opacity.value = withDelay(delay, withSpring(1));

      return () => {
        // Optional: reset when unfocus nếu muốn
        offset.value = 50;
        opacity.value = 0;
      };
    }, [])
  );


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
    opacity: opacity.value,
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};


export default function LessonElement({ index, title, onPress, icon }) {
  return (
    <AnimatedCard index={index}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </AnimatedCard>
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
