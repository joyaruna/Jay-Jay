import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images }  from '../constants';

type Nav = {
    navigate: (value: string) => void
}

const Onboarding1 = () => {
    const { navigate } = useNavigation<Nav>();
    // Add useEffect
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('onboarding2');
        }, 2000);

        return () => clearTimeout(timeout);
    }, []); // run only once after component mounts

    return (
        <ImageBackground
            source={images.welcomeLogo}
            style={styles.area}>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    area: {
        flex: 1,
    },
})

export default Onboarding1;