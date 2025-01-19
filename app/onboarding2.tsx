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

const Onboarding2 = () => {
    const { navigate } = useNavigation<Nav>();
    const [progress, setProgress] = useState(0);
    const [skipActive, setSkipActive] = useState(false);
    const [nextActive, setNextActive] = useState(false);
    // add useEffect
    useEffect(() => {
        if (skipActive || nextActive) return; // Prevent execution if skipped

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
    }, [skipActive, nextActive]);

    useEffect(() => {
        if (skipActive || nextActive) return; // Prevent navigation if skipped

        if (progress >= 1) {
            // navigate to the onboarding3 screen 
            navigate('onboarding3')
        }
    }, [progress, navigate, skipActive, nextActive]);

    const skip = () => {
        setProgress(0)
        setSkipActive(true); // Disable the effects
        navigate('login')
    }

    const next = () => {
        setProgress(0)
        setNextActive(true); // Disable the effects
        navigate('onboarding3')
    }

    return (
        <PageContainer>
            <View style={Onboarding1Styles.contentContainer}>
                <Image
                    source={illustrations.onboarding2}
                    resizeMode="cover"
                    style={Onboarding1Styles.illustration}
                />
                <View style={Onboarding1Styles.buttonContainer}>
                    <View style={Onboarding1Styles.titleContainer}>
                        <Text style={[Onboarding1Styles.title]}>Welcome 👋</Text>
                    </View>

                    <Text style={[Onboarding1Styles.description]}>
                        Discover adorable outfits and fun accesories for your little one                        </Text>

                    <View style={Onboarding1Styles.dotsContainer}>
                        {progress < 1 && <DotsView progress={progress} numDots={4} />}
                    </View>
                    <ButtonFilled
                        title="Next"
                        onPress={next}
                        style={Onboarding1Styles.nextButton}
                    />
                    <ButtonOutlined
                        title="Skip"
                        onPress={skip}
                        style={Onboarding1Styles.skipButton}
                    />
                </View>
            </View>
        </PageContainer>
    );
};

export default Onboarding2;