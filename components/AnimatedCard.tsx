import React, { useCallback } from 'react';
import { ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withDelay } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

interface AnimatedCardProps {
    children: React.ReactNode;
    index: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, index }) => {
    const offset = useSharedValue(50);
    const opacity = useSharedValue(0);

    useFocusEffect(
        useCallback(() => {
            const delay = (index % 2) * 100 + Math.floor(index / 2) * 100;

            offset.value = 50;
            opacity.value = 0;

            offset.value = withDelay(delay, withSpring(0, { damping: 10 }));
            opacity.value = withDelay(delay, withSpring(1));

            return () => {
                offset.value = 50;
                opacity.value = 0;
            };
        }, [index])
    );

    const animatedStyle = useAnimatedStyle<ViewStyle>(() => ({
        transform: [{ translateY: offset.value }],
        opacity: opacity.value,
    }));

    return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default AnimatedCard;