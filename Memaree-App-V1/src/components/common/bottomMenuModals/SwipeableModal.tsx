import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import OutsidePressHandler from 'react-native-outside-press';
import { Divider, useTheme } from 'react-native-paper';
import Animated, {
    Easing,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { useHeaderHeight } from '@react-navigation/elements';

import { CustomTheme } from 'styles/theme/customThemeProps';

import MemareeText from '../textAndInputs/MemareeText';

type ModalProps = {
    show: boolean;
    onFadeoutHandle: () => void;
};
export default function SwipeableModal({ show, onFadeoutHandle }: ModalProps) {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('screen').height;
    const zeroY = StatusBar.currentHeight;
    const headerHeight = useHeaderHeight();
    console.log(headerHeight);
    // const fadeAnim = useRef(new Animated.Value(0)).current;
    const { colors }: CustomTheme = useTheme();
    const initHeight = (screenHeight * 3) / 5;

    const hValue = useSharedValue(0);
    const swValue = useSharedValue(initHeight);
    const heightStyle = useAnimatedStyle(() => ({
        height: withTiming(hValue.value, {
            duration: 300,
            easing: Easing.linear,
        }),
    }));

    const heightSwipeStyle = useAnimatedStyle(() => ({
        height: interpolate(
            swValue.value,
            [0, zeroY + headerHeight, screenHeight],
            [
                screenHeight - zeroY - headerHeight + 10,
                screenHeight - zeroY - headerHeight + 10,
                -zeroY,
            ],
        ),
    }));
    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {},
        onActive: (event, ctx) => {
            console.log(event.velocityY);
            if (event.velocityY < -500) {
                hValue.value = screenHeight - zeroY - headerHeight + 10;
            } else if (event.velocityY > 500) {
                hValue.value = 0;
            }
            swValue.value = event.absoluteY;
        },
        onEnd: (event) => {},
    });
    useEffect(() => {
        if (show) {
            // fadeInAnim();
            hValue.value = initHeight;
        } else {
            hValue.value = 0; // fadeOutAnim();
        }
        return () => {
            hValue.value = 0;
        };
    }, [show]);
    return (
        <OutsidePressHandler
            onOutsidePress={() => {
                // hValue.value = 0;

                onFadeoutHandle();
            }}
            disabled={false}
        >
            <Animated.View
                style={[
                    {
                        display: 'flex',
                        position: 'absolute',
                        bottom: 0,
                        width: screenWidth,
                        // height: fadeAnim,
                        backgroundColor: colors.background,
                        borderTopLeftRadius: 33,
                        borderTopRightRadius: 33,
                    },
                    heightStyle,
                    heightSwipeStyle,
                ]}
            >
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View
                        style={{
                            display: 'flex',
                            // backgroundColor: 'white',
                            // borderTopLeftRadius: 24,
                            // borderTopRightRadius: 24,
                        }}
                    >
                        <MemareeText
                            style={{
                                paddingTop: 24,
                                paddingBottom: 24,
                                fontSize: 18,
                                fontFamily: 'Outfit-Bold',
                                color: colors.text,
                                textAlign: 'center',
                            }}
                        >
                            Comment
                        </MemareeText>
                        <Divider style={{ width: screenWidth, borderColor: 'white' }} />
                    </Animated.View>
                </PanGestureHandler>
            </Animated.View>
        </OutsidePressHandler>
    );
}
