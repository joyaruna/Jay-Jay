import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, fonts } from '../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,

        // alignItems: 'center'
    },
    illustration: {
        // height: SIZES.width * 0.96,
        // width: SIZES.width * 0.96,
        position: "absolute",
        bottom: 360,
        width:'100%'
    },
    ornament: {
        position: "absolute",
        bottom: 372,
        zIndex: -99,
        width: SIZES.width * 0.7
    },
    titleContainer: {
        marginVertical: 18,
        alignItems: 'center',
    },
    title: {
        fontFamily:'bold',
        color: COLORS.navyBlue,
        textAlign: "center",
        fontSize: 30
    },
    subTitle: {
        // ...FONTS.h3,
        color: COLORS.primary,
        textAlign: "center",
        marginTop: 8,
    },
    description: {
        fontFamily:'medium',
        color: COLORS.navyBlue,
        textAlign: "center",
        fontSize: 19
    },
    dotsContainer: {
        marginBottom: 20,
        marginTop: 8,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 22,
        borderTopLeftRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius,
        height: 360,
    },
    nextButton: {
        width: SIZES.width - 44,
        marginBottom: SIZES.padding,
        // backgroundColor: COLORS.primary,
        // borderColor: COLORS.primary,
        marginTop: 22,
    },
    skipButton: {
        width: SIZES.width - 44,
        marginBottom: SIZES.padding,
        backgroundColor: 'transparent',
    },
});

export default styles;