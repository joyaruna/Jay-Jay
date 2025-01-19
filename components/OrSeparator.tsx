import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

interface OrSeparatorProps {
    text: string;
}

const OrSeparator: FC<OrSeparatorProps> = ({ text }) => {
    const { dark } = useTheme();

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.line,
                    { backgroundColor:COLORS.pink },
                ]}
            />
            <Text
                style={[
                    styles.orText,
                    { color: COLORS.navyBlue },
                ]}
            >
                {text}
            </Text>
            <View
                style={[
                    styles.line,
                    { backgroundColor:COLORS.pink },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 32,
    },
    line: {
        flex: 1,
        height: 0.4,
        backgroundColor: COLORS.grayscale200,
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 18,
        fontFamily: 'medium',
        textAlign: 'center',
    },
});

export default OrSeparator;