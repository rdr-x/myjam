import { atom } from "jotai";

export enum STREAM_STATUS {
    LIVE = 'Live now',
    UPCOMING = 'Upcoming',
    ENDED = 'Ended',
}

export interface Streams {
    id: number
    streamer: string
    description: string
    audience: number
    cost?: number
    status?: STREAM_STATUS
}

interface StreamObject {
    id?: string;
    streamKey?: string;
    playbackId?: string;
    name: string;
    createdByTokenName: string;
    isActive: boolean;
    createdAt?: string;
    lastSeen?: string;
}

const streamState = atom<StreamObject | unknown>(null);

export const liveStreams: Streams[] = [
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 1300000,
        status: STREAM_STATUS.LIVE,
        cost: 0.2,
    },
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 1000,
        status: STREAM_STATUS.LIVE,
        cost: 0.2,
    },
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 2400,
        status: STREAM_STATUS.LIVE,
        cost: 0.2,
    },
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 150,
        status: STREAM_STATUS.LIVE,
        cost: 0.2,
    },
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 4322,
        status: STREAM_STATUS.LIVE,
        cost: 0.2,
    },
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 23400,
        status: STREAM_STATUS.LIVE,
        cost: 0.2,
    },
]
export const upcomingStreams: Streams[] = [
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 3,
        status: STREAM_STATUS.UPCOMING,
        cost: 0.2,
    },
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 1300000000,
        status: STREAM_STATUS.UPCOMING,
        cost: 0.2,
    },
    {
        id: 1,
        streamer: 'Live Stream 1',
        description:
            'Wanna share one of our newest albums. Join to be the firs one hearing it out!',
        audience: 5,
        status: STREAM_STATUS.UPCOMING,
        cost: 0.2,
    },
]

export {
    StreamObject,
    streamState
};