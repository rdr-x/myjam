"use client";
import AuthCon from "@/modules/AuthCon";
import { LivepeerConfig, createReactClient  , studioProvider } from '@livepeer/react';

const client = createReactClient({
    provider: studioProvider({ apiKey: process.env.LIVEPEER_API_KEY }),
});
export default function Home() {
    return (
        <LivepeerConfig client={client}>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                
            </main>
        </LivepeerConfig>
    );
}
