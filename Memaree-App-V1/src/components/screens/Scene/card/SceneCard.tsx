import GradientAvatar from 'components/common/avatars/single/GradientAvatar';
import MemareeText from 'components/common/textAndInputs/MemareeText';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import colors from 'styles/theme/colors';
import { CustomTheme } from 'styles/theme/customThemeProps';

import { GradientAvatarCluster } from 'components/common/avatars/groups/clusterAvatarsGroup/GradientAvatarCluster';
import { Divider } from '@rneui/base';

export const SceneCard = (props) => {
    const { colors }: CustomTheme = useTheme();
    const screenWidth = Dimensions.get('window').width;
    const ptValue = (screenWidth / 0.8) * 0.3;

    return (
        <View style={{ width: screenWidth }}>
            <View style={{ width: screenWidth }}>
                <Button
                    onPress={() => {}}
                    rippleColor="rgba(3,3,3, 0.1)"
                    labelStyle={{
                        marginTop: 3,
                        width: 104,
                        color: colors.background,
                        fontFamily: 'Outfit',
                        fontSize: 12,
                        backgroundColor: colors.text,
                    }}
                    style={{
                        position: 'absolute',
                        margin: 0,
                        padding: 0,
                        width: 104,
                        height: 28,
                        backgroundColor: colors.text,
                        zIndex: 1,
                        top: 10,
                        left: screenWidth - 120,
                    }}
                >
                    + Add to Scene
                </Button>
                <Image
                    style={{ width: screenWidth, aspectRatio: 4 / 5 }}
                    source={{ uri: props?.coverPhoto }}
                />
            </View>
            <View
                style={{
                    flex: 0,
                    justifyContent: 'space-around',
                    backgroundColor: 'rgba(0,0,0, 0.7)',
                    height: ptValue,
                    marginTop: -ptValue,
                }}
            >
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '25%', flex: 0, alignItems: 'center' }}>
                        <MemareeText style={{ color: colors.text }}>{24}</MemareeText>
                    </View>
                    <View style={{ flex: 0, justifyContent: 'space-around', width: '70%' }}>
                        <View>
                            <MemareeText style={{ color: colors.text }}>
                                {props?.item?.title}
                            </MemareeText>
                        </View>
                        <View>
                            <View
                                style={{
                                    flex: 0,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingVertical: 5,
                                    overflow: 'hidden',
                                }}
                            >
                                <GradientAvatarCluster
                                    users={props?.item?.sceneMembers}
                                    size={20}
                                />
                                {props?.item?.sceneMembers?.map((element) => {
                                    return (
                                        <MemareeText
                                            style={{
                                                color: colors.text,
                                                fontSize: 14,
                                                fontFamily: 'Outfit',
                                            }}
                                        >
                                            {' '}
                                            {element.username},
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
                                    + {props?.item?.usersCount -
                                        props?.item?.sceneMembers.length}{' '}
                                    others
                                </MemareeText>
                            </View>
                        </View>
                        <View>
                            <MemareeText
                                style={{ color: colors.text, fontSize: 14, fontFamily: 'Outfit' }}
                            >
                                Created by {props?.item?.creator?.username}
                            </MemareeText>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0, width: screenWidth, alignItems: 'center' }}>
                    {/* <MemareeText style={{color: colors.text}}>View</MemareeText> */}
                    <Button
                        onPress={() => {}}
                        rippleColor="rgba(220,220,220, 0.1)"
                        labelStyle={{
                            color: colors.text,
                            fontFamily: 'Outfit-Bold',
                        }}
                        style={{
                            justifyContent: 'center' as 'center',
                            borderWidth: 1.7,
                            width: screenWidth * 0.9,
                            height: 50,
                            backgroundColor: ' rgba(217,217,217, 0.5)',
                        }}
                    >
                        View Scene
                    </Button>
                </View>
            </View>

            <Divider
                style={{ marginVertical: 20, backgroundColor: 'blue' }}
                color="#2F2F2F"
                orientation="horizontal"
                width={3}
            />
        </View>
    );
};
