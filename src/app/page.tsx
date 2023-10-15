"use client";
import AuthCon from "@/modules/AuthCon";
import { LivepeerConfig, createReactClient  , studioProvider } from '@livepeer/react';
import { DrawerComponent } from "@/components/UI/DrawerComponent";
import { AudioPlayer } from "@/components/AudioPlayer";
import { CreateStream } from "@/components/CreateStream";

const client = createReactClient({
    provider: studioProvider({ apiKey: process.env.LIVEPEER_API_KEY }),
});
export default function Home() {
    return (
        <LivepeerConfig client={client}>
            <main
                className="flex min-h-screen flex-col items-center justify-between"
            >
                <CreateStream />
                {/*<AudioPlayer />*/}
                <DrawerComponent />
            </main>
        </LivepeerConfig>
    );
}
