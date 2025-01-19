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

const Onboarding4 = () => {
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
            // navigate to the signup screen 
            navigate('signup')
        }
    }, [progress, navigate]);


    return (
        <PageContainer>
            <View style={Onboarding1Styles.contentContainer}>
                <Image
                    source={illustrations.onboarding4}
                    resizeMode="cover"
                    style={Onboarding1Styles.illustration}
                />
                <View style={Onboarding1Styles.buttonContainer}>
                    <View style={Onboarding1Styles.titleContainer}>
                        <Text style={[Onboarding1Styles.title]}>Sign up and start shopping!</Text>
                    </View>

                    <Text style={[Onboarding1Styles.description]}>
                        Create an account to unlock perks and stay updated.
                    </Text>

                    <View style={Onboarding1Styles.dotsContainer}>
                        {progress < 1 && <DotsView progress={progress} numDots={4} />}
                    </View>
                    <ButtonFilled
                        title="Sign Up"
                        onPress={() => navigate('signup')}
                        style={Onboarding1Styles.nextButton}
                    />
                    <ButtonOutlined
                        title="Login"
                        onPress={() => navigate('login')}
                        style={Onboarding1Styles.skipButton}
                    />
                </View>
            </View>
        </PageContainer>
    );
};

export default Onboarding4;