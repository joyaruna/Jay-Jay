import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import PageContainer from '../components/PageContainer';
import DotsView from '../components/DotsView';
import Onboarding1Styles from '../styles/OnboardingStyles';
import { illustrations } from '../constants';
import ButtonFilled from '../components/ButtonFilled';
import ButtonOutlined from '../components/ButtonOutlined';
import { useNavigation } from 'expo-router';

type Nav = {
    navigate: (value: string) => void
}

const Onboarding3 = () => {
    const { navigate } = useNavigation<Nav>();
    const [progress, setProgress] = useState(0);
    // add useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 1) {
                    clearInterval(intervalId);
                    return prevProgress;
                }
                return prevProgress + 0.5;
            });
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (progress >= 1) {
            // navigate to the onboarding3 screen 
            navigate('onboarding4')
        }
    }, [progress, navigate]);

    return (
        <PageContainer>
            <View style={Onboarding1Styles.contentContainer}>
                <Image
                    source={illustrations.onboarding3}
                    resizeMode="cover"
                    style={Onboarding1Styles.illustration}
                />
                <View style={Onboarding1Styles.buttonContainer}>
                    <View style={Onboarding1Styles.titleContainer}>
                        <Text style={[Onboarding1Styles.title]}>Fun for all ages!</Text>
                    </View>

                    <Text style={[Onboarding1Styles.description]}>
                        From toddlers to tweens, we've got something for everyone.                     </Text>

                    <View style={Onboarding1Styles.dotsContainer}>
                        {progress < 1 && <DotsView progress={progress} numDots={4} />}
                    </View>
                    <ButtonFilled
                        title="Next"
                        onPress={() => navigate('onboarding2')}
                        style={Onboarding1Styles.nextButton}
                    />
                    <ButtonOutlined
                        title="Skip"
                        onPress={() => navigate('login')}
                        style={Onboarding1Styles.skipButton}
                    />
                </View>
            </View>
        </PageContainer>
    );
};

export default Onboarding3;