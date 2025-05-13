// Road map for sections
import React, { useEffect } from 'react';
import { View, Pressable, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Line, Svg } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

const sampleTopicData = {
    id: 1,
    title: "Topic 1",
    sections: [
        { id: "section1", title: "Cơ bản về nến Nhật", status: '', uri: require("../../../../assets/images/sections/section1.png") },
        { id: "section2", title: "Nến đảo chiều", uri: require("../../../../assets/images/sections/section2.png") },
        { id: "section3", title: "Nến tiếp diễn", uri: require("../../../../assets/images/sections/section3.png") },
        { id: "section4", title: "Nến tiếp diễn", uri: require("../../../../assets/images/sections/section4.png") },
    ]
}

const NodeItem = ({ step, index, isLeft }) => {
    const isLast = index === sampleTopicData.sections.length;
    const isFirst = index === 0;

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 }}>
            {(isLeft || isFirst) && (
                <>
                    <TouchableOpacity
                        disabled={step.status === 'locked'}
                        style={[
                            styles.node,
                            styles.nodeLeft,
                            step.status === 'locked' ? styles.locked : styles.unlocked,
                        ]}
                        onPress={() => console.log("index: ", isFirst)}
                    >
                        <Image style={styles.image} source={step.uri} />
                    </TouchableOpacity>
                    {/* <View style={styles.lineContainer}>
                        {!isLast && <View style={styles.hline} />}
                        {!isLast && <View style={styles.hline} />}
                        {!isLast && <View style={styles.hline} />}
                    </View> */}
                    <View style={styles.titleNode}><Text style={styles.nodeTitle}>{index + 1}. {step.title}</Text></View>
                </>
            )}
            {!isLeft && (
                <>
                    <View style={styles.titleNode}><Text style={styles.nodeTitle}>{index + 1}. {step.title}</Text></View>
                    {/* <View style={styles.lineContainer}>
                        {!isLast && <View style={styles.hline} />}
                        {!isLast && <View style={styles.hline} />}
                        {!isLast && <View style={styles.hline} />}
                    </View> */}
                    <TouchableOpacity
                        disabled={step.status === 'locked'}
                        style={[
                            styles.node,
                            styles.nodeRight,
                            step.status === 'locked' ? styles.locked : styles.unlocked,
                        ]}
                    >
                        <Image style={styles.image} source={step.uri} />
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default function RoadmapScreen() {
    let runAnimation;

    // useEffect(() => {
    //     runAnimation.play();
    // }, [])

    const router = useRouter();
    const renderIcon = (uri) => {
        return <Image style={styles.image} source={uri} />
    };

    return (
        <ImageBackground source={require('../../../../assets/images/topics/sections/d.jpg')} style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Pressable
                        onPress={() => router.push(`/`)}
                        style={{
                            flexDirection: 'row', marginTop: 16, alignItems: 'center',

                        }}
                    >
                        <Ionicons name="arrow-back" size={14} color="#fff" />
                        <Text style={{ marginLeft: 6, fontSize: 16, color: '#fff' }}>Quay về</Text>
                    </Pressable>
                    <View>
                        <Text style={styles.title}>Đề tài 1</Text>
                        <TouchableOpacity><Text style={styles.subtitle}>Chọn phần học ưa thích.</Text></TouchableOpacity>
                    </View>
                </View>
                <View>
                    {/* <LottieView
                        ref={(animation) => {
                            runAnimation = animation;
                        }}
                        autoPlay={true}
                        loop
                        source={require('../../../../assets/animations/robot.json')}
                    /> */}
                    <Image source={require('../../../../assets/images/sections/trangchu5.png')} />
                </View>
            </View>
            <ScrollView style={{}}>
                {sampleTopicData.sections.map((step, index) => (
                    <NodeItem key={step.id} step={step} index={index} isLeft={index % 2 === 0} />
                ))}
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F7FF',
        width: '100%',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderColor: '#fff',
        paddingBottom: 20
    },
    headerTitle: {
        justifyContent: 'space-evenly',
    },
    title: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#fff",
        fontSize: 14,
        marginTop: 4,
    },
    nodeWrapperRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    nodeWrapperLeft: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    image: {
        height: 65,
        width: 65,
    },
    // nodeRight: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 110,
    //     width: 110,
    //     borderRadius: 20,
    //     marginRight: '16%',
    // },
    // nodeLeft: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 110,
    //     width: 110,
    //     borderRadius: 20,
    //     marginLeft: '16%',
    // },
    unlocked: {
        backgroundColor: '#fff2d7',
        boxShadow: '0px 5px #ddd',
        borderLeftWidth: 2,
        borderLeftColor: '#ddd',
        borderRightColor: '#ddd',
        borderRightWidth: 2,
    },
    locked: {
        backgroundColor: '#444',
    },
    node: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 110,
        width: 110,
        borderRadius: 20,
    },
    nodeLeft: {
        marginLeft: 20,
    },
    nodeRight: {
        marginRight: 20,
    },
    lineContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    vline: {
        width: 4,
        height: 20,
        backgroundColor: '#6D57FC',
    },
    vlineCurveR: {
        width: 4,
        height: 20,
        borderTopEndRadius: 20,
        backgroundColor: '#6D57FC',
    },
    vlineCurveL: {
        width: 4,
        height: 20,
        borderTopStartRadius: 20,
        backgroundColor: '#6D57FC',
    },
    hline: {
        width: 40,
        height: 4,
        backgroundColor: '#6D57FC',
        marginVertical: 4,
    },
    nodeTitle: {
        color: '#f98866',
        // color: '#00203fff',
        fontSize: 20,
        fontWeight: "bold",
    },
    titleNode: {
        flex: 1,
        alignItems: "center",
        borderRadius: 4,
        backgroundColor: '#fff2d7',
        // backgroundColor: '#adefe1ff',
        marginHorizontal: 14,
        boxShadow: '0px 5px #ddd',
    }
});
