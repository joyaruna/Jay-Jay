import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

interface ButtonOutlinedProps {
    onPress: () => void;
    title: string;
    style?: ViewStyle;
    isLoading?: boolean;
}

const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({ onPress, title, style, isLoading = false }) => {
    const { dark } = useTheme();
    return (
        <TouchableOpacity
            style={[
                styles.outlinedButton,
                style,
                {
                    backgroundColor: "transparent",
                },
            ]}
            onPress={onPress}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color={COLORS.white} />
            ) : (
                <Text style={[styles.buttonText]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    outlinedButton: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        borderColor: COLORS.pink,
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
    } as ViewStyle,
    buttonText: {
        fontSize: 18,
        fontFamily: "semiBold",
        color: COLORS.blue
    } as TextStyle,
});

export default ButtonOutlined;
