import React, { useEffect, useRef, useState } from 'react';
import { FlatList, PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SceneCard } from './card/SceneCard';
import { CustomTheme } from 'styles/theme/customThemeProps';
import { useTheme } from 'react-native-paper';
import Animated, {
    event,
    useAnimatedGestureHandler,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import { faL } from '@fortawesome/free-solid-svg-icons';
import ScrollCarousel from 'components/common/scrollCarousel/ScrollCarousel';
import SceneItem from './card/SceneItem';

export const SceneScreen = () => {
    const { colors }: CustomTheme = useTheme();

    let data = [
        {
            _id: '15',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            title: 'Grad Party',
            creator: {
                _id: '151',
                username: 'Alec',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '121',
                    username: 'Bob',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '121',
                    username: 'Chris',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],

            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '15',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
        {
            _id: '16',
            title: 'Sunday Football',
            coverPhoto: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            creator: {
                _id: '121',
                username: 'Bob',
                profilePicUrl: 'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
            },
            sceneMembers: [
                {
                    _id: '129',
                    username: 'Dan',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view, changeDate, invite, delete'],
                },
                {
                    _id: '127',
                    username: 'Eve',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
                {
                    _id: '527',
                    username: 'Frank',
                    profilePicUrl:
                        'https://farsa.ca/wp-content/uploads/2019/10/party-bureau-farsa.jpg',
                    permissions: ['view'],
                },
            ],
            usersCount: 25,
            createdAt: new Date(),
            start: new Date(),
            end: new Date(),
        },
    ];

    return (
        <ScrollCarousel
            data={data}
            scrollEndVelocity={0.4}
            style={{ backgroundColor: colors.background, width: '100%' }}
            renderItem={(item) => <SceneItem {...item} />}
        />
    );
};
