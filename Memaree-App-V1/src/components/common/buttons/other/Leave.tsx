import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CustomTheme } from 'styles/theme/customThemeProps';
import { useTheme } from 'react-native-paper';

// custom components
import MemareeText from 'components/common/textAndInputs/MemareeText';

export const LeaveButton = ({ handleToggleModal }) => {
    const { colors }: CustomTheme = useTheme();

    return (
        <TouchableOpacity onPress={() => handleToggleModal()}>
            <MemareeText style={{ color: colors.text, paddingRight: 15 }}>Leave Group</MemareeText>
        </TouchableOpacity>
    );
};
