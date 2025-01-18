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

interface ButtonFilledProps {
    onPress: () => void;
    title: string;
    style?: ViewStyle;
    isLoading?: boolean;
}

const ButtonFilled: React.FC<ButtonFilledProps> = ({ onPress, title, style, isLoading = false }) => {
    const { dark } = useTheme();
    return (
        <TouchableOpacity
            style={[
                styles.filledButton,
                style,
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
    filledButton: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        backgroundColor: COLORS.blue,
    } as ViewStyle,
    buttonText: {
        fontSize: 18,
        fontFamily: "semiBold",
        color:COLORS.pink
    } as TextStyle,
});

export default ButtonFilled;
