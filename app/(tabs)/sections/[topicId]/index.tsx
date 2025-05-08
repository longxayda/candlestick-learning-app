// Road map for sections
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Line, Svg } from 'react-native-svg';
const sampleTopicData = {
    id: 1,
    title: "Topic 1",
    sections: [
        { id: "section1", title: "Cơ bản về nến Nhật", status: '', uri: require("../../../../assets/images/sections/section1.png") },
        { id: "section2", title: "Nến đảo chiều", uri: require("../../../../assets/images/sections/section2.png") },
        { id: "section3", title: "Nến tiếp diễn", uri: require("../../../../assets/images/sections/section3.png") },
        { id: "section4", title: "Nến tiếp diễn", uri: require("../../../../assets/images/sections/section4.png") },
        { id: "section5", title: "Nến tiếp diễn", uri: require("../../../../assets/images/sections/section4.png") },
    ]
}

export default function RoadmapScreen() {
    const renderIcon = (uri) => {
        return <Image style={styles.image} source={uri} />
    };

    return (
        <ImageBackground source={require('../../../../assets/images/topics/sections/notepaper.jpg')} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Đề tài 1</Text>
            </View>
            <ScrollView>
                {sampleTopicData.sections.map((step, index) => index % 2 === 0 ? (
                    <>
                        <View key={step.id} style={styles.nodeWrapperLeft}>
                            <TouchableOpacity
                                disabled={step.status === 'locked'}
                                style={[
                                    styles.nodeLeft,
                                    step.status === 'locked' ? styles.locked : styles.unlocked,
                                ]}
                            >
                                {renderIcon(step.uri)}
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', paddingTop: '12%' }}>
                                {index !== sampleTopicData.sections.length - 1 && <View style={styles.hline} />}
                                {index !== sampleTopicData.sections.length - 1 && <View style={styles.hline} />}
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: '12%' }}>
                                {index !== sampleTopicData.sections.length - 1 && <View style={styles.vline} />}
                                {index !== sampleTopicData.sections.length - 1 && <View style={styles.vline} />}
                            </View>
                        </View>
                    </>
                ) : (
                    <>
                        <View key={step.id} style={styles.nodeWrapperRight}>
                            <View style={{ flexDirection: 'column', paddingTop: '12%' }}>
                                {index !== sampleTopicData.sections.length - 1 && <View style={styles.vline} />}
                                {index !== sampleTopicData.sections.length - 1 && <View style={styles.vline} />}
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: '12%' }}>
                                {index !== sampleTopicData.sections.length - 1 && <View style={styles.hline} />}
                                {index !== sampleTopicData.sections.length - 1 && <View style={styles.hline} />}
                            </View>
                            <TouchableOpacity
                                disabled={step.status === 'locked'}
                                style={[
                                    styles.nodeRight,
                                    step.status === 'locked' ? styles.locked : styles.unlocked,
                                ]}
                            >
                                {renderIcon(step.uri)}
                            </TouchableOpacity>

                        </View>
                    </>
                ))}
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        backgroundColor: '#F8F7FF',

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        color: '#333',
        marginBottom: 30,

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
        aspectRatio: 1,
    },
    nodeRight: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 110,
        aspectRatio: 1,
        borderRadius: 20,
        marginRight: '16%',
    },
    nodeLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 110,
        aspectRatio: 1,
        borderRadius: 20,
        marginLeft: '16%',
    },
    unlocked: {
        backgroundColor: '#fff',
        boxShadow: '0px 5px #ddd',
        borderLeftWidth: 2,
        borderLeftColor: '#ddd',
        borderRightColor: '#ddd',
        borderRightWidth: 2,
    },
    locked: {
        backgroundColor: '#444',
    },
    vline: {
        width: 4,
        height: 46,
        backgroundColor: '#888',
    },
    hline: {
        width: 38,
        height: 4,
        backgroundColor: '#888',
    }
});
