import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';

interface SubHeaderItemProps {
    title: string;
    onPress: () => void;
    navTitle: string;
}

const SubHeaderItem: React.FC<SubHeaderItemProps> = ({ title, onPress, navTitle }) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.navTitle]}>{navTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16
    },
    title: {
        fontSize: 18,
        fontFamily: "semiBold",
        color: COLORS.navyBlue,
    },
    navTitle: {
        fontSize: 16,
        fontFamily: "medium",
        color: COLORS.navyBlue,
        marginLeft: 12,
    }
});

export default SubHeaderItem;