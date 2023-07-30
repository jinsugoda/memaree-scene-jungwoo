import React, { memo, useCallback, useEffect, useState } from 'react';

// types
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/Screens';

// context
import { useFeedContext } from '../FeedContext';

// custom components
import FeedComponent from '../../composables/FeedComponent';

// 3rd party hooks
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useQuery } from '@apollo/client';

// gpl queries
import { CircleAndVisionFlipsidePostsQry } from '../../gql/CircleAndVisionFlipsidePostsQry';
import { VisionPostsQry } from '../../gql/VisionPostsQry';

// custom components
import AddToYourVision from 'components/screens/feed/emptyFeed/addToMessage/AddToYourVision';
import { useDispatch, useSelector } from 'react-redux';
import { setRemembered } from 'store/slices/visionScreenSlice';

// constants
const COLUMN_COUNT = 1;
const POST_COMMENT_LIMIT = 1;
const POST_LIMIT = 12;
export const postsKey = 'visionPosts';
const postsKey_flipped = 'getCircleAndVisionFlipsidePosts';
export const initialVariables = {
    input: {
        limit: POST_LIMIT,
    },
    commentsInput2: { limit: POST_COMMENT_LIMIT },
};

type VisionProps = NativeStackScreenProps<RootStackParamList, 'VisionScreen'>;

const VisionScreen = (props: VisionProps) => {
    const { isFlippedVision, setIsFlippedVision } = useFeedContext();
    const [isFirstFlip, setIsFirstFlip] = useState(true);
    // const isFlippedVision = false;
    const params = props?.route?.params;

    const isFocused = useIsFocused();
    // const isFocused = true;

    const dispatch = useDispatch();
    let remembered = useSelector(
        (state: { vision: { remembered: boolean } }) => state?.vision?.remembered,
    );

    const { loading, error, data, fetchMore, refetch } = useQuery(VisionPostsQry, {
        variables: initialVariables,
        fetchPolicy: 'cache-and-network',
    });

    const {
        loading: loading_flipped,
        error: error_flipped,
        data: data_flipped,
        fetchMore: fetchMore_flipped,
        refetch: refetch_flipped,
    } = useQuery(CircleAndVisionFlipsidePostsQry, {
        variables: initialVariables,
        fetchPolicy: 'cache-and-network',
    });

    useEffect(() => {
        if (isFlippedVision) {
            if (isFirstFlip) {
                console.log('refetchingFlipped V');
                setIsFirstFlip(false);
            } else {
                refetch_flipped(initialVariables);
            }
        }
    }, [isFlippedVision]);

    useFocusEffect(
        useCallback(() => {
            if (isFocused && isFlippedVision) {
                // refetch(initialVariables);
                setIsFlippedVision(false);
            }
            if (!isFlippedVision && remembered) {
                dispatch(setRemembered(false));
                refetch();
            }
        }, [isFocused]),
    );

    return (
        <FeedComponent
            feedType={'vision'}
            columnCount={isFlippedVision ? 1 : COLUMN_COUNT}
            emptyComponent={<AddToYourVision />}
            openPostOptionsBottomSheet={params?.openPostOptionsBottomSheet}
            openSharePostBottomSheet={params?.openSharePostBottomSheet}
            postsKey={isFlippedVision ? postsKey_flipped : postsKey}
            variables={initialVariables}
            posts={isFlippedVision ? data_flipped?.[postsKey_flipped] : data?.[postsKey]}
            loading={isFlippedVision ? loading_flipped : loading}
            error={isFlippedVision ? error_flipped : error}
            fetchMore={isFlippedVision ? fetchMore_flipped : fetchMore}
            refetch={isFlippedVision ? refetch_flipped : refetch}
        />
    );
};

export default memo(VisionScreen);
