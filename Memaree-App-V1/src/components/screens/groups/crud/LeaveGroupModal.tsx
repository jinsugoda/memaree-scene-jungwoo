import React, { useState } from 'react';
import { Button, useTheme } from 'react-native-paper';

import { CustomTheme } from 'styles/theme/customThemeProps';

import MemareeText from 'components/common/textAndInputs/MemareeText';
import { Overlay } from '@rneui/base';
import { View } from 'react-native';

export const LeaveGroupModal = ({ handleLeaveGroup, modalVisible, setModalVisible }) => {
    const { colors }: CustomTheme = useTheme();

    return (
        <Overlay
            animationType="slide"
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(!modalVisible)}
            fullScreen={true}
            overlayStyle={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                elevation: 0,
                margin: 0,
            }}
        >
            <View
                style={{
                    flex: 0,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: 5,
                    backgroundColor: '#2F2F2F',
                    height: '30%',
                }}
            >
                <MemareeText style={{ color: colors.text, fontSize: 30 }}>Leave Group?</MemareeText>

                <MemareeText style={{ color: colors.text, textAlign: 'center' }}>
                    You will not be able to rejoin this group without an invite from the groups
                    owner.
                </MemareeText>
                <View
                    style={{
                        flex: 0,
                        justifyContent: 'space-around',
                        width: '100%',
                        flexDirection: 'row',
                    }}
                >
                    <Button
                        labelStyle={{
                            color: colors.background,
                            fontFamily: 'Outfit-Bold',
                        }}
                        style={{
                            width: '40%',
                            backgroundColor: '#868686',
                            borderColor: '#868686',
                        }}
                        textColor={colors.background}
                        mode="outlined"
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        Cancel
                    </Button>
                    <Button
                        labelStyle={{
                            color: colors.background,
                            fontFamily: 'Outfit-Bold',
                        }}
                        style={{
                            width: '55%',
                            backgroundColor: colors.tertiary,
                            borderColor: colors.tertiary,
                        }}
                        textColor={colors.background}
                        mode="outlined"
                        onPress={() => {
                            handleLeaveGroup();
                        }}
                    >
                        Leave Group
                    </Button>
                </View>
            </View>
        </Overlay>
    );
};
