import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import GradientAvatar from 'components/common/avatars/single/GradientAvatar';
import RememberButton from 'components/common/buttons/interaction/RememberButton';
import MemareeText from 'components/common/textAndInputs/MemareeText';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native';
import { Dimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { CustomTheme } from 'styles/theme/customThemeProps';
import { RootStackParamList } from 'types/Screens';

export default function SceneItem(props) {
    const { colors }: CustomTheme = useTheme();
    const screenWidth = Dimensions.get('window').width;
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('FeedSceneScreen', {
                    sceneId: props?.item._id,
                    sceneTitle: props?.item.title,
                    sceneCreatorName: props?.item.creator?.username,
                    isVideo: false,
                    sceneUrl: props?.item.coverPhoto,
                });
            }}
        >
            <View style={{ width: screenWidth }}>
                <View style={{ width: screenWidth }}>
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            position: 'absolute',
                            padding: 8,
                            width: 110,
                            height: 50,
                            left: 19,
                            top: 32,
                            alignItems: 'center',

                            borderRadius: 16,
                            backgroundColor: 'rgba(47, 47, 47, 0.6)',
                            zIndex: 1,
                        }}
                        onPress={() => {}}
                    >
                        <GradientAvatar source={props?.item.creator?.profilePicUrl} size={34} />
                        <MemareeText
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                color: colors.text,
                                fontSize: 12,

                                fontFamily: 'Outfit-Bold',
                            }}
                        >
                            {props?.item.creator.username}
                        </MemareeText>
                    </TouchableOpacity>
                    <Image
                        source={{ uri: props?.item.coverPhoto }}
                        style={{ width: screenWidth, aspectRatio: 4 / 5 }}
                    />
                </View>
                <View
                    style={{
                        flex: 0,
                        position: 'absolute',
                        width: '100%',
                        bottom: 0,
                        backgroundColor: 'rgba(28, 27, 31, 0.7)',
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            paddingTop: 25,
                            paddingLeft: 19,
                            paddingRight: 13,
                            paddingBottom: 17,
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginBottom: 8,
                                justifyContent: 'space-between',
                            }}
                        >
                            <MemareeText
                                style={{
                                    fontSize: 20,
                                    color: colors.text,

                                    fontFamily: 'Outfit-Bold',
                                }}
                            >
                                {props?.item.title}
                            </MemareeText>
                            <RememberButton size={28} inverted={false} postId={props?.item._id} />
                        </View>
                        <View style={{ marginBottom: 8 }}>
                            <MemareeText
                                style={{
                                    fontSize: 14,
                                    color: colors.text,

                                    fontFamily: 'Outfit',
                                }}
                            >
                                Vancouver, BC
                            </MemareeText>
                        </View>
                        <View style={{ marginBottom: 8 }}>
                            <MemareeText
                                style={{
                                    fontSize: 14,
                                    color: colors.text,

                                    fontFamily: 'Outfit',
                                }}
                            >
                                Great concert downtown at the Rogers arena with my friends.
                            </MemareeText>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 8 }}>
                            {props?.item.sceneMembers?.map((item, i) => {
                                return (
                                    <MemareeText
                                        key={i}
                                        style={{
                                            fontSize: 14,
                                            color: colors.text,

                                            fontFamily: 'Outfit',
                                        }}
                                    >
                                        {item?.username},{' '}
                                    </MemareeText>
                                );
                            })}
                            <MemareeText
                                style={{
                                    color: colors.text,
                                    fontSize: 14,
                                    fontFamily: 'Outfit',
                                }}
                            >
                                {' '}
                                + {props?.item.usersCount - props?.item.sceneMembers.length} others
                            </MemareeText>
                        </View>
                        <TouchableOpacity
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                borderRadius: 33,
                                backgroundColor: '#D9D9D966',
                                marginTop: 20,
                                height: 42,
                            }}
                        >
                            <MemareeText
                                style={{
                                    fontSize: 14,
                                    color: colors.text,

                                    fontFamily: 'Outfit-Bold',
                                    textAlign: 'center',
                                }}
                            >
                                Invite Friends to the Scene
                            </MemareeText>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: screenWidth,
                        }}
                    >
                        <Image
                            style={{ height: 55, width: '100%' }}
                            source={require('assets/SceneDivider.png')}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
