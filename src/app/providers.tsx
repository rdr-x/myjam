'use client';
import { ReactNode } from "react";
import {
    LivepeerConfig,
    createReactClient,
    studioProvider
} from '@livepeer/react';

const client = createReactClient({
    provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY }),
});

export function Providers({ children }: {
    children: ReactNode
}) {
    return (
        <LivepeerConfig client={client}>
            {children}
        </LivepeerConfig>
    )
}