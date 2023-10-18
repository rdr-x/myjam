export enum STREAM_STATUS {
    LIVE = "Live now",
    UPCOMING = "Upcoming",
    ENDED = "Ended"
}

export interface Streams {
    id: number;
    streamer: string;
    description: string;
    audience: number;
    cost?: number;
    status?: STREAM_STATUS
}