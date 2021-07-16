/// <reference types="react" />
export interface CustomVideoPlayerProps {
    url: string;
    handleFullscreen?: Function;
    getVideoProgressDetails?: Function;
    onVideoProgress?: Function;
    height?: number;
    width?: number;
    playing?: {
        status: boolean;
        time: number;
        speed?: PlaybackSpeeds;
    };
    controls?: {
        fullscreen: {
            show?: boolean;
            icon?: JSX.Element;
        };
        playPause: {
            show?: boolean;
            playIcon?: JSX.Element;
            pauseIcon?: JSX.Element;
        };
        playbackSpeed: {
            show?: boolean;
            color?: string;
        };
        volume: {
            show?: boolean;
            icon?: JSX.Element;
        };
        time: {
            show?: boolean;
            color?: string;
        };
    };
    rounded?: boolean;
    playerType?: 'big' | 'small';
}
export declare enum PlaybackSpeeds {
    '1x' = 1,
    '1.5x' = 1.5,
    '2x' = 2
}
export interface BufferInfoProps {
    start: Function;
    end: Function;
    length: number;
}
export declare enum VideoPlayerEvents {
    Progress = "progress",
    Stalled = "stalled",
    Seeking = "seeking",
    Seeked = "seeked",
    Timeupdate = "timeupdate",
    LoadedMetadata = "loadedmetadata",
    CanPlayThrough = "canplaythrough"
}
export interface CustomVideoController {
    getPlaybackSpeed: Function;
    getCurrentTime: Function;
    getPlayingStatus: Function;
}
