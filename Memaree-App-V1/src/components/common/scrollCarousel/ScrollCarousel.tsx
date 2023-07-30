import React, { useState, useRef } from 'react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import type { ViewProps } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SceneData } from 'types/Scene';
import { Easing } from 'react-native';

type Point = {
    x: number;
    y: number;
};
type ScrollCarouselProps = {
    data: SceneData[];
    horizontal?: boolean;
    scrollEndVelocity: number;
    renderItem: ({ key: number, item: any }) => React.ReactNode;
} & ViewProps;
function ScrollCarousel({
    data,
    horizontal = false,
    scrollEndVelocity,
    renderItem,
    ...props
}: ScrollCarouselProps) {
    const { style, ...rest } = props;
    const ScrollEndVelocity = scrollEndVelocity;
    const animatedValue = new Animated.Value(0);
    let isTouchEnd = false;
    let animListenId = '';
    const scrollViewRef = useRef<ScrollView>();
    const getRoundDis = (
        offSet: Point,
        totalSize: { width: number; height: number },
        itemCount: number,
    ): number => {
        return horizontal
            ? Math.round(offSet.x / (totalSize.width / itemCount)) * (totalSize.width / itemCount)
            : Math.round(offSet.y / (totalSize.height / itemCount)) *
                  (totalSize.height / itemCount);
    };
    const onScrollMoveTo = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const sVelocity = horizontal ? event.nativeEvent.velocity.x : event.nativeEvent.velocity.y;

        if (isTouchEnd && Math.abs(sVelocity) <= ScrollEndVelocity) {
            let moveToOffset = getRoundDis(
                event.nativeEvent.contentOffset,
                event.nativeEvent.contentSize,
                data.length,
            );
            const ScrollOffSetValue = horizontal
                ? event.nativeEvent.contentOffset.x
                : event.nativeEvent.contentOffset.y;
            if (animListenId === '') {
                animatedValue.setValue(ScrollOffSetValue);

                animListenId = animatedValue.addListener(({ value }) => {
                    scrollViewRef.current.scrollTo({
                        x: horizontal ? value : 0,
                        y: horizontal ? 0 : value,
                        animated: false,
                    });
                });
                Animated.timing(animatedValue, {
                    toValue: moveToOffset,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.linear,
                }).start();
            }
        }
    };
    return (
        <SafeAreaView>
            <ScrollView
                horizontal={horizontal}
                ref={scrollViewRef}
                onScrollBeginDrag={() => {
                    isTouchEnd = false;
                    animListenId !== '' && animatedValue.removeAllListeners();
                    animListenId = '';
                }}
                onScrollEndDrag={() => {
                    isTouchEnd = true;
                }}
                onScroll={onScrollMoveTo}
                style={style}
            >
                {data.map((item, i) => renderItem({ key: i, item }))}
            </ScrollView>
        </SafeAreaView>
    );
}
export default ScrollCarousel;
