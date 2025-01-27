import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

interface CategoryProps {
    name: string;
    icon: any; // Use 'require' for local images or 'ImageSourcePropType' for more robust typing
    onPress?: () => void;
}

const Category: React.FC<CategoryProps> = ({ name, icon, onPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.iconContainer, {
                    backgroundColor: '#6495ED'
                }]}>
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={[styles.icon]}
                />
            </TouchableOpacity>
            <Text style={[styles.name]}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 12,
        width: (SIZES.width - 32) / 4
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
        borderWidth:4,
        padding:30,
        borderColor:COLORS.pink
    },
    icon: {
        height: 52,
        width: 52
    },
    name: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.navyBlue
    }
});

export default Category;