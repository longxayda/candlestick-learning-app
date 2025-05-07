import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type LessonCardProps = {
  title: string;
  duration: string;
  thumbnail: any;
  locked: boolean;
};

const LessonCard: React.FC<LessonCardProps> = ({ title, description, progress, duration, thumbnail, locked }) => {
  return (
    <View style={styles.card}>
      <Image source={thumbnail} style={styles.image} />
      <View style={styles.content}>
        <TouchableOpacity style={styles.playIcon}>
          <Icon name={locked ? 'lock-closed' : 'play-circle'} size={24} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={styles.duration}>{duration}</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>
      </View>
    </View>
  )};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    marginVertical: 8,
    padding: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  playIcon: {
    position: 'absolute',
    top: -12,
    right: -12,
    backgroundColor: '#A0A0A0',
    borderRadius: 20,
    padding: 4,
    zIndex: 1,
  },
  duration: {
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#A585FF',
  },
});

export default LessonCard;
