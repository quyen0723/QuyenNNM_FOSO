import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LexendDeca_400Regular, LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function CustomDrawerContent() {
    const [fontsLoaded] = useFonts({
        LexendDeca_400Regular: require('@expo-google-fonts/lexend-deca/LexendDeca_400Regular.ttf'),
        LexendDeca_700Bold: require('@expo-google-fonts/lexend-deca/LexendDeca_700Bold.ttf'),
    });
    interface Statuses {
        notProduced: boolean;
        inProduction: boolean;
        completed: boolean;
    }
    // State for managing checkbox statuses
    const [statuses, setStatuses] = useState<Statuses>({
        notProduced: false,
        inProduction: true,
        completed: false,
    });

    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle status
    const toggleStatus = (key: keyof Statuses) => {
        setStatuses((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // Danh sách các items, có thể thay thế bằng dữ liệu động
    const productionOrders = [
        { id: 'LSX-13032514', status: 'Chưa sản xuất', deadline: '13/03/2025', progress1: 50, progress2: 90 },
        { id: 'LSX-13032515', status: 'Đang sản xuất', deadline: '20/04/2025', progress1: 70, progress2: 60 },
        { id: 'LSX-13032516', status: 'Đang sản xuất', deadline: '20/04/2025', progress1: 80, progress2: 80 },
        { id: 'LSX-13032517', status: 'Đang sản xuất', deadline: '20/04/2025', progress1: 70, progress2: 60 },
    ];

    // State để lưu các items nào đang được ghim
    const [pinnedItems, setPinnedItems] = useState<Record<string, boolean>>({});

    // Hàm toggle trạng thái ghim của từng item
    const togglePin = (id: string) => {
        setPinnedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Hàm để bỏ ghim toàn bộ
    const unpinAllItems = () => {
        setPinnedItems({});
    };


    return (
        <ScrollView style={styles.drawerContainer}>
            <Text style={{ fontFamily: 'LexendDeca_400Regular', fontSize: 18, fontWeight: 500, color: '#25387A' }}>Lệnh Sản Xuất</Text>
            {/* Thanh tìm kiếm */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Tìm kiếm mã lệnh sản xuất"
                    placeholderTextColor="#9295A4"
                    style={styles.searchInput}
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Image
                        source={require('../assets/images/find.png')} // Đường dẫn đến icon tìm kiếm
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.statusBorder} onPress={() => setIsExpanded(!isExpanded)}><Text style={styles.title}>Trạng thái</Text>
                    <Image
                        source={isExpanded ? require('../assets/images/arrowUp.png') : require('../assets/images/arrowDown.png')}
                        style={{ width: 12, height: 12 }}
                    />
                </TouchableOpacity >

                {/* Hiển thị danh sách trạng thái nếu isExpanded === true */}
                {isExpanded && (
                    <View style={styles.statusContainerItems}>
                        {/* Chưa sản xuất */}
                        <TouchableOpacity style={styles.statusItem} onPress={() => toggleStatus('notProduced')}>
                            <MaterialCommunityIcons
                                name={statuses.notProduced ? "checkbox-marked" : "checkbox-blank-outline"}
                                size={16}
                                color="#1760B9"
                            />
                            <View style={[styles.statusTag, { backgroundColor: '#FCE4D6' }]}>
                                <Text style={[styles.statusText, { color: '#C25705' }]}>Chưa sản xuất</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Đang sản xuất */}
                        <TouchableOpacity style={styles.statusItem} onPress={() => toggleStatus('inProduction')}>
                            <MaterialCommunityIcons
                                name={statuses.inProduction ? "checkbox-marked" : "checkbox-blank-outline"}
                                size={16}
                                color="#1760B9"
                            />
                            <View style={[styles.statusTag, { backgroundColor: '#DCE6FA' }]}>
                                <Text style={[styles.statusText, { color: '#076A94' }]}>Đang sản xuất</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Hoàn thành */}
                        <TouchableOpacity style={styles.statusItem} onPress={() => toggleStatus('completed')}>
                            <MaterialCommunityIcons
                                name={statuses.completed ? "checkbox-marked" : "checkbox-blank-outline"}
                                size={16}
                                color="#1760B9"
                            />
                            <View style={[styles.statusTag, { backgroundColor: '#D9EAD3' }]}>
                                <Text style={[styles.statusText, { color: '#1A7526' }]}>Hoàn thành</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>


            <View style={styles.pinnedBox}>
                <Text style={styles.pinnedHeader}>Bỏ ghim toàn bộ</Text>
                <TouchableOpacity onPress={unpinAllItems}>
                    <Image
                        source={require('../assets/images/unpin.png')}
                        style={{ width: 16, height: 16 }}
                    />
                </TouchableOpacity>
            </View>

            {productionOrders.map((order) => (
                <View key={order.id} style={styles.pinnedContainer}>
                    <TouchableOpacity style={styles.pinnedItem}>
                        {/* Tag and Image in One Row */}
                        <View style={styles.tagAndImage}>
                            <View style={[styles.statusTagPin, { backgroundColor: '#FCE4D6' }]}>
                                <Text style={[styles.statusTextPin, { color: '#C25705' }]}>{order.status}</Text>
                            </View>
                            <TouchableOpacity onPress={() => togglePin(order.id)}>
                                <Image
                                    source={require('../assets/images/pin.png')}
                                    style={[styles.pinIcon, { tintColor: pinnedItems[order.id] ? '#EE1E1E' : '#9295A4' }]}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Details */}
                        <View style={styles.pinnedInfo}>
                            {/* First Line */}
                            <View style={styles.detailRow}>
                                <Text style={styles.pinnedOrderCode}>{order.id}</Text>
                                <Text style={styles.pinnedDeadline}>Deadline: {order.deadline}</Text>
                            </View>

                            {/* Second Line: Progress Bars */}
                            <View style={styles.progressRow}>
                                <View style={styles.progressContainer}>
                                    <View style={[styles.progressBarBlue, { flexGrow: 1, flexShrink: 1, flexBasis: 0 }]}>
                                        <View style={[styles.progress, { width: `${order.progress1}%`, backgroundColor: '#FF9432' }]} />
                                        <Text style={styles.progressText}>{order.progress1}%</Text>
                                    </View>
                                </View>
                                <View style={styles.progressContainer}>
                                    <View style={[styles.progressBarOrgan, { flexGrow: 1, flexShrink: 1, flexBasis: 0, marginLeft: 10 }]}>
                                        <View style={[styles.progress, { width: `${order.progress2}%`, backgroundColor: '#0375F3' }]} />
                                        <Text style={styles.progressText}>{order.progress2}%</Text>
                                    </View>
                                </View>
                                <View style={styles.progressContainer}>
                                    <Image source={require('../assets/images/i.png')} style={{ width: 12, height: 12, marginLeft: 10 }} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 15,
        fontFamily: 'LexendDeca_400Regular'
    },
    searchContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontFamily: 'LexendDeca_400Regular',
        borderWidth: 1,
        borderColor: '#9295A4'
    },
    searchInput: {
        flex: 1,
        fontSize: 12,
        paddingVertical: 12,
        color: '#333',
        fontWeight: '300',
        fontFamily: 'LexendDeca_400Regular'
    },
    searchButton: {
        marginLeft: 26,
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BFF7',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    searchIcon: {
        width: 16,
        height: 16,
        tintColor: '#000000',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#3A3E4C',
        // marginBottom: 10,
        fontFamily: 'LexendDeca_400Regular',
    },
    statusContainer: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D0D5DD',
        backgroundColor: '#fff',
        // width: 241,
        // height: 178,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    statusBorder: {
        borderWidth: 1,
        borderColor: '#D0D5DD',
        padding: 10,
        flexDirection: 'row', // Sắp xếp các phần tử theo hàng ngang
        alignItems: 'center', // Căn giữa theo chiều dọc
        justifyContent: 'space-between', // Nếu muốn có khoảng cách giữa Text và Image
    },

    statusContainerItems: {
        borderColor: '#D0D5DD',
        padding: 10,
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    statusTag: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginLeft: 10,
    },

    statusTagPin: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    statusText: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'LexendDeca_400Regular',
    },
    statusTextPin: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'LexendDeca_400Regular',
    },
    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D0D5DD',
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#0078D4', // Blue when checked
        borderColor: '#0078D4',
    },
    pinnedOrderCode: {
        fontSize: 14, // Moderate font size for visibility
        fontWeight: '600', // Bold text for prominence
        color: '#003DA0', // Dark grey for emphasis
        marginTop: 2, // Space above the text
        fontFamily: 'LexendDeca_400Regular', // Custom font
    },
    pinnedDeadline: {
        fontSize: 12, // Smaller font for secondary details
        color: '#667085', // Light grey for subtlety
        fontWeight: '500',
        marginTop: 10, // Space above the text
        fontFamily: 'LexendDeca_400Regular', // Custom font
    },

    pinnedContainer: {
        marginTop: 20,
        borderLeftWidth: 4,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderColor: '#0375F3',
    },
    progressContainer: {
        flexDirection: 'row',  // Hiển thị ngang
        alignItems: 'center',  // Căn giữa các thành phần
    },
    pinnedHeader: {
        fontSize: 14,
        fontWeight: '500',

        color: '#333', // Dark grey for text color
        fontFamily: 'LexendDeca_700Bold', // Assuming bold font is used
    },
    pinnedItem: {
        // flexDirection: 'row',
        flex: 0,
        height: 114,
        width: 241,
        // alignItems: 'center',
        backgroundColor: '#F5F9FE',
        borderRadius: 8,
        paddingStart: 10,
    },
    tagAndImage: {
        justifyContent: 'space-between',
        flexDirection: 'row', // Align items in a single row
        alignItems: 'center', // Vertically center items
        // marginBottom: 10, // Add space below this section

    },
    pinnedBox: {
        justifyContent: 'space-between',
        flexDirection: 'row', // Align items in a single row
        alignItems: 'center', // Vertically center items
        // marginBottom: 10, // Add space below this section
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#D0D5DD',
        padding: 10,
    },
    pinnedInfo: {
        flex: 1,
        marginTop: 10, // Add spacing between tag and details
    },
    detailRow: {
        flexDirection: 'column', // Stack items vertically
        marginBottom: 10, // Space between lines
    },
    progressRow: {
        flexDirection: 'row', // Place progress bars side by side
        alignItems: 'center', // Vertical alignment
        marginTop: 7, // Add space above progress row
        marginBottom: 3,
    },

    progressBarOrgan: {
        flexGrow: 1,      // Cho phép mở rộng ngang
        flexShrink: 1,    // Cho phép co lại nếu cần
        flexBasis: 0,
        height: 12,
        width: 90.5,
        borderRadius: 5,
        position: 'relative',
        backgroundColor: '#C5DFFC',
    },

    progressBarBlue: {
        flexGrow: 1,      // Cho phép mở rộng ngang
        backgroundColor: '#FDE8D6',
        flexShrink: 1,    // Cho phép co lại nếu cần
        flexBasis: 0,
        height: 12,
        width: 90.5,
        borderRadius: 5,
        position: 'relative',
    },
    progress: {
        height: '100%',
        borderRadius: 5,
    },
    progressText: {
        position: 'absolute',
        top: 1,
        right: 65,
        fontSize: 8,
        fontWeight: '400',
        color: '#FFFFFF',
        fontFamily: 'LexendDeca_400Regular',
    },
    pinIcon: {
        width: 20,
        height: 20,
        marginRight: 14, // Space between the tag and pin icon
    },


});