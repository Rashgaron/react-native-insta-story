import { ReactNode } from 'react';
import { ColorValue, ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type NextOrPrevious = 'next' | 'previous';

export interface IUserStory {
    userId: number;
    userImage: string | undefined;
    userName: string;
    stories: IUserStoryItem[];
    /** INTERNAL USE ONLY */
    seen?: boolean;
}

export interface IUserStoryItem {
    storyId: number;
    storyImage: string | undefined;
    storyDescription: string | undefined;
    storyDifficulty: string | undefined;
    isLiked: boolean | undefined;
    /** Function that gets called when the swipe up button is pressed */
    onPress?: (props?: any) => any;
    swipeText?: string;
    /** FOR INTERNAL USE ONLY */
    finish?: number;
}

interface SharedCircleListProps {
    handleStoryItemPress: (item: IUserStory, index?: number) => void;
    /** The color of the avatar border when unseen */
    unPressedBorderColor?: ColorValue;
    /** The color of the avatar border when seen */
    pressedBorderColor?: ColorValue;
    /** A custom size for the avatar rendered in the FlatList */
    avatarSize?: number;
    /** Display username below avatars in FlatList */
    showText?: boolean;
    /** Username text style below the avatar */
    textStyle?: TextStyle;
}

export interface StoryCircleListViewProps extends SharedCircleListProps {
    data: IUserStory[];
}

export interface StoryCircleListItemProps extends SharedCircleListProps {
    item: IUserStory;
}

// TODO: add JSDoc comments where necessary
export interface StoryListItemProps {
    index: number;
    key: number;
    /** Name of the user - IUserStory.user_name */
    profileName: string;
    /** Profile picture of the user - IUserStory.user_image */
    profileImage: string | undefined;
    userId: number | undefined;
    /** Time in seconds */
    duration: number;
    /** Text of the swipe up button */
    swipeText?: string;
    /** A custom swipe up component */
    customSwipeUpComponent?: ReactNode;
    /** A custom close component */
    customCloseComponent?: ReactNode;
    onFinish?: (props?: any) => any;
    onClosePress: (props?: any) => any;
    stories: IUserStoryItem[];
    currentPage: number;
    handlePressLike?: any;
    handlePressComment?: any;
    likeButton?: ReactNode;
    commentButton?: ReactNode;
    footer?: ReactNode;
    story?: any;
    customModal: ReactNode;
    showModal: boolean;
    toggleModal: ()=>void;
}

export interface StoryProps {
    /** An array of IUserStory's */
    data: IUserStory[];
    /** Time in seconds */
    duration: number;
    /** A custom size for the avatar rendered in the FlatList */
    avatarSize?: number;
    /** Style prop for the avatar FlatList container */
    style?: ViewStyle;
    /** The color of the avatar border when unseen */
    unPressedBorderColor?: TextStyle['color'];
    /** The color of the avatar border when seen */
    pressedBorderColor?: TextStyle['color'];
    /** Called when story item close button is pressed */
    onClose?: (props?: IUserStory) => any;
    /** Called when story item is loaded */
    onStart?: (props?: IUserStory) => any;
    /** Text of the swipe up button */
    swipeText?: string;
    /** A custom swipe up component */
    customSwipeUpComponent?: ReactNode;
    /** A custom close component */
    customCloseComponent?: ReactNode;
    /** Display username below avatars in FlatList */
    showAvatarText?: boolean;
    /** Username text style below the avatar */
    avatarTextStyle?: TextStyle;
    handlePressLike?: any;
    handlePressComment?: any;
    likeButton?: ReactNode;
    commentButton?: ReactNode;
    footer?: ReactNode;
    customModal?: ReactNode;
}
