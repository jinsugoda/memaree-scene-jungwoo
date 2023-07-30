import { useNavigation } from '@react-navigation/native';

import { Video, ResizeMode } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Dimensions, TouchableOpacity, Image, View, Platform, Text } from 'react-native';
import ScenePlaySVG from 'assets/generalSVGs/ScenePlay.svg';

import ArrowBackSVG from 'assets/generalSVGs/ArrowBack.svg';
import MemareeText from 'components/common/textAndInputs/MemareeText';
import { CustomTheme } from 'styles/theme/customThemeProps';
import { useTheme } from 'react-native-paper';
import AnimatedEmoji from 'components/common/buttons/interaction/AnimatedEmoji';
import CommentButtonSVG from 'assets/buttonIcons/interactions/CommentIcon.svg';
import GradientAvatar from 'components/common/avatars/single/GradientAvatar';
import * as NavigationBar from 'expo-navigation-bar';

import SwipeableModal from 'components/common/bottomMenuModals/SwipeableModal';

export default function FeedSceneScreen(props) {
    const screenWidth = Dimensions.get('window').width;

    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [emoji, setEmoji] = useState(null);
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const { colors }: CustomTheme = useTheme();
    const [isVideo, setIsVideo] = useState(false);
    const navigationBarHide = async () => {
        await NavigationBar.setVisibilityAsync('hidden');
        await NavigationBar.setBehaviorAsync('overlay-swipe');
    };
    const navigationBarShow = async () => {
        await NavigationBar.setVisibilityAsync('visible');
    };
    const headerLeft = () => {
        return (
            <View style={{ display: 'flex', flexDirection: 'column', gap: 4, marginLeft: 8 }}>
                <MemareeText style={{ fontSize: 18, color: 'white', fontFamily: 'Outfit-Bold' }}>
                    {props?.route?.params?.sceneTitle}
                </MemareeText>
                <MemareeText style={{ fontSize: 12, fontFamily: 'Outfit', color: colors.text }}>
                    created by{' '}
                    <MemareeText
                        style={{ fontSize: 12, fontFamily: 'Outfit-Bold', color: colors.text }}
                    >
                        {props?.route?.params?.sceneCreatorName}
                    </MemareeText>
                </MemareeText>
            </View>
        );
    };
    const headerRight = () => {
        return (
            <View style={{ display: 'flex', alignItems: 'flex-end', marginRight: 20 }}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={{
                        display: 'flex',
                        borderRadius: 33,
                        paddingRight: 15,
                        paddingLeft: 15,
                        paddingTop: 6,
                        paddingBottom: 6,
                        backgroundColor: 'rgba(217, 217, 217, 0.15)',
                    }}
                >
                    <MemareeText style={{ fontSize: 12, color: colors.text, fontFamily: 'Outfit' }}>
                        Invite Friends
                    </MemareeText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MemareeText style={{ fontSize: 18, color: colors.text }}>...</MemareeText>
                </TouchableOpacity>
            </View>
        );
    };
    const handleFadeOut = () => {
        setVisible(false);
    };
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
    };
    useEffect(() => {
        Platform.OS === 'android' && navigationBarHide();
        props?.route?.params?.isVideo ? setIsVideo(true) : setIsVideo(false);

        navigation.setOptions({
            headerLeft: headerLeft,
            headerRight: headerRight,
            title: '',
        });
        return () => {
            Platform.OS === 'android' && navigationBarShow();
        };
    }, []);
    return (
        <View style={{ width: screenWidth }}>
            {isVideo ? (
                <Video
                    ref={video}
                    style={{ width: screenWidth, aspectRatio: 9 / 16 /* height: '100%' */ }}
                    source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    useNativeControls
                    resizeMode={ResizeMode.COVER}
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
            ) : (
                <Image
                    source={{ uri: props?.route?.params?.sceneUrl }}
                    style={{
                        width: screenWidth,
                        aspectRatio: 9 / 16,
                        // height: '100%',
                    }}
                />
            )}

            <LinearGradient
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',

                    width: screenWidth,
                    aspectRatio: 5 / 3,
                    bottom: 0,
                    // backgroundColor: 'red',
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['rgba(28, 27, 31, 0)', 'rgba(28, 27, 31, 0.9)']}
            >
                {isVideo && (
                    <TouchableOpacity>
                        <ScenePlaySVG />
                    </TouchableOpacity>
                )}
            </LinearGradient>
            <View
                style={{
                    display: 'flex',
                    gap: 16,
                    position: 'absolute',
                    bottom: 0,
                    alignItems: 'flex-start',
                    padding: 24,

                    width: screenWidth,
                }}
            >
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 7,
                        padding: 8,
                        // width: 110,
                        height: 36,
                        alignItems: 'center',
                        borderRadius: 16,
                        backgroundColor: 'rgba(47, 47, 47, 0.6)',
                    }}
                    onPress={() => {}}
                >
                    <GradientAvatar source={props?.creator?.profilePicUrl} size={20} />
                    <MemareeText
                        style={{
                            textAlign: 'center',
                            color: colors.text,
                            fontSize: 12,

                            fontFamily: 'Outfit-Bold',
                        }}
                    >
                        {/* {props?.creator.username} */}
                        Sanmansa26
                    </MemareeText>
                </TouchableOpacity>
                <MemareeText
                    style={{ fontSize: 13, color: colors.text, fontFamily: 'Outfit' }}
                    numberOfLines={3}
                    ellipsizeMode="tail"
                >
                    Most epic concert ever, cannot WAIT to see everyone’s pics and videos. Add them
                    here! 🕺 🪩
                </MemareeText>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 8,
                        width: '100%',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <ArrowBackSVG width={24} height={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                paddingLeft: 12,
                                paddingRight: 12,
                                paddingTop: 4,
                                paddingBottom: 4,
                                borderRadius: 33,
                                height: 24,
                            }}
                        >
                            <MemareeText
                                style={{
                                    fontSize: 12,
                                    fontFamily: 'Outfit-Bold',
                                    color: 'black',
                                }}
                            >
                                + Add to Scene
                            </MemareeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(true);
                        }}
                    >
                        <CommentButtonSVG
                            width={28}
                            height={28}
                            fill="white"
                            stroke={'white'}
                            strokeWidth={1}
                            style={{ paddingHorizontal: 23 }}
                        />
                    </TouchableOpacity>

                    <AnimatedEmoji
                        size={24}
                        value={emoji}
                        onSelected={(value) => {
                            setEmoji(value);
                        }}
                    />
                </View>
            </View>
            <SwipeableModal show={visible} onFadeoutHandle={handleFadeOut} />
        </View>
    );
}
